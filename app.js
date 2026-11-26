/* ============================================================
   Portfolio PDP — vanilla, no dependencies.
   Everything data-driven renders from content.json into the
   <template> elements in index.html. Swapping content should
   never require touching HTML.
   ============================================================ */
(function () {
  'use strict';

  var DEFAULT_ROLE = 'both';

  var MODAL_FIELDS = [
    ['situation',  'The situation'],
    ['found',      'What I found'],
    ['hypothesis', 'Hypothesis'],
    ['result',     'What happened'],
    ['changed',    'What it changed']
  ];

  /* ---------- tiny helpers ---------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function tpl(id) { return $('#' + id).content.firstElementChild.cloneNode(true); }
  function text(el, value) { if (el) el.textContent = value == null ? '' : String(value); }
  function setAll(attr, value) { $$('[' + attr + ']').forEach(function (el) { text(el, value); }); }
  function stars(n) {
    var whole = Math.max(0, Math.min(5, Math.round(n)));
    return '★'.repeat(whole) + '☆'.repeat(5 - whole);
  }

  /* Aggregate ratings get a clipped overlay rather than rounded
     glyphs, so 4.5 draws four and a half stars instead of five. */
  function starBar(el, avg) {
    if (!el) return;
    var pct = Math.max(0, Math.min(100, (avg / 5) * 100));
    el.textContent = '';

    var bg = document.createElement('span');
    bg.className = 'stars__bg';
    bg.textContent = '☆☆☆☆☆';

    var fg = document.createElement('span');
    fg.className = 'stars__fg';
    fg.textContent = '★★★★★';
    fg.style.width = pct + '%';

    el.appendChild(bg);
    el.appendChild(fg);
  }

  /* Does the reader want motion? Read live rather than cached, so a
     change to the OS setting mid-session is respected. CSS
     scroll-behavior cannot reach a scrollIntoView() call that passes
     `behavior` explicitly, which is why this exists at all. */
  function prefersReducedMotion() {
    return !!(window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  /* Paint a placeholder frame: real <img> when content.json has a
     path, otherwise the hatch stays and the alt text is exposed.

     opts.decorative — the frame sits inside a control that already
       carries its own text alternative, so naming it again would make
       screen readers announce the description twice.
     opts.eager — this frame is the above-the-fold LCP candidate and
       must not be deferred. */
  function paintFrame(frame, item, opts) {
    if (!frame) return;
    var decorative = !!(opts && opts.decorative);
    frame.textContent = '';

    if (item && item.image) {
      var img = document.createElement('img');
      img.className = 'frame__img';
      img.src = item.image;
      img.alt = decorative ? '' : (item.alt || '');
      if (opts && opts.eager) {
        img.loading = 'eager';
        img.setAttribute('fetchpriority', 'high');
      } else {
        img.loading = 'lazy';
      }
      frame.appendChild(img);
      frame.classList.add('frame--has-image');
      frame.removeAttribute('role');
      frame.removeAttribute('aria-label');
    } else {
      frame.classList.remove('frame--has-image');
      if (decorative) {
        frame.removeAttribute('role');
        frame.removeAttribute('aria-label');
      } else {
        frame.setAttribute('role', 'img');
        frame.setAttribute('aria-label', (item && item.alt) || 'Placeholder image');
      }
    }
  }

  function captionChip(frame, caption) {
    if (!frame || !caption || frame.classList.contains('frame--has-image')) return;
    var cap = document.createElement('span');
    cap.className = 'frame__cap';
    cap.textContent = caption;
    frame.appendChild(cap);
  }

  /* ---------- boot ---------- */
  function init() {
    fetch('content.json', { cache: 'no-cache' })
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.json();
      })
      .then(render)
      .catch(renderLoadError);
  }

  function renderLoadError(err) {
    var local = location.protocol === 'file:';
    document.body.innerHTML =
      '<div class="loadfail">' +
        '<h1>content.json did not load.</h1>' +
        (local
          ? '<p>The page is open over <code>file://</code>, and browsers block ' +
            '<code>fetch</code> of local files. Serve the folder instead:</p>' +
            '<p><code>python -m http.server 8000</code> then open ' +
            '<code>http://localhost:8000</code>.</p>'
          : '<p>Check that <code>content.json</code> sits next to <code>index.html</code> ' +
            'and is valid JSON.</p>') +
        '<p><code>' + String(err && err.message ? err.message : err) + '</code></p>' +
      '</div>';
  }

  /* ---------- render ---------- */
  function render(data) {
    fillStatic(data);
    renderHeads(data);
    renderGallery(data);
    renderTrustBar(data);
    renderSkills(data);
    renderSteps(data);
    renderProjects(data);
    renderReviews(data);
    renderCompare(data);
    renderFaq(data);
    renderVariants(data);
    wireAddToTeam();
    wireModal(data);
  }

  /* ---------- static text ---------- */
  function fillStatic(d) {
    var name = d.meta.name;
    var sku = [d.meta.sku, d.meta.role].filter(Boolean).join(' ');

    document.title = name + ' — ' + d.meta.role;

    text($('[data-announcement]'), d.announcement.text);
    text($('[data-brand]'), name);
    text($('[data-crumb-current]'), sku);
    text($('[data-product-role]'), d.meta.role);
    text($('[data-product-name]'), name);
    text($('[data-price-band]'), d.salary.band);
    text($('[data-price-terms]'), d.salary.terms);
    text($('[data-footer-sku]'), sku);

    setAll('data-cta-label', d.cta.label);
    text($('[data-cta-micro]'), d.cta.micro);

    text($('[data-footer-eyebrow]'), d.footer.eyebrow);
    text($('[data-footer-heading]'), d.footer.heading);
    text($('[data-footer-body]'), d.footer.body);
    text($('[data-footer-colophon]'), d.footer.colophon);

    /* badges */
    var badges = $('#badges');
    d.badges.forEach(function (label) {
      var li = tpl('tpl-badge');
      text(li, label);
      badges.appendChild(li);
    });

    /* contact links + the real mailto */
    /* stored split so the address never appears whole in content.json */
    var c = d.contact;
    var email = c.emailDomain ? c.emailUser + '@' + c.emailDomain : (c.emailUser || '');
    var mail = $('#mailCta');
    text(mail, d.cta.label);
    mail.href = email.indexOf('@') > -1
      ? 'mailto:' + email + '?subject=' + encodeURIComponent(d.cta.label)
      : '#contact';

    var links = $('#contactLinks');
    [
      { label: email, href: mail.href, always: true },
      { label: 'LinkedIn', href: d.contact.linkedin },
      { label: 'GitHub', href: d.contact.github },
      { label: 'Source', href: d.contact.repo }
    ].forEach(function (item) {
      if (!item.label) return;
      if (!item.href && !item.always) return;
      var li = document.createElement('li');
      if (item.href && item.href !== '#contact') {
        var a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.label;
        if (item.href.indexOf('http') === 0) { a.rel = 'noopener'; a.target = '_blank'; }
        li.appendChild(a);
      } else {
        li.textContent = item.label;
      }
      links.appendChild(li);
    });
  }

  /* ---------- section head blocks ---------- */
  function renderHeads(d) {
    $$('[data-head]').forEach(function (host) {
      var copy = d.sections[host.getAttribute('data-head')];
      if (!copy) return;
      host.innerHTML = '';

      if (copy.eyebrow) {
        var e = document.createElement('p');
        e.className = 'eyebrow';
        e.textContent = copy.eyebrow;
        host.appendChild(e);
      }
      if (copy.heading) {
        var h = document.createElement('h2');
        h.textContent = copy.heading;
        host.appendChild(h);
      }
      if (copy.lead) {
        var l = document.createElement('p');
        l.className = 'lead';
        l.textContent = copy.lead;
        host.appendChild(l);
      }
    });
  }

  /* ---------- gallery ---------- */
  function renderGallery(d) {
    var rail = $('#thumbs');
    var main = $('#mainFrame');
    var cap = $('#mainCap');
    var items = d.gallery || [];
    if (!items.length) return;

    var buttons = [];

    items.forEach(function (item, i) {
      var li = tpl('tpl-thumb');
      var btn = $('button', li);
      /* the button's own .sr-only span names it; the frame stays silent */
      paintFrame($('.frame', li), item, { decorative: true });
      text($('.sr-only', li), item.alt || 'Image ' + (i + 1));
      btn.addEventListener('click', function () { select(i); });
      buttons.push(btn);
      rail.appendChild(li);
    });

    function select(i) {
      var item = items[i];
      /* the main frame is the above-the-fold LCP candidate */
      paintFrame(main, item, { eager: true });
      text(cap, item.caption || '');
      buttons.forEach(function (b, n) { b.setAttribute('aria-current', n === i ? 'true' : 'false'); });
    }

    select(0);
  }

  /* ---------- trust bar ---------- */
  function renderTrustBar(d) {
    var host = $('#trustBar');
    (d.trustBar || []).forEach(function (item) {
      var li = tpl('tpl-trust');
      text($('.trust__title', li), item.title);
      text($('.trust__body', li), item.body);
      host.appendChild(li);
    });
  }

  /* ---------- skills rail ----------
     One card per entry in skills[]. Adding, reordering or removing a
     card is a content.json edit; nothing here is hard-coded. A card
     only grows an action menu if its entry declares menu[]. */
  function renderSkills(d) {
    var host = $('#skillTrack');
    var items = d.skills || [];
    if (!host) return;

    /* no data, no empty band */
    if (!items.length) {
      var section = $('#skills');
      if (section) section.hidden = true;
      return;
    }

    items.forEach(function (s) {
      var li = tpl('tpl-skill');
      if (s.id) li.dataset.skill = s.id;

      var frame = $('.frame', li);
      paintFrame(frame, s);
      captionChip(frame, s.caption);

      text($('.skill__cat', li), s.category);
      text($('.skill__title', li), s.title);

      if (s.menu && s.menu.length) {
        $('.skill__card', li).appendChild(buildSkillMenu(s, li));
      }

      host.appendChild(li);
    });

    wireSkillMenus();
  }

  /* The menu items are placeholders: they close the menu and do
     nothing else. Give them real handlers here when there is
     something for them to do. */
  function buildSkillMenu(s, li) {
    var actions = tpl('tpl-skill-menu');
    var btn = $('.skill__dots', actions);
    var menu = $('.skill__menu', actions);

    text($('.sr-only', btn), 'Actions for ' + s.title);

    s.menu.forEach(function (label) {
      var item = tpl('tpl-skill-menu-item');
      var control = $('.skill__menu-item', item);
      text(control, label);
      control.addEventListener('click', function () {
        setSkillMenu(li, btn, menu, false);
        btn.focus();
      });
      menu.appendChild(item);
    });

    btn.addEventListener('click', function () {
      setSkillMenu(li, btn, menu, menu.hidden);
    });

    actions.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape' || menu.hidden) return;
      e.stopPropagation();
      setSkillMenu(li, btn, menu, false);
      btn.focus();
    });

    /* Tab out of the last item, or a click anywhere else, dismisses it */
    actions.addEventListener('focusout', function (e) {
      if (!actions.contains(e.relatedTarget)) setSkillMenu(li, btn, menu, false);
    });

    return actions;
  }

  function setSkillMenu(li, btn, menu, open) {
    if (open) closeSkillMenus(menu);
    menu.hidden = !open;
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    li.classList.toggle('skill--open', open);
    if (open) {
      var first = $('.skill__menu-item', menu);
      if (first) first.focus();
    }
  }

  function closeSkillMenus(except) {
    $$('.skill__menu').forEach(function (menu) {
      if (menu === except || menu.hidden) return;
      var actions = menu.parentNode;
      var li = actions.closest('.skill');
      var btn = $('.skill__dots', actions);
      menu.hidden = true;
      if (btn) btn.setAttribute('aria-expanded', 'false');
      if (li) li.classList.remove('skill--open');
    });
  }

  function wireSkillMenus() {
    document.addEventListener('click', function (e) {
      if (e.target.closest && e.target.closest('.skill__actions')) return;
      closeSkillMenus(null);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeSkillMenus(null);
    });
  }

  /* ---------- how it works ---------- */
  function renderSteps(d) {
    var host = $('#steps');
    (d.steps || []).forEach(function (step) {
      var li = tpl('tpl-step');
      text($('.step__n', li), step.n);
      text($('.step__title', li), step.title);
      text($('.step__body', li), step.body);
      host.appendChild(li);
    });
  }

  /* ---------- project grid ---------- */
  function renderProjects(d) {
    var host = $('#projectGrid');

    /* unfinished projects stay in content.json but off the page */
    (d.projects || []).filter(function (p) { return !p.placeholder; }).forEach(function (p) {
      var li = tpl('tpl-card');
      li.dataset.tag = p.tag || 'both';

      var frame = $('.frame', li);
      paintFrame(frame, p);
      captionChip(frame, p.caption);

      text($('.card__flag', li), p.placeholder ? 'Placeholder' : '');
      text($('.card__title', li), p.title);
      text($('.card__blurb', li), p.blurb);

      var btn = $('.card__btn', li);
      btn.setAttribute('aria-haspopup', 'dialog');
      btn.addEventListener('click', function () { openQuickLook(d, p, btn); });

      host.appendChild(li);
    });
  }

  /* ---------- reviews: everything computed from reviews[] ---------- */
  function ratingFromReviews(list) {
    var dist = [0, 0, 0, 0, 0]; /* index 0 = 5 stars … index 4 = 1 star */
    var total = 0;

    list.forEach(function (r) {
      var n = Math.max(1, Math.min(5, Math.round(Number(r.stars) || 0)));
      dist[5 - n] += 1;
      total += n;
    });

    return {
      count: list.length,
      avg: list.length ? total / list.length : 0,
      dist: dist
    };
  }

  function renderReviews(d) {
    var list = d.reviews || [];
    var r = ratingFromReviews(list);
    var avg = r.avg.toFixed(1);
    var noun = r.count === 1 ? 'review' : 'reviews';

    /* buy-box rating row */
    starBar($('#heroStars'), r.avg);
    text($('#heroRating'), avg + ' · ' + r.count + ' ' + noun);

    /* breakdown */
    text($('#avgNum'), avg);
    starBar($('#avgStars'), r.avg);
    text($('#avgCount'), 'Based on ' + r.count + ' ' + noun);

    var bars = $('#bars');
    r.dist.forEach(function (n, i) {
      var star = 5 - i;
      var li = tpl('tpl-bar');
      text($('.bar__label', li), star + ' ★');
      text($('.bar__n', li), n);
      $('.bar__fill', li).style.width = r.count ? (n / r.count * 100) + '%' : '0%';
      bars.appendChild(li);
    });

    /* individual reviews */
    var host = $('#reviewList');
    list.forEach(function (rev) {
      var li = tpl('tpl-review');
      text($('.stars', li), stars(rev.stars));
      text($('.review__srstars', li), rev.stars + ' out of 5 stars');
      text($('.review__headline', li), rev.headline);
      text($('.review__body', li), rev.body);
      text($('.review__name', li), rev.name);

      var who = [rev.role, rev.company].filter(Boolean).join(', ');
      var trailing = [who, rev.context].filter(Boolean).join(' · ');
      text($('.review__who', li), trailing);

      if (!rev.verified) $('.review__verified', li).remove();
      host.appendChild(li);
    });
  }

  /* ---------- comparison table ----------
     Columns and rows both come from content.json; a row's values[]
     is positional against columns[]. The glyph is decorative and the
     word beside it is what a screen reader gets, so the cell never
     depends on a character being announced. */
  function renderCompare(d) {
    var c = d.compare;
    var head = $('#cmpHead');
    var body = $('#cmpBody');
    if (!head || !body) return;

    var columns = (c && c.columns) || [];
    var rows = (c && c.rows) || [];

    /* no data, no empty table */
    if (!columns.length || !rows.length) {
      var section = $('#compare');
      if (section) section.hidden = true;
      return;
    }

    text($('#cmpCaption'), c.caption);
    text($('#cmpCorner'), c.featureLabel);
    text($('#cmpNote'), c.note);

    columns.forEach(function (col) {
      var th = tpl('tpl-cmp-col');
      text(th, col.label);
      if (col.own) th.classList.add('cmp__col--own');
      head.appendChild(th);
    });

    rows.forEach(function (row) {
      var tr = tpl('tpl-cmp-row');
      text($('.cmp__feature', tr), row.feature);

      columns.forEach(function (col, i) {
        var yes = (row.values || [])[i] === 'yes';
        var td = tpl('tpl-cmp-cell');
        td.classList.add(yes ? 'cmp__cell--yes' : 'cmp__cell--no');
        text($('.cmp__mark', td), yes ? '✓' : '✕');
        text($('.sr-only', td), yes ? 'Yes' : 'No');
        tr.appendChild(td);
      });

      body.appendChild(tr);
    });
  }

  /* ---------- FAQ ---------- */
  function renderFaq(d) {
    var host = $('#faqList');

    (d.faq || []).forEach(function (item) {
      var qa = tpl('tpl-faq');
      text($('.qa__text', qa), item.question);
      text($('.qa__a p', qa), item.answer);
      host.appendChild(qa);
    });

    /* <details name> gives one-open-at-a-time natively. Older
       engines ignore the attribute, so close siblings by hand. */
    if (!('name' in document.createElement('details'))) {
      var all = $$('details', host);
      all.forEach(function (det) {
        det.addEventListener('toggle', function () {
          if (!det.open) return;
          all.forEach(function (other) { if (other !== det) other.open = false; });
        });
      });
    }
  }

  /* ---------- variant selector ---------- */
  function renderVariants(d) {
    var host = $('#variantPills');
    var variants = d.variants || [];
    var initial = roleFromUrl(variants);

    variants.forEach(function (v) {
      var label = tpl('tpl-variant');
      var input = $('.pill__input', label);
      input.value = v.id;
      input.checked = v.id === initial;
      text($('.pill__label', label), v.label);
      host.appendChild(label);
    });

    $('#variantForm').addEventListener('change', function (e) {
      if (e.target.name === 'role') applyVariant(d, e.target.value);
    });

    applyVariant(d, initial, true);
  }

  function roleFromUrl(variants) {
    var asked = new URLSearchParams(location.search).get('role');
    var valid = variants.some(function (v) { return v.id === asked; });
    return valid ? asked : DEFAULT_ROLE;
  }

  function applyVariant(d, id, silent) {
    var v = (d.variants || []).filter(function (x) { return x.id === id; })[0];
    if (!v) return;

    text($('#subhead'), v.subhead);
    text($('#specLine'), v.specLine);

    var shown = 0;
    $$('#projectGrid .card').forEach(function (card) {
      var tag = card.dataset.tag;
      var match = id === 'both' || tag === id || tag === 'both';
      card.hidden = !match;
      if (match) shown += 1;
    });

    if (!silent) {
      text($('#gridStatus'), shown + ' of ' + $$('#projectGrid .card').length +
        ' projects shown for ' + v.label + '.');
    }

    var url = new URL(location.href);
    url.searchParams.set('role', id);
    history.replaceState(null, '', url);
  }

  /* ---------- Add to team: scroll, never a fake cart ---------- */
  function wireAddToTeam() {
    document.addEventListener('click', function (e) {
      var trigger = e.target.closest && e.target.closest('.js-add-to-team');
      if (!trigger) return;
      e.preventDefault();
      var section = $('#contact');
      if (section) {
        section.scrollIntoView({
          behavior: prefersReducedMotion() ? 'auto' : 'smooth',
          block: 'start'
        });
      }
      var cta = $('#mailCta');
      if (cta) cta.focus({ preventScroll: true });
    });
  }

  /* ---------- quick look ----------
     <dialog>.showModal() supplies the focus trap, Escape and the
     inert background. Backdrop click and focus restore are ours. */
  var dialog, lastTrigger = null;

  function wireModal(d) {
    dialog = $('#quicklook');

    $('#qlClose').addEventListener('click', function () { dialog.close(); });

    dialog.addEventListener('click', function (e) {
      if (e.target === dialog) dialog.close();
    });

    dialog.addEventListener('close', function () {
      if (lastTrigger && document.contains(lastTrigger)) {
        lastTrigger.focus();
      }
      lastTrigger = null;
    });
  }

  function showShots(p, view) {
    ['before', 'after'].forEach(function (side) {
      var img = $(side === 'before' ? '#qlBefore' : '#qlAfter');
      img.src = p.shots[view][side];
      img.alt = (side === 'before' ? 'Before: ' : 'After: ') + p.title + ', full page at ' + view + ' width';
    });
    $$('#qlToggle button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.view === view));
      b.onclick = function () { showShots(p, b.dataset.view); };
    });
  }

  function openQuickLook(d, p, trigger) {
    lastTrigger = trigger;

    /* full-page before/after captures when the project has them,
       otherwise the single card image */
    var frame = $('#qlFrame');
    $('#qlCompare').hidden = $('#qlToggle').hidden = !p.shots;
    frame.hidden = !!p.shots;
    if (p.shots) {
      showShots(p, 'phone');
    } else {
      paintFrame(frame, p);
      captionChip(frame, p.caption);
    }

    var variant = (d.variants || []).filter(function (v) { return v.id === p.tag; })[0];
    text($('#qlTag'), variant ? variant.label : p.tag);
    text($('#qlFlag'), p.placeholder ? 'Placeholder' : '');
    text($('#qlTitle'), p.title);
    text($('#qlBlurb'), p.blurb);

    var spec = $('#qlSpec');
    spec.innerHTML = '';
    MODAL_FIELDS.forEach(function (pair) {
      var value = p.modal && p.modal[pair[0]];
      if (!value) return;
      var dt = document.createElement('dt');
      dt.textContent = pair[1];
      var dd = document.createElement('dd');
      dd.textContent = value;
      spec.appendChild(dt);
      spec.appendChild(dd);
    });

    /* No case page yet? Don't ship a dead link. */
    var actions = $('.modal__actions');
    if (p.caseUrl) {
      actions.hidden = false;
      $('#qlCase').href = p.caseUrl;
    } else {
      actions.hidden = true;
    }

    dialog.showModal();

    /* showModal() autofocuses the close button, which tells a screen
       reader nothing. Start on the content region instead. */
    var body = $('#qlBody');
    if (body) body.focus({ preventScroll: true });
    /* that autofocus already scrolled the close button into view, which
       on a stacked phone layout pushes the image off the top */
    dialog.scrollTop = 0;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
