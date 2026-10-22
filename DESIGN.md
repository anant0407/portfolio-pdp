---
name: Portfolio PDP
description: A product detail page for a person, built at retail fidelity and played completely straight.
colors:
  authority-navy: "#022044"
  attention-blue: "#9dc1f3"
  attention-tint: "rgba(157, 193, 243, .1)"
  paper: "#FAFAF8"
  paper-alt: "#e4edf9"
  paper-card: "#ffffff"
  signal-yellow: "#eeee4b"
  amber-star: "#f59e0b"
  ink-soft: "rgba(2, 32, 68, .85)"
  ink-muted: "rgba(2, 32, 68, .75)"
  ink-faint: "rgba(2, 32, 68, .70)"
  line: "rgba(2, 32, 68, .12)"
  line-strong: "rgba(2, 32, 68, .20)"
  scrim: "rgba(2, 32, 68, .55)"
  on-dark: "#FAFAF8"
  on-dark-muted: "rgba(250, 250, 248, .78)"
  on-dark-faint: "rgba(250, 250, 248, .62)"
  rule-dark: "rgba(250, 250, 248, .18)"
  hatch-a: "#dbe6f5"
  hatch-b: "#eef4fc"
  hatch-dark-a: "#06305f"
  hatch-dark-b: "#042a53"
typography:
  display:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-.02em"
  headline:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2rem, 4vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-.01em"
  title:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.875rem, 3.4vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: ".017em"
  lead:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  body-sm:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  body-xs:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  meta:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: ".1667em"
  label-sm:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: ".1818em"
  mono:
    fontFamily: "IBM Plex Mono, ui-monospace, Menlo, monospace"
    fontSize: "0.9375rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: ".0667em"
  price:
    fontFamily: "IBM Plex Mono, ui-monospace, Menlo, monospace"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  cta: "40px"
  filter: "20px"
  card: "10px"
  panel: "8px"
  tab: "6px"
  sm: "4px"
spacing:
  gutter: "24px"
  section-y: "clamp(56px, 7vw, 80px)"
  nav-h: "4rem"
  tap: "2.75rem"
  col-gap: "clamp(32px, 4vw, 40px)"
  grid-gap: "24px"
  card-pad: "18px"
  review-pad: "22px"
  cell-pad: "16px"
components:
  button-primary:
    backgroundColor: "{colors.attention-blue}"
    textColor: "{colors.authority-navy}"
    typography: "{typography.mono}"
    rounded: "{rounded.cta}"
    padding: "0 28px"
    height: "3.5rem"
  button-primary-hover:
    backgroundColor: "{colors.authority-navy}"
    textColor: "{colors.on-dark}"
  button-primary-sm:
    backgroundColor: "{colors.attention-blue}"
    textColor: "{colors.authority-navy}"
    typography: "{typography.body}"
    rounded: "{rounded.cta}"
    padding: "0 18px"
    height: "2.75rem"
  button-on-dark:
    backgroundColor: "{colors.attention-blue}"
    textColor: "{colors.authority-navy}"
    typography: "{typography.mono}"
    rounded: "{rounded.cta}"
    padding: "0 30px"
    height: "3.375rem"
  button-on-dark-hover:
    backgroundColor: "{colors.on-dark}"
    textColor: "{colors.authority-navy}"
  pill-variant:
    backgroundColor: "transparent"
    textColor: "{colors.authority-navy}"
    rounded: "{rounded.panel}"
    padding: "13px 14px"
  pill-variant-selected:
    backgroundColor: "{colors.attention-tint}"
    textColor: "{colors.authority-navy}"
    rounded: "{rounded.panel}"
    padding: "12.5px 13.5px"
  badge-flag:
    backgroundColor: "{colors.signal-yellow}"
    textColor: "{colors.authority-navy}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0 12px"
    height: "1.5rem"
  card-project:
    backgroundColor: "{colors.paper-card}"
    textColor: "{colors.authority-navy}"
    rounded: "{rounded.card}"
    padding: "18px"
  card-review:
    backgroundColor: "{colors.paper-card}"
    textColor: "{colors.authority-navy}"
    rounded: "{rounded.card}"
    padding: "22px"
  thumb:
    rounded: "{rounded.tab}"
    size: "64px"
  specs-group-header:
    backgroundColor: "{colors.authority-navy}"
    textColor: "{colors.on-dark}"
    typography: "{typography.label}"
    padding: "14px 16px"
  modal-panel:
    backgroundColor: "{colors.paper-card}"
    textColor: "{colors.authority-navy}"
    rounded: "{rounded.panel}"
    padding: "34px 32px"
    width: "920px"
