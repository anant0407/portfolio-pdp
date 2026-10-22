---
tags: [brand-guide, pet, dog-health, dog-supplement, multivitamin, d2c, navy-blue]
brand: Dog is Human
updated: 2026-05-07
pages: [product-detail, homepage]
---

# Dog is Human — Brand Guide

## Colors

| Name | Hex | Role |
|------|-----|------|
| Navy | `#022044` | Primary text, headings, borders, nav, footer bg, active states |
| Light Blue (Accent) | `#9dc1f3` | ATC button, active thumbnail border, radio border, checkmarks, dose labels |
| Off-White (Body) | `#FAFAF8` | Primary section background (hero, benefits, vets, formulation, ugc, faq) |
| Secondary BG | `#e4edf9` | Alternate section bg (icons bar, directions), icon circles, table row alt, vet avatar placeholder |
| White | `#ffffff` | Nav bg, card bg, ingredient detail panel, alternating table rows |
| Navy 75% | `rgba(2,32,68,0.75)` | Body text, subheads |
| Navy 70% | `rgba(2,32,68,0.7)` | Secondary body text, card descriptions |
| Navy 12-15% | `rgba(2,32,68,0.12–0.15)` | Divider lines, table borders |
| Amber Star | `#f59e0b` | Star rating color |

| Yellow (Accent) | `#eeee4b` | Announcement bar bg, Best Seller badge (homepage) |
| Light Blue BG | `#dceaf4` | Philosophy section bg (homepage) |
| Light Gray BG | `#f1f4f5` | Vet team section bg (homepage) |
| Warm Light BG | `#f5f5ef` | Reviews section bg (homepage) |
| Email BG | `#ecf6fd` | Email signup section bg (homepage) |
| CTA Blue | `#5f9ff8` | Secondary CTA button color (homepage) |

**Palette logic:** Navy anchors authority + trust. Light blue drives attention (ATC, active selections). Off-white and secondary blue alternate to create visual breathing room without stark contrast shifts. Homepage adds yellow accent for urgency (announcement bar) and softer blue tones for section differentiation.

## Fonts

| Font | Source | Weights | Used For |
|------|--------|---------|---------|
| ABC Social (Social-Book) | Custom licensed | 400, 600, 700 | Primary font — all body, headings, nav, labels |
| SocialMono-Bold | Custom licensed | 700 | Prices, ATC button text — monospace precision signal |
| Roc Grotesk | Licensed | Bold, Medium, Regular | Display headings (logo, large section titles) |
| MessinaSerifVariable | Licensed | Italic | Italic accent type (vet quotes implied) |

**Fallback stack:** `'ABC Social', 'Inter', sans-serif`

CSS vars: `--font-body-family: Social-Book`, `--color-base-accent-1: 157, 193, 243`

## Type Scale

| Element | Size | Weight | Family | Notes |
|---------|------|--------|--------|-------|
| H1 (product name) | 36px | 700 | Social-Book | 43.2px line height, 0.6px letter-spacing |
| H2 (section title) | 38–52px | 700 | Social-Book | Line height 1.1–1.2 |
| H2 (benefit/directions) | 40–44px | 700 | Social-Book | — |
| H3 (formulation ingredient) | 24px | 700 | Social-Book | With monospace dose label beside |
| Eyebrow | 12px | 700 | Social-Book | Uppercase, 2px letter-spacing, light-blue |
| Badge/ticker | 11px | 700 | Social-Book | Uppercase, 2px letter-spacing, white on navy |
| Nav links | 16px | 700 | Social-Book | Navy |
| Body text | 15–16px | 400 | Social-Book | 1.6 line-height, 75% navy |
| Benefit row title | 16px | 700 | Social-Book | — |
| Price | 15px | 700 | SocialMono-Bold | Monospace, white on navy pill or navy text |
| ATC button | 15px | 700 | SocialMono-Bold | Uppercase, 1px letter-spacing |
| Small/meta | 11–13px | 500–600 | Social-Book | Trust badges, icon labels |
| FAQ question | 17px | 600 | Social-Book | Navy |
| Vet quote | 17px | 400 | Social-Book | Italic, navy |

## Buttons

