// usage: node tools/capture.mjs <url> <out.jpg> [width] [height|full] [clickSelector] [deviceScaleFactor] [jsAfterClick]
// Screenshot via Chrome DevTools Protocol device emulation (headless --window-size
// can't go below ~500px wide on macOS). Height "full" sets the emulated viewport to
// the page's content height, so lazy images load and fixed bars sit at the bottom.
// Uses only Node built-ins and the installed Chrome.
import { spawn } from 'node:child_process';
import { writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const [url, out, w = '390', h = '720', click, dsf, js] = process.argv.slice(2);
const full = h === 'full';
const scale = dsf ? +dsf : (full ? 1 : 2);
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9333;
const profile = mkdtempSync(join(process.env.TMPDIR || tmpdir(), 'cdp-'));
const chrome = spawn(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars',
  `--remote-debugging-port=${PORT}`, `--user-data-dir=${profile}`, 'about:blank'], { stdio: 'ignore' });
const sleep = ms => new Promise(r => setTimeout(r, ms));

try {
  let target;
  for (let i = 0; i < 50 && !target; i++) {
    await sleep(200);
    try { target = (await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json()).find(t => t.type === 'page'); } catch {}
  }
  if (!target) throw new Error('Chrome did not start');

  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
  let id = 0; const pending = new Map(); const events = [];
  ws.onmessage = e => { const m = JSON.parse(e.data); if (m.id) pending.get(m.id)?.(m); else events.push(m.method); };
  const send = (method, params = {}) => new Promise((res, rej) => {
    const n = ++id; pending.set(n, m => m.error ? rej(new Error(m.error.message)) : res(m.result));
    ws.send(JSON.stringify({ id: n, method, params }));
  });
  const metrics = (height, s) => send('Emulation.setDeviceMetricsOverride', { width: +w, height, deviceScaleFactor: s, mobile: +w < 600 });
  const evaluate = expression => send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true }).then(r => r.result.value);

  await send('Page.enable');
  await metrics(full ? 900 : +h, full ? scale : 2);
  await send('Page.navigate', { url });
  for (let i = 0; i < 100 && !events.includes('Page.loadEventFired'); i++) await sleep(100);
  await sleep(1500); // fonts, hydration, entrance animations

  if (full) {
    const before = (await send('Page.getLayoutMetrics')).cssContentSize.height;
    await metrics(Math.ceil(before), scale);
    // wait for lazy images now inside the viewport
    for (let i = 0; i < 50 && !(await evaluate('[...document.images].every(i => i.complete)')); i++) await sleep(200);
    await sleep(1000);
    const after = (await send('Page.getLayoutMetrics')).cssContentSize.height;
    if (Math.abs(after - before) > 2) console.error(`warning: content height changed ${before} -> ${after} (vh-sized sections stretching?)`);
    console.log(`${out}: ${w}x${Math.ceil(after)} css px @${scale}x`);
  } else if (dsf) {
    await metrics(+h, scale);
  }

  if (click) { await evaluate(`document.querySelector(${JSON.stringify(click)}).click()`); await sleep(800); }
  if (js) { await evaluate(js); await sleep(800); }
  const { data } = await send('Page.captureScreenshot', { format: 'jpeg', quality: 80 });
  writeFileSync(out, Buffer.from(data, 'base64'));
  ws.close();
} finally {
  chrome.kill();
}