---

# Design System: Portfolio PDP

## Overview

**Creative North Star: "The Deadpan Storefront"**

Commerce grammar played absolutely straight. Every convention of a direct-to-consumer product detail page is present at full retail fidelity — breadcrumb, gallery with thumb rail, buy box, variant radios, trust bar, ingredient table, star-rating breakdown with distribution bars, quick-look modal, closing CTA block — and not one of them is winked at. The product happens to be a person. Nothing in the visual system acknowledges that. The humour, to the extent there is any, is that everything is exactly precise.

The system is inherited rather than invented. It follows `reference/brand-guide.md`, the documented visual system of a real DTC supplement brand, adopted 2026-09-13. That inheritance is the argument: a page that merely resembles a storefront would read as pastiche, so this one reproduces a real one's palette logic, type scale, button anatomy and section rhythm closely enough to survive inspection. Two deviations are deliberate and documented in the stylesheet header, both taken for contrast: Attention Blue never carries text on a light ground, and the primary CTA's label is navy rather than white. Both are recorded as hard rules below.

This is the **incumbent implementation**, accurately captured, not permanent law. The palette and type may eventually give way to the person's own identity. Until they do, treat everything here as binding — the page's whole credibility rests on looking built rather than assembled, and drift is the failure mode. Density is retail-moderate: generous vertical section rhythm, tight component interiors, hairlines instead of boxes, and a hard ceiling of 1100px on content width so the page reads as a column rather than a dashboard.

**Key Characteristics:**
- Navy anchors authority; a single pale blue carries every point of attention
- Flat surfaces, hairline rules, and background alternation instead of shadow scaffolding
- One pill CTA with a black hairline and a hard graphic shadow — the only pressable-looking object on the page
- Monospace reserved for machine-set values: price, CTA label, captions, codes
- Native HTML doing the structural work — `<details name>`, `<dialog>`, real radio groups, real `<table>`
- Every image slot is a hatched placeholder until real assets exist, and looks deliberately unfinished rather than fake

## Colors

A two-hue system: a near-black navy and a pale blue drawn from the same family, separated by roughly 56 points of lightness, over a warm off-white paper. Everything else is those two colours at reduced alpha.

### Primary
- **Authority Navy** (`#022044`): The page's ink and its structure. Every heading, every link at rest, all body text via alpha steps, the announcement bar, the specs table header, the mid-page "How it works" block, and the continuous closing CTA and footer. It is also the primary CTA's *label* colour and its hover fill. Nothing on this page is black; navy does black's job.
- **Attention Blue** (`#9dc1f3`): Attention, and only attention. The primary CTA fill, the active gallery thumbnail border, the selected variant radio border, eyebrow text on navy grounds, and the large step numerals in the dark section. Its scarcity is what makes the buy action findable.
- **Attention Tint** (`rgba(157, 193, 243, .1)`): The selected variant pill's fill — the one place the accent appears as a large soft area rather than a line or a button.

### Secondary
- **Signal Yellow** (`#eeee4b`): Exactly one element — the role badge sitting above the product name, the page's analogue of a "Best Seller" flag. It is the only warm colour in the layout and appears at roughly 100×24px, once.
- **Amber Star** (`#f59e0b`): Star glyphs only, in all three rating contexts (hero, breakdown, individual reviews). Never text, never a fill.