| Variant | Bg | Text | Border | Radius | Shadow |
|---------|-----|------|--------|--------|--------|
| Primary ATC | `#9dc1f3` (light blue) | white | 1px solid `#000000` | 40px (pill) | `rgba(0,0,0,0.33) 0 4px 4px` |
| Flavor/Tab active | `#022044` | white | 1.5px `#022044` | 6px | none |
| Flavor/Tab inactive | transparent | `#022044` | 1.5px `#022044` | 6px | none |
| Subscribe radio (active) | `rgba(157,193,243,0.1)` | — | 2px `#9dc1f3` | 8px | none |
| Subscribe radio (inactive) | transparent | — | 1.5px `rgba(2,32,68,0.2)` | 8px | none |
| Tab switcher active | `#022044` | white | 1.5px `#022044` | 4px | none |
| Tab switcher inactive | transparent | `#022044` | 1.5px `#022044` | 4px | none |
| UGC filter active (pill) | `#022044` | white | 1.5px `#022044` | 20px (pill) | none |
| Formulation tab active | `#022044` | white | none | 0 | none |

**ATC button note:** Light-blue pill with black border and drop shadow is the signature CTA. Warm without being aggressive.

## Spacing & Layout

| Token | Value |
|-------|-------|
| Page max-width | 1440px |
| Content margin | `0 auto` |
| Section vertical padding (desktop) | 80px top/bottom |
| Section padding sides | 40px |
| Header height | 64px |
| Announcement bar height | 33px |
| Product hero gap | 40px (2-column) |
| Benefits/directions column gap | 60px |
| Card padding (vet cards) | 32px |
| Thumbnail size | 64×64px |
| FAQ max-width | 760px |
| Formulation tab list width | 300px |

**Section background rhythm:**
Navy (announcement) → White (nav) → Off-white (hero) → Light-blue (icons) → Off-white (benefits) → Light-blue (directions) → Off-white (vets) → Off-white (formulation) → Off-white (ugc) → Off-white (faq) → Navy (footer)

## Cards & Surfaces

| Surface | Bg | Border | Radius | Shadow |
|---------|-----|--------|--------|--------|
| Vet endorsement card | white | 1px `rgba(157,193,243,0.4)` | 10px | none |
| Formulation detail panel | white | 1px `rgba(2,32,68,0.1)` | 8px | none |
| UGC card | white | none | 10px | `0 2px 8px rgba(0,0,0,0.08)` |
| Subscribe radio panel | off-white tint | 2px accent or muted | 8px | none |
| Ingredient table row (alt) | `#e4edf9` | — | 0 | none |
| Table header | `#022044` | — | 0 | none |

## Voice & Copy Patterns

**Tone:** Clinical-but-warm. Speaks with authority (vet credentialing, clinical studies) but uses warm, inclusive language for dog owners. Not corporate; not cutesy. Confident and reassuring.

**Key positioning signals:**
- "Human-Grade" — repeated throughout as core differentiator (eyebrow, FAQ, ingredient copy)
- "DM-01™" — clinical product naming signals pharmaceutical rigor
- "Vet-Formulated" + named vets — authority stacking
- "12 clinically-studied ingredients" — precision over vague claims
- "Made in Vermont" — craftsmanship, quality provenance
- "DOG IS FOREVER™" — emotional tagline with permanence resonance

**Sentence structure:** Short factual headlines. Body copy direct and informative. FAQs use the customer's own language. Trust badges terse (5 words max).

**FAQ positioning:** Section titled "We Want You To Question" — proactively invites skepticism to disarm it. Classic credibility move.

**CTAs on this page:** "Add to cart", "Subscribe & Save 15%"

**Disclaimers:** FDA disclaimer in smallest type (11px, rgba white) in footer only.

## Section Rhythm (product-detail page)

1. Announcement Bar — navy — urgency/discount code
2. Header Nav — white — sticky navigation
3. Product Hero — off-white — primary conversion (gallery + buybox)
4. Trust Icons Bar — light-blue — certifications/claims
5. Core Benefits — off-white — benefit education
6. Directions & Nutrition — light-blue — usage transparency
7. Vet Endorsements — off-white — authority social proof
8. Formulation Tabs — off-white — ingredient transparency
9. UGC Reviews — off-white — peer + press social proof
10. FAQ Accordion — off-white — objection handling
11. Footer — navy — navigation + legal
