# Portfolio PDP

A static product detail page where the product is a person. No framework, no
build step, no dependencies. Four files do all the work:

```
index.html    section shells + <template> for every repeated element
styles.css    all design tokens as custom properties at :root
app.js        renders content.json into those templates
content.json  every word, project, review and FAQ on the page
assets/       images (optional — placeholders render without them)
```

## Local preview

`app.js` reads `content.json` over `fetch`, which browsers block on `file://`.
Opening `index.html` by double-clicking shows an error telling you this. Serve
the folder instead:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

Any static server works (`npx serve`, `php -S localhost:8000`, etc.).

## Editing content

Everything editable lives in `content.json`. Nothing in it requires an HTML
change.

- `[FILL: …]` and `[PLACEHOLDER: …]` markers render **literally on the page**,
  on purpose. Nothing is silently invented, so an unfinished value is visible
  rather than plausible. Search the JSON for `FILL` and `PLACEHOLDER` to see
  what is outstanding.
- **Rating is not stored.** The average, the review count and the five
  breakdown bars are all computed from `reviews[]` at load. Add or remove a
  review and every number on the page moves with it. There is no way for the
  headline rating to disagree with the reviews underneath it.
- **Images are optional.** Leave a `image` field as `""` and a hatched
  placeholder renders with its caption. Drop a file in `assets/` and set
  `"image": "assets/name.jpg"` and it swaps in. `alt` is used either way.
- **Projects** are filtered by the role selector. A project tagged `creative`
  or `web` shows only under that role; one tagged `both` shows under all three.

## Deep links

The role selector writes to the URL, and the URL sets the initial state:

- `?role=creative` — Creative Strategist
- `?role=web` — Web Strategist
- `?role=both` — everything (default)

Put the role-specific URL in an application so the reader never lands on the
hybrid state. The selector is for whoever explores afterwards.

## Deploying to GitHub Pages

Push to `main` and enable Pages on the repository root. `.nojekyll` is included
so Pages serves the files as-is instead of running them through Jekyll. No
build step is configured or needed.