### Neutral
- **Paper** (`#FAFAF8`): The default section ground, warm rather than white. Also serves as the on-navy text colour, which is why the page never uses pure white type.
- **Paper Alt** (`#e4edf9`): The alternate section ground, a cool tinted stock. Also the alternating specs table row, the trust bar ground, and the circular checkmark badges.
- **Paper Card** (`#ffffff`): Reserved for objects that sit *on* a ground — the sticky nav, project cards, review cards, non-alternating table rows, the modal panel, and frame captions. White signals "this is a separate object," never "this is the page."
- **Ink Soft / Muted / Faint** (navy at 85% / 75% / 70%): The body-text ramp. Muted is standard body and subheads; Faint is metadata, card blurbs, breadcrumbs and counts; Soft appears only in full-width spec values.
- **Line / Line Alt / Line Strong** (navy at 12% / 15% / 20%): Dividers, table borders, and unselected control borders respectively. Strong is also the breadcrumb separator and the interpunct between review name and role.
- **On-Dark Muted / Faint** (paper at 78% / 62%) and **Rule Dark** (paper at 18%): The navy-ground equivalents of the ink ramp and the hairline.
- **Hatch** (`#dbe6f5` / `#eef4fc` light, `#06305f` / `#042a53` dark): A 9px diagonal two-tone used exclusively for empty image slots. Not decoration — a stated absence.

### Named Rules

**The Fill-Only Rule.** Attention Blue never carries text on a light ground. It appears as a fill, a border, a numeral on navy, or an eyebrow on navy — never as body copy, link text, or a heading on paper. `#9dc1f3` on `#FAFAF8` is roughly 1.7:1 and fails at any size.

**The Navy Label Rule.** The primary CTA's label is Authority Navy, not white. This is a documented deviation from the source brand guide, taken because white on `#9dc1f3` measures about 1.8:1. Navy on the same fill clears AA comfortably. If the CTA fill ever changes, the label colour is re-derived from measurement, never inherited.

**The Never-Twice Rule.** No two consecutive full-width sections share a background. The flow runs paper → paper-alt → paper → paper-alt → navy → paper → paper-alt → paper → navy. Adding a section means re-checking its neighbours, not appending.

**The Navy Punctuation Rule.** Navy appears in the body flow exactly twice: once mid-page (How it works) and once at the close, where the CTA block and footer bar run continuous with no seam between them. A third navy block would turn punctuation into a pattern and flatten the page.

## Typography

**Display Font:** Inter (with `system-ui`, `-apple-system`, sans-serif)
**Body Font:** Inter — the same face; the system is single-family by necessity
**Label/Mono Font:** IBM Plex Mono (with `ui-monospace`, Menlo, monospace), weight 700 only

**Unit:** The type scale is set in `rem` against a 16px root, and tracking on the uppercase label styles is set in `em`, so both follow the reader's own browser font-size preference rather than overriding it. Every px figure quoted below is the rendered size at default settings.

**Character:** The source brand guide specifies ABC Social, Roc Grotesk and SocialMono — all licensed and unavailable here. Inter is that guide's own documented fallback, so the substitution is the guide's, not an invention. The result is deliberately neutral: a grotesque doing all the structural work through weight, size and letter-spacing rather than personality, with a single monospace cutting in wherever a real storefront would print a machine-set value. Type is set almost entirely at 700 or 400 — the middle weights barely appear, which keeps hierarchy legible at a glance on a phone.

