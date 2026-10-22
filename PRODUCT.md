# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two reader types, pursued **equally**; neither is secondary.

1. **Small in-house or DTC team with no dedicated experimentation owner.** For them,
   Creative Strategist and Web Strategist are one job: somebody has to decide what to
   test and what the result means for the creative. Reads the `?role=both` state.
2. **Agency with a planning department and a separate CRO function.** For them these
   are two jobs and only one seat is open. Reads a role-specific deep link
   (`?role=creative` or `?role=web`) and should not see the hybrid pitch first.

In both cases the reader is evaluating a **junior with no agency experience**, so the
first job of every page is removing the reason to stop reading.

Secondary, unconfirmed: recruiters or talent screeners may read before the hiring
manager. Not designed for as a distinct audience.

## Product Purpose

A personal portfolio presented as an ecommerce product detail page, where the
candidate is the product. It exists to get one role, one at a time.

Success is two things at once, both required:

- **Survive the credibility screen.** Get taken seriously enough to reach a
  conversation despite no agency experience and few tests run.
- **Be the work sample itself.** The page is the portfolio piece — evidence that the
  author can build, instrument and reason — not merely a container for other work.

The second is why the page's own construction is load-bearing: it is inspected, not
just read.

## Positioning

The build step is not a dependency. A computer science graduate moving into strategy
who researches the page, writes the hypothesis, builds the variant, calls the result,
and writes the brief that comes out of it — without an engineering ticket between any
two of those steps.

The claim a neighbouring portfolio could not truthfully copy: the reasoning is shown
rather than the results curated. Rejected territories with their reasons, research
that contradicted the hypothesis, and a test that lost are presented as the evidence,
on the argument that published experiment success rates make an all-wins junior
portfolio either noise or curation.

## Operating Context

- Delivered as a URL inside applications. The **role-specific deep link is the primary
  entry** (`?role=creative`, `?role=web`), chosen per application so the reader lands
  on the relevant pitch. The on-page selector serves whoever explores afterwards.
- Read cold, often on a phone, by someone with limited time and no prior context.
- Deployed as a static site to GitHub Pages.

## Capabilities and Constraints

- Static site: no framework, no build step, no dependencies. Deploys as-is.
- `content.json` is the single edit surface — all copy, projects, reviews, FAQ, specs
  and contact details. Swapping content must never require an HTML change.
- Rating, review count and the five breakdown bars are **computed from `reviews[]` at
  runtime**, never stored. The headline number cannot drift from the reviews beneath it.
- The role selector filters the project grid; a project tagged `both` appears under all
  three roles.
- `content.json` is fetched, so `file://` does not work — the page must be served.
- **Cross-reference dependency:** the "Returns?" FAQ answer points at the losing test
  as "the second card in the grid". Reordering or removing that card breaks the answer.

### Explicitly undecided

- The person's name, email, LinkedIn, GitHub, repo URL, availability date, city and
  salary band. All render as visible `[FILL: …]` markers.
- The prioritisation framework (FAQ and specs) — flagged in the source copy script as
  the single spec row a hiring manager will actually interrogate.
- Languages, frameworks, analytics and testing tools in the specs table.

## Brand Commitments

- **Voice: deadpan commerce.** Real PDP conventions used straight, never winking. The
  humour is that everything is precise, not that anything is silly. If a line reads as
  a joke, it gets straighter, not sillier.
- **One CTA label — "Add to team"** — in all three placements. Two labels on one page
  reads as indecision.
- Visual system follows `reference/brand-guide.md`, adopted 2026-09-13.
- No brand name is set; the identity is the person's own name, currently `[FILL]`.

## Evidence on Hand

Real:
- The page itself, and its source repository.
- Final written copy for every section: `pdp-portfolio-copy-script.md`.
- Cited third-party base rates (Kohavi on experiment win rates; Speero's benchmark for
  brands without a dedicated experimentation owner; Google Optimize sunset, Sept 2023).

**Absent — must not be fabricated:**
- **No client work.** Every project is self-initiated. Six projects exist as titles and
  blurbs with `[PLACEHOLDER]` modal bodies.
- **No real reviews.** Two placeholder reviews with unnamed reviewers. The reviews
  section's own lead currently claims "Every reviewer is named… Nobody here is
  anonymous", which the placeholders contradict — resolve by adding real named
  reviewers or cutting the section, never by inventing names.
- **No images.** All five gallery slots and all project cards render hatched
  placeholders.
- **No tests run at scale, no agency experience.** Both are listed explicitly under the
  specs table's "Not included" group.

## Product Principles

1. **Nothing fabricated.** A visible `[FILL]` beats a plausible invention. The entire
   argument of the page is credibility, so one invented fact costs more than any number
   of visible gaps. *(Confirmed as a durable commitment.)*
2. **Every project labelled self-initiated.** No client work is implied anywhere, and
   the labelling is explicit on each case rather than buried in a disclaimer.
   *(Confirmed as a durable commitment.)*
3. **Serve both readers without diluting either.** The one-job and two-jobs cases get
   different first impressions via deep links; neither is treated as the default.
4. **The page is inspected, not just read.** Its construction, instrumentation and
   accessibility are part of the argument, so shortcuts in the build are shortcuts in
   the pitch.
5. **Reasoning over results.** Rejected work, broken hypotheses and losses are the
   demonstration — the parts a spec portfolio usually removes.

## Accessibility & Inclusion

WCAG 2.1 AA is an established requirement, verified rather than assumed:

- All text/background pairs audited with alpha compositing — 59 distinct text styles,
  zero failures, tightest pass 5.69:1.
- Star ratings are `aria-hidden` decorative glyphs with the rating exposed as adjacent
  real text.
- Full keyboard operability: native radio group for the role selector, native
  `<details name>` for one-at-a-time FAQ, native `<dialog>` for the quick-look modal
  (focus containment, Escape, focus restore).
- Visible `:focus-visible` ring on every interactive element.
- Live regions announce the gallery caption and the filtered project count.
- Must be read cold on a phone: no horizontal scroll at any width down to 375px.
