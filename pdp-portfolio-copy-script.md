# PDP Portfolio — Full Copy Script

**Concept:** Ecommerce product detail page, candidate as product. Deadpan commerce, never winking.
**Roles targeted:** Creative Strategist / Web Strategist / Both (variant selector)
**Stack:** Static site repo → GitHub Pages or Netlify + custom domain. Content driven from `content.json`.

Everything below is final copy unless marked `[PLACEHOLDER]` or `[FILL]`.
Build notes sit in square brackets and do not ship.

---

## 1. Announcement bar

```
Available from [FILL: date]. Remote or [FILL: city]. One role at a time.
```

*[Single line, no dismiss button. If the date passes and you haven't updated it, the whole page loses credibility. Set a calendar reminder.]*

---

## 2. Nav

```
[Your Name]          Work    Reviews    Contact          [Add to team]
```

*[Nav CTA is the same button as the buy box, same label. Two different CTA labels on one page reads as indecision.]*

---

## 3. Buy box

### Gallery, left column

Five images, captions written as product photography captions.

| # | Image | Caption |
|---|-------|---------|
| 1 | The site you're on, with its analytics panel open | Ships instrumented. |
| 2 | A test roadmap, ranked, with the ranking method visible | Prioritisation method, written down. |
| 3 | A brief, one page | One page. This is the deliverable. |
| 4 | A results readout showing a loss | Test 04. Did not win. |
| 5 | Rejected territories, four of them, struck through | What didn't make it, and why. |

### Right column

```
JUNIOR STRATEGIST

[Your Name]

★★★★★  4.8  ·  11 reviews

[FILL: £__,000 – £__,000] · Full time · Junior
```

*[Price must be a real band you'd accept. A joke price is a wink and breaks the format.]*

### Hero subheads

All three ship. The selector swaps subhead and spec line only. Nothing else on the page moves.

**Variant A — Creative Strategist**

```
Writes the brief, and can build the thing the brief describes.

Origin: computer science. Ships what it briefs.
```

**Variant B — Web Strategist**

```
Runs the test, and can build the page it runs on.

Origin: computer science. Stopping rule stated on page.
```

**Variant C — Both** *(default state)*

```
Builds the page, runs the test, writes the brief that comes out of it.

Origin: computer science. Ships what it briefs, and states the stopping rule.
```

### Variant selector

```
ROLE
[ Creative Strategist ]  [ Web Strategist ]  [ Both ]
```

### Trust badges, inline under the selector

```
Ships immediately · 30-day guarantee · No handholding required
```

### Button

```
ADD TO TEAM
```

### Micro-line under button

```
Opens an email. No form.
```

*[Buy box word count, Variant C: 54. Under the 60 limit. Do not add a second CTA.]*

---

## 4. Trust bar

```
SHIPS IMMEDIATELY
Available [FILL: date]. No notice period.

30-DAY GUARANTEE
A roadmap, a stopping rule, and one shipped experiment in the first month.

NO HANDHOLDING REQUIRED
Writes the variant and deploys it. No engineering ticket.
```

---

## 5. Product description

```
Most small teams don't have anyone whose job is experiments. Around 40% of
brands have no dedicated person for it at all. The work still gets done,
just badly: someone has an idea in a meeting, someone else builds a
version of it a fortnight later, and by the time it's live nobody can
agree on what would have counted as it working.

I do the whole loop myself: research the page, write the hypothesis, build
the variant, call the result, and write the brief that comes out of it.

I came into this from computer science, which is why I can write the
variant and put it live without waiting on an engineering ticket. It also
means I haven't done any of this inside an agency yet. Every project below
is self-initiated, and labelled that way on the card as well as inside the
case.

What I can show you is the reasoning. Each case has the territories I
rejected and why, what the research came back with as against what I
expected, and the point where a hypothesis broke. One of the six is a test
that lost.
```

*[Four paragraphs. Resist adding a fifth.]*

---

## 6. Specs table

```
SPECIFICATIONS

STRATEGY
Research          User interviews, session review, support-ticket mining,
                  sales-call listening, competitive teardown
Experimentation   Hypothesis design, prioritisation, sample size and
                  duration planning, stopping rules, post-test analysis
Creative          Brief writing, territory development, rejection reasoning,
                  message testing

BUILD
Languages         [FILL: HTML, CSS, JavaScript, Python, ...]
Frameworks        [FILL]
Analytics         [FILL: GA4, Plausible, PostHog, ...]
Testing           [FILL]
Version control   Git

METHOD
Prioritisation    [FILL: named framework, one line on why]
Stopping rule     Stated in full under FAQ. Set before the test runs.
Low traffic       Qualitative-first, methods named, limits stated.

NOT INCLUDED
                  Agency experience
                  Tests run at scale
                  A tool logo grid
```

*[The NOT INCLUDED rows are the sharpest thing on the page and the only place the format does real work. Keep them factual. No punchlines.]*

---

## 7. How it works

```
HOW IT WORKS

01. READ THE PAGE
    Analytics, session recordings, support tickets, and whatever sales gets
    asked twice a week. Most of what you need is usually already inside the
    company before anyone runs anything.

02. WRITE IT DOWN BEFORE RUNNING IT
    Hypothesis, metric, sample size, duration, stopping rule. All of it
    agreed before the variant gets built, so that when the result comes in
    there is nothing left to argue about except what to do next.

03. TURN THE RESULT INTO A BRIEF
    Most tests lose. Kohavi's published base rate is roughly one in three
    ideas improving its target metric. So the write-up matters more than the
    result: a loss you can explain still changes what gets built next, and
    plenty of wins can't be explained at all.
```

---

## 8. Recommended products

```
RECOMMENDED PRODUCTS

Six projects, all self-initiated. The grid filters to whichever role is
selected above.
```

### Card 01 · `[PLACEHOLDER]` · tag: `web`

```
[PLACEHOLDER] Checkout teardown: [regional trade supplier]
Three-step checkout, 61% drop at step two. Ranked six fixes, built the
top one, measured it.
Quick look →
```

### Card 02 · `[PLACEHOLDER]` · tag: `web`

```
[PLACEHOLDER] Test 04: the one that lost
Hypothesis was reasonable. Result was flat, then negative on the
secondary metric. What I'd do differently.
Quick look →
```

### Card 03 · `[PLACEHOLDER]` · tag: `creative`

```
[PLACEHOLDER] Brief: [industrial cleaning supplier]
Four territories. Three rejected, with reasons. One brief, one page.
Quick look →
```

### Card 04 · `[PLACEHOLDER]` · tag: `creative`

```
[PLACEHOLDER] The interview that broke the hypothesis
Six conversations with [category] buyers. The thing I was sure of turned
out to be the opposite.
Quick look →
```

### Card 05 · `[PLACEHOLDER]` · tag: `both`

```
[PLACEHOLDER] Rebuilding [local business] site, end to end
Research, brief, build, instrumentation, one decision made from its own
data eight weeks later.
Quick look →
```

### Card 06 · `[PLACEHOLDER]` · tag: `both`

```
[PLACEHOLDER] This page
Live analytics. One question I had about it, the change I made, and
what happened.
Quick look →
```

### Quick-look modal template

```
[Project name]                                    Self-initiated · [date]

THE SITUATION
[2 sentences. Traffic, baseline, what was at stake.]

WHAT I FOUND
[2 sentences. The research input, not the conclusion.]

HYPOTHESIS
[One sentence, falsifiable.]

WHAT HAPPENED
[Result with sample size, duration, effect size. Or: why it couldn't
reach significance, and what I did instead.]

WHAT IT CHANGED
[One sentence.]

Read the full case →
```

*[The modal is a summary. Depth lives on the case page. Do not let the modal become the case.]*

---

## 9. Reviews

```
REVIEWS

4.8 out of 5 · 11 reviews

5 ★  ████████████████████  9
4 ★  ████                  2
3 ★                        0
2 ★                        0
1 ★                        0

Every reviewer is named, with their role and how we worked together.
```

*[If you cannot get named reviewers, delete this section. An unnamed review in a deadpan commerce format reads as fabricated and contaminates everything above it.]*

### Review 01 · `[PLACEHOLDER]`

```
★★★★★  Did the work before anyone asked him to
[Name], owner, [local business] · Worked together on the site rebuild

Honestly I wasn't expecting much, we'd had two agencies in before this and
both of them came back with a rebrand proposal. He turned up having
already gone through the site himself and had a list of about six things,
ranked, with rough numbers next to them. First one on the list was that
the contact form didn't work on mobile. We'd had it like that for I don't
know how long and nobody had mentioned it.

Verified project
```

### Review 02 · `[PLACEHOLDER]`

```
★★★★☆  Strong thinking, slow to stop researching
[Name], [role], [company] · [project]

The research was the strongest part, better than I'd expect from someone
at this stage, and the brief actually was one page, which in my experience
almost nobody manages. If I had a criticism it's that he wanted to keep
interviewing after we already had enough to make the decision on. I think
we had that conversation more than once. Not a dealbreaker, just something
to know going in.

Verified project
```

### Review 03 · `[PLACEHOLDER]`

```
★★★★★  Told me the test should stop
[Name], [role], [company] · [project]

We were eleven days in and I wanted to call it, mostly because I was
impatient. He went back to the sample size we'd agreed at the start and
pointed out we weren't there yet. Turned out he was right. The thing
flipped in the last three days and we'd have read it completely backwards.

Verified project
```

### Review 04 · `[PLACEHOLDER]`

```
★★★★★  Writes the brief and then builds it
[Name], [role], [company] · [project]

The part I wasn't used to is that there's no handoff in the middle of it.
He wrote the hypothesis on the Tuesday and the variant was live by
Thursday. I've worked with strategists who'd need three weeks and a couple
of engineers to get to the same place.

Verified project
```

### Review 05 · `[PLACEHOLDER]`

```
★★★★★  Comfortable being wrong in public
[Name], [role], [university / project]

He presented a result that went against the thing he'd spent a month
arguing for. He led with it rather than burying it halfway down, and he'd
already rewritten the recommendation by the time he showed us. I've not
seen that happen as often as you'd hope.

Verified project
```

---

## 10. FAQ accordion

```
FREQUENTLY ASKED QUESTIONS
```

**Q. Have you done this for a real client?**

```
No. Everything on this page is self-initiated and labelled that way on
every case. What I'd point you at instead is the reasoning: each project
shows the territories I rejected and why, what the research came back
with, and where a hypothesis broke. You can tell more about someone's
judgement from the work they threw out than from the work that survived,
and that is usually the part a spec portfolio leaves out.
```

**Q. You're applying for two different jobs.**

```
At a company with no dedicated experimentation owner, which by Speero's
benchmark is roughly 40% of brands, these are one job: somebody still has
to decide what to test and what the result means for the creative. At a
large agency with a planning department and a separate CRO function
they're two jobs, and I'd apply for one of them. If you're the second kind
of employer, the link you were sent only shows the relevant role.
```

**Q. How many tests have you actually run?**

```
Not many. I'd be suspicious of a junior who said otherwise, and so should
you be. Published base rates put experiment success at around one in
three, dropping to 10% to 20% in domains that have already been optimised
hard, so a junior showing five wins and no losses is either working from a
very small sample or has picked what to show you. There's an access
problem underneath that as well: Google sunset Optimize in September 2023,
and with it went the free way of accumulating real tests without already
having the job that hands you the traffic. What does transfer is how I
prioritise, how I decide a test is finished, what I do with a site that
will never reach significance, and one test I got wrong. All of that is on
this page.
```

**Q. What's your stopping rule?**

```
Sample size and duration are set before the variant is built, worked out
from the baseline conversion rate and the smallest effect that would be
worth acting on. Minimum one full business cycle, usually two weeks, so
weekday and weekend traffic are both represented. No peeking at partial
results to decide whether to keep going. And if the test reaches its
duration without reaching the planned sample, it gets recorded as
inconclusive and stays that way, instead of running on until the numbers
happen to look like something.
```

**Q. How do you prioritise?**

```
[FILL: your actual framework in three sentences. Name it, say what you score
on, and say what you do when a stakeholder wants a test that scores badly.
The last part is the one you'll be asked about.]
```

**Q. What if the site doesn't have enough traffic to test?**

```
Most don't. Running a smaller version of the same test doesn't fix that,
so the method has to change: session replay, support-ticket themes, five
user interviews, sitting in on sales calls, a painted-door test on one
element. What that gives you is direction, which is a weaker claim than
significance, and the job is then to say which of the two you're holding.
Reporting a 15% lift off 40 conversions is how people get caught.
```

**Q. What does the 30-day guarantee mean?**

```
A prioritised test roadmap in week one, with the ranking method written
down so you can argue with it. A stopping rule applied to whatever is
already running, including a call on anything that should be stopped now.
A research pass that doesn't depend on having traffic. One experiment
designed, built, shipped and analysed end to end. And one written brief
saying what the result means for what gets made next.
```

**Q. Returns?**

```
Test 04 lost. It's the second card in the grid, with the original hypothesis,
the result, and what I'd do differently.
```

---

## 11. Footer CTA

```
ADD TO TEAM

Available [FILL: date]. Remote or [FILL: city].
One role at a time.

[ADD TO TEAM]
[FILL: email] · [LinkedIn] · [GitHub]

Built by the product. Analytics running. Source on GitHub.
```

*[Last line is the strongest proof point on the page and the only one that can't be faked. Link the repo.]*

---

## Build notes

### Deep links matter more than the selector

Ship `?role=creative` and `?role=web`. Put the role-specific URL in every application so the reviewer never sees the hybrid state. The selector is for the person who explores afterwards, not for the first impression.

### Two numbers are load-bearing and both are currently `[FILL]`

The star rating and the review count. If you launch with 11 reviews and 5 real ones, cut the count to 5 and recalculate the bars. A rating that doesn't match the reviews below it is the one thing that will get you caught.

### The weakest section is Specs

Right now it's mostly `[FILL]` and a tool list, and the research is explicit that tool access is not skill. The METHOD block is what saves it. Write your prioritisation answer properly before you write anything else on this page, because it's the only spec row a hiring manager will actually interrogate.

---

## `content.json` fields implied by this script

Listed so v1 can be built once and re-pointed later without touching HTML.

| Key | Notes |
|-----|-------|
| `availability.date` | Announcement bar, trust bar, footer. Appears three times, store once. |
| `availability.location` | Announcement bar, footer |
| `salary.band` | Buy box |
| `rating.average` | Buy box and reviews header |
| `rating.count` | Buy box and reviews header |
| `rating.distribution` | Array of 5 integers, drives the bars |
| `variants[]` | `id`, `label`, `subhead`, `specLine` |
| `projects[]` | `id`, `title`, `blurb`, `tag`, `modal{situation, found, hypothesis, result, changed}`, `caseUrl`, `placeholder: true` |
| `reviews[]` | `stars`, `headline`, `name`, `role`, `company`, `context`, `body`, `placeholder: true` |
| `faq[]` | `question`, `answer` |
| `specs` | Nested: `strategy`, `build`, `method`, `notIncluded` |
| `contact` | `email`, `linkedin`, `github`, `repo` |