### Hierarchy
- **Display** (700, `clamp(40px, 5vw, 52px)`, line-height 1, `-.02em`): Two uses only — the aggregate rating number, and the large step numerals in the dark section, where it is set in Attention Blue over a hairline.
- **Headline** (700, `clamp(32px, 4vw, 44px)`, line-height 1.15, `-.01em`): Every section heading and the closing CTA heading. `text-wrap: pretty` throughout.
- **Title** (700, `clamp(30px, 3.4vw, 36px)`, line-height 1.2, `+.6px`): The product name — the H1 — and, at a fixed 26px, the quick-look modal title. Note the positive letter-spacing: it is the only large type on the page that tracks open rather than tight.
- **Lead** (400, 17px, line-height 1.5–1.6): Section leads, the product subhead, and the closing CTA body. Muted ink; capped at 460px in the CTA block.
- **Body** (400, 16px, line-height 1.6): Prose columns. Drops to 15px in denser contexts — spec values, review bodies, FAQ answers, modal copy — and to 14px in card blurbs and trust items.
- **Label** (700, 12px, `2px`, uppercase): Eyebrows, the variant fieldset legend, trust item titles, and spec group headers. At 11px for the announcement bar, card flags, and modal metadata.
- **Mono** (700, 15px, `1px`, uppercase): The primary CTA label. At 18px without tracking for the price band, and at 11px for placeholder frame captions, the closing media caption, and inline code.

### Named Rules

**The Shelf Label Rule.** The product name is set *smaller* than the section headings above and below it — Title tops out at 36px, Headline at 44px. This is correct and intentional. Real product pages do not set the product name as a hero; the buy box is a dense information block, not a title card. Enlarging the H1 is the single fastest way to make this page stop reading as commerce.

**The Mono Reserve Rule.** IBM Plex Mono appears only where a storefront prints a value rather than a sentence: the price band, the primary CTA label, placeholder captions, the SKU, and code. It never sets a heading, a body paragraph, or a label. The small nav CTA explicitly opts back into the sans face because at 36px height the tracked monospace reads as a system alert.

**The Two-Weight Rule.** Type is 400 or 700. Weights 500 and 600 appear in exactly three places (trust badges, bar labels, the FAQ question) and are inherited from the source guide. Do not introduce a fourth weight to create a new tier — use size and colour.

## Layout

A single centred column, 1100px maximum, with a 24px gutter held by one `.shell` wrapper that every section reuses. The source brand guide specifies a 1440px page width; this page narrows it deliberately, because a portfolio read cold on a phone benefits more from a short measure than from a wide shelf. Two secondary measures constrain reading: section heads cap at 680px and the FAQ at 760px.

Vertical rhythm is one clamp — `clamp(56px, 7vw, 80px)` — applied as `padding-block` on every section, so the page has exactly one spacing decision repeated. The sticky nav is 64px, the announcement bar 33px, and anchored sections carry `scroll-margin-top: calc(64px + 12px)` so a jump link never lands under the nav.

The grid vocabulary is small and mostly intrinsic:

- **Buy box:** `1fr 1fr`, gap `clamp(32px, 4vw, 40px)`, top-aligned — gallery left, purchase column right
- **Prose and How-it-works:** two columns, gap `clamp(28px, 4vw, 60px)`
- **Reviews:** `minmax(240px, 320px) 1fr` — a fixed-ish breakdown rail beside a flexible review list
- **Project grid:** `auto-fill, minmax(280px, 1fr)`, 24px gap
- **Trust bar and steps:** `auto-fit, minmax(230px/240px, 1fr)` — these reflow without a media query
- **Variant pills:** `auto-fit, minmax(120px, 1fr)`, 8px gap

**Responsive.** Two breakpoints. At **900px** every two-column grid collapses to one, the gallery flips to `column-reverse` so the main image sits above a horizontal thumb strip whose thumbs become equal-width squares, the closing CTA's media block moves to `order: -1` above its text, and the modal becomes a single column. At **640px** the nav's text links are hidden — the CTA stays — and the specs table abandons `table-layout: fixed` to stack each row's label above its value as blocks. No horizontal scroll at 375px is a requirement, not an aspiration; `overflow-x: hidden` on the body is a backstop, not the mechanism.

## Elevation & Depth

The page is flat by default. Depth comes from background alternation and hairlines, not from a shadow ramp — there is no elevation scale, and surfaces do not stack. Two exceptions exist, and they are different idioms rather than two steps of one scale.

### Shadow Vocabulary
- **Object lift** (`box-shadow: 0 2px 8px rgba(0, 0, 0, .08)`): Soft and ambient. Applied only to things that read as discrete objects resting on a ground — project cards, review cards, and the specs table. On hover, project cards deepen to `0 6px 18px rgba(0, 0, 0, .12)` and rise 2px.
- **Press affordance** (`box-shadow: rgba(0, 0, 0, .33) 0 4px 4px`): Hard, dark, barely blurred, and paired with a 1px pure-black border. This is a graphic shadow, not an atmospheric one, and it belongs to the primary CTA alone in both its full-size placements. It is the loudest treatment on the page and marks the one thing meant to be pressed.

### Named Rules

**The Flat-By-Default Rule.** New surfaces get a background and a hairline, not a shadow. If a thing needs to feel separated, change its ground (`paper-card` on `paper-alt`) or give it a 1px `line` border.

**The Two Idioms Rule.** Object lift and press affordance never mix, and neither is extended to a new element without a reason stronger than "it looked flat." Adding the hard CTA shadow to a second element destroys the buy action's uniqueness; adding a soft shadow to a section destroys the flatness that makes cards read as objects.

## Shapes

Rectilinear, with radius used as a role signal rather than a style. Six values are in play and each means something specific:

- **40px (full pill)** — the primary CTA, in all three placements. Nothing else is a pill at this scale.
- **20px** — reserved for filter pills (defined in tokens, from the source guide's UGC filter pattern).
- **10px** — cards: project cards and review cards. The project card's image frame carries the radius on its top two corners only, so the image meets the body flush.
- **8px** — panels: variant radios, the modal, and the specs table's clipped corners.
- **6px** — tabs and gallery thumbnails.
- **4px** — micro-surfaces: the role badge, frame captions, bar tracks and fills, the skip link, inline code.

Borders are hairlines at navy alpha, except two deliberate departures: the primary CTA's border is **pure `#000`**, the only true black on the page, inherited from the source guide as part of the signature CTA anatomy; and the selected variant pill swaps from `1.5px` to `2px` Attention Blue while its padding drops by exactly 0.5px on each axis, so selection never shifts the layout. The gallery thumbnail runs the same trick with a 1.5px border that only changes colour.

The recurring silhouette is the **hatched frame**: a 9px-period 135° two-tone diagonal filling every image slot, with a centred monospace caption on a white chip naming what belongs there. It appears in the gallery, the thumbnails, the project cards, the modal, and the closing CTA's media half in its dark variant. It is the page's most visible texture and exists only because real imagery does not.

## Components

Components are **precise and unglamorous** — retail furniture, built correctly. They look like controls rather than decorations, they use native elements wherever a native element exists, and the craft shows in things like the 1.5px→2px border swap with compensating padding rather than in ornament.

### Buttons
- **Shape:** Full pill (40px radius), flex-centred, uppercase tracked monospace.
- **Primary:** Attention Blue fill, Authority Navy label, **1px solid `#000`** border, hard press shadow. 56px tall, 0 28px padding. On `.btn--block` it stretches full width under the variant selector.
- **Hover / Focus:** Fill inverts to Authority Navy with paper text over 150ms; border and shadow persist. Focus shows the global 2px navy ring at 3px offset.
- **Small (nav):** 36px tall, 0 18px padding, and explicitly **reverts to the sans face** at 14px with no tracking or uppercasing — the monospace treatment does not survive at this size.
- **On dark (closing CTA):** Same fill, border and shadow at 54px; hover inverts to paper fill with navy text, since navy-on-navy would vanish.

### Chips
- **Role badge:** Signal Yellow, navy label, 24px tall, 4px radius, 11px uppercase at 2px tracking, 18px below. The page's only yellow element.
- **Trust badge:** A 20px Paper Alt circle carrying a navy `✓`, 9px from a 13px muted label. Generated entirely from `::before` — no icon assets.
- **Card flag:** 11px uppercase muted text, no container; collapses via `:empty` when a project has no flag.

### Cards / Containers
- **Corner Style:** 10px, with the project card's frame taking `10px 10px 0 0`.
- **Background:** Paper Card white on whatever ground the section provides.
- **Shadow Strategy:** Object lift only (see Elevation). Project cards add a `translateY(-2px)` rise and a deeper shadow on hover; review cards are static.
- **Border:** None. The shadow and the white ground do the separating.
- **Internal Padding:** 18px for project card bodies, 22px for review cards. The card body is a flex column with a 7px gap and pushes its "Quick look →" cue to the bottom with `margin-top: auto`, so cards of unequal text still align their cues.

### Inputs / Fields
- **Variant radio ("pill"):** A real `<input type="radio">` visually hidden inside a `<label>`. Unselected: transparent with a 1.5px `line-strong` border at 8px radius. Hover shifts the border to Attention Blue. Selected: 2px Attention Blue with a 10% Attention Blue fill, padding compensated to 12.5px/13.5px. Focus is proxied from the hidden input to the label via `:has(.pill__input:focus-visible)`.
- **Gallery thumbnail:** 64px square, 6px radius, 1.5px border; `line` at rest, `line-strong` on hover, Attention Blue when `aria-current="true"`.

### Navigation
- Sticky at top with a 64px inner row, Paper Card ground and a single `line` bottom hairline. Brand mark at 20px/700 with `-.01em`; links at 16px/700 navy, hovering to muted ink, 28px apart. Below 640px the text links hide and only the small CTA remains, which keeps the nav a single-purpose bar on a phone.

### Specs table
A real `<table>` with `table-layout: fixed`, a 190px first column, 8px clipped corners and object lift. Group headers span both columns in navy with paper 12px uppercase labels — except the **"Not included" group, which sets its label in Attention Blue instead**, the one place the accent is used to mark a negative. Data rows alternate Paper Card and Paper Alt via `:nth-child(even of .specs__row)`. Below 640px label and value stack as blocks with asymmetric padding so the pair still reads as one row.

### Rating stars
A decorative-glyph technique rather than an icon set: two identical star rows stacked, the foreground absolutely positioned and clipped by a percentage width set at runtime, producing exact fractional ratings in Amber Star. The whole construct is `aria-hidden`, with the real rating exposed as adjacent text — visual precision without inventing a semantic.

### Browser surfaces
The parts not drawn by hand still belong to the palette, and on a page whose construction is the argument they are the cheapest tell. Text selection is Attention Blue ground with Authority Navy ink (8.78:1, one rule covering both light and navy sections). `color-scheme: light` is declared on `:root` so the UA renders its own scrollbars, controls and default focus ring against a light page rather than guessing. The modal's scrollbar is thinned and tinted to `--line-strong`. The rating breakdown sets `font-variant-numeric: tabular-nums` so the 5→1 rail and its counts hold register as values change.

### Quick-look modal
A native `<dialog>` at 920px, `max-width: calc(100vw - 32px)`, 88vh max height, 8px radius on Paper Card with a `line` border. Its backdrop is navy at 55% with a 3px blur. Two columns — a hatched media half and a 34px/32px body — collapsing to one below 900px. Focus containment, Escape and focus restoration come from the element, not from script.

### FAQ accordion
Native `<details name="faq">` so only one opens at a time with no JavaScript. Hairline-separated rows, 17px/600 questions with 20px vertical padding, and a `+` / `−` glyph generated from `::before` with the default marker suppressed. Answers set at 15px/1.7 with a 60px right inset on desktop that drops to 0 on mobile.

## Do's and Don'ts

The confirmed anti-reference is blunt: **it must not look AI-generated.** That is the test every change is measured against, and it is why the rules below are specific rather than tasteful. A generated page announces itself through a small, recognisable set of moves; this page's credibility depends on containing none of them.

### Do:
- **Do** keep the section background alternation intact (paper → paper-alt → navy) and re-check neighbours when inserting a section — see The Never-Twice Rule.
- **Do** reserve Attention Blue for fills, borders, on-navy text and active states — see The Fill-Only Rule.
- **Do** re-derive a label colour from measured contrast whenever a fill changes, the way the navy CTA label was derived.
- **Do** use native elements for behaviour that has one — `<details name>` for the accordion, `<dialog>` for the modal, a real radio group for the variant selector, a real `<table>` for specs.
- **Do** compensate padding when a border thickens on selection, so nothing shifts.
- **Do** set new type at 400 or 700 and create tiers with size and colour instead of new weights.
- **Do** keep the product name below section-heading scale — see The Shelf Label Rule.
- **Do** size type in `rem` and label tracking in `em`, so the reader's browser font-size preference is honoured rather than overridden.
- **Do** keep interactive targets at `--tap` (2.75rem / 44px) or larger, using an invisible overlay when the visual element must stay smaller.
- **Do** theme the surfaces you didn't draw — selection, scrollbars, focus rings, `color-scheme`, tabular numerals. See Browser surfaces.
- **Do** handle `prefers-reduced-motion` per case: colour and shadow transitions are state feedback and stay; positional motion goes. Anything scrolled from JavaScript must read the preference itself — CSS cannot reach it.
- **Do** let hatched frames stay visibly unfinished. A placeholder that looks like a placeholder is honest; a stock photo standing in for real work is not.

### Don't:
- **Don't** enlarge the H1 into a hero, centre the buy box, or introduce a full-bleed opening statement. The moment the first viewport reads as a portfolio instead of a product page, the entire premise is gone.
- **Don't** add a gradient of any kind to a surface, a heading, or a button. The only gradients in this system are the two hatched placeholders, and they are flat-stepped diagonals standing in for missing images — not decoration. Gradient text and mesh backgrounds are the clearest generated-UI tell there is.
- **Don't** add scroll-triggered reveals, staggered fade-ins, blur-in text, or a floating gradient orb. Motion here is limited to 150ms colour and shadow transitions on hover, a 2px card rise, and the skip link.
- **Don't** introduce emoji, generic icon-library glyphs, or coloured circular icon badges. The two checkmarks on this page are CSS `content: '✓'` in navy, and that is the whole icon system.
- **Don't** soften the geometry toward uniform large radii. Radius is a role signal — 40px means "press this," 10px means "this is a card" — and flattening them to one friendly value erases the distinction.
- **Don't** give a second element the hard `rgba(0,0,0,.33) 0 4px 4px` CTA shadow, or add soft shadows to sections. See The Two Idioms Rule.
- **Don't** treat the commerce framing as a joke in the visual layer — no comic faces, no oversized badges, no ironic styling. Straighter, never sillier.
- **Don't** use pure black or pure white as a text colour. Navy is the ink; Paper is the on-dark. The single `#000` on this page is the CTA's border.
- **Don't** add a third navy section to the body flow — see The Navy Punctuation Rule.

### Two standing exceptions, and their exit conditions

Automated design linting will flag two things here. Both are deliberate, and both have a defined end:

- **Inter as the primary face** reads as an overused, generated-UI-adjacent default. It is kept because it is the source brand guide's *own documented fallback* for ABC Social, which is licensed and unavailable. If those faces are ever licensed — or if the page moves to the person's own identity — replace Inter rather than defending it. Do not swap it for another popular grotesque; that trades the justification for nothing.
- **The repeating-gradient hatch** is a generated-UI signature in general and a deliberate placeholder idiom here. It is correct only while the image slots are genuinely empty. The moment real imagery lands in `content.json`, `.frame--has-image` clears the hatch and the exception retires with it.
