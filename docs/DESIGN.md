---
name: alirezakj.com
description: Dark-first instrument panel in calibrated blues — a Melbourne developer-photographer's portfolio.
colors:
  console-black: "#09141b"
  panel-surface: "#0e1e25"
  panel-raised: "#1b3c4b"
  readout-ink: "#e7f1f4"
  readout-ink-dim: "#b9d4df"
  gauge-blue: "#8dcae2"
  gauge-blue-deep: "#144052"
  signal-cyan: "#3bb7ed"
  signal-cyan-hot: "#16aae9"
  deep-console: "#156384"
  hairline: "#0a2029"
  soundcloud-orange: "#ff5500"
typography:
  display:
    fontFamily: "Grenze, Georgia, serif"
    fontSize: "clamp(2.25rem, 6vw + 0.5rem, 8rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Grenze, Georgia, serif"
    fontSize: "clamp(1.875rem, 4vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Grenze, Georgia, serif"
    fontSize: "clamp(1.5rem, 3vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "normal"
  body:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.5vw + 0.9rem, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  none: "0"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  section: "64px"
components:
  button-primary:
    backgroundColor: "{colors.gauge-blue-deep}"
    textColor: "{colors.readout-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "16px 24px"
  button-primary-hover:
    backgroundColor: "{colors.signal-cyan}"
    textColor: "{colors.console-black}"
  input-field:
    backgroundColor: "{colors.panel-surface}"
    textColor: "{colors.readout-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  input-field-focus:
    backgroundColor: "{colors.panel-surface}"
    textColor: "{colors.readout-ink}"
  card-panel:
    backgroundColor: "{colors.panel-surface}"
    textColor: "{colors.readout-ink}"
    rounded: "{rounded.xl}"
    padding: "32px"
  chip-tool:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.readout-ink-dim}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
  accordion-row:
    backgroundColor: "{colors.panel-surface}"
    textColor: "{colors.readout-ink}"
    rounded: "{rounded.none}"
    padding: "0 24px"
  accordion-row-open:
    backgroundColor: "{colors.panel-raised}"
    textColor: "{colors.readout-ink}"
---

# Design System: alirezakj.com

## Overview

**Creative North Star: "The Instrument Panel"**

This is a calibrated control surface, not a brochure. Every element sits where a gauge would sit: exact, legible at a glance, and honest about its state. Nothing is approximately placed. The dark ground is not a mood choice — it is the unlit face of an instrument, and the blues on it are readouts. Where a conventional portfolio decorates, this system *indicates*: a border thickens because something is open, a shadow appears because a surface is being touched, a value changes because you scrolled. Precision is the credential, expressed without ever writing the word.

The restlessness lives in response, not in ambient animation. Surfaces are still until handled, then they move decisively and stop. Motion is a readout of interaction, never a garnish applied on a second pass. The playfulness is in what rewards a curious hand — a control that does more than it advertises, a panel that opens further than expected.

The palette is a committed blue system, and it carries a live risk the system must actively resist: blue-on-white with soft shadows is exactly where "safe corporate agency site" lives, and that is a named anti-reference in [PRODUCT.md](PRODUCT.md). The defence is depth and voltage. Grounds go darker than comfortable; the accent runs hotter than a corporate palette would allow; contrast between the two is wide. A blue that is merely *pleasant* has failed this system.

**Key Characteristics:**
- Dark-first, near-black blue ground (`#09141b`) with a light counterpart ramp that is real, not decorative
- One committed hue family across the entire surface — no second accent hue, no warm neutral anywhere
- Flat at rest; depth exists only as a response to interaction
- Display serif (Grenze) against a workhorse sans (IBM Plex Sans) — high contrast, two jobs, no third font
- Square, hard-edged signature component (the project accordion) among otherwise generously rounded panels
- Motion is short, eased, and decisive: 300ms for states, 600ms for disclosure

## Colors

A single blue family running from near-black to ice, with cyan as the only voltage in the system — a committed monochrome-hue strategy where the accent's rarity is what makes it read as a signal.

Two complete ramps exist: the dark set (shipped by default — `app.html` sets `class="dark"`) and a light set. The frontmatter above carries the dark values as canonical because that is what renders today. Light equivalents are listed inline below. **Both are normative.** A user-facing theme toggle is confirmed intended work; the light ramp is not dead code.

### Primary
- **Gauge Blue** (dark `#8dcae2` / light `#1d5a72`): The structural blue. Headings, section titles, primary text emphasis, borders on interactive containers, and the resting fill of the submit control. It inverts across themes — pale readout on dark, deep ink on light — because a gauge face and a gauge needle swap roles depending on the light.
- **Gauge Blue Deep** (dark `#144052` / light `#aed9ea`): The pressed / filled state of Gauge Blue. Primary button rest fill, filled chips.

### Secondary
- **Deep Console** (dark `#156384` / light `#7bc9ea`): Supporting fill for gradients and footer wash. The least-used role in the system; it exists to give the footer and large washes somewhere to go without reaching for the accent.

### Tertiary
- **Signal Cyan** (dark `#3bb7ed` / light `#128fc4`): The only voltage in the palette. Bullet markers, icon glyphs, focus borders, link hover, and hover fills. This is the one color permitted to look electric.
- **Signal Cyan Hot** (`#16aae9`): The saturated peak of the cyan ramp, used for hover fills on large surfaces. Bright enough that anything sitting on it must be dark, never light.

### Neutral
- **Console Black** (dark `#09141b` / light `#e4eff6`): The page ground. Everything sits on this.
- **Panel Surface** (dark `#0e1e25` / light `#d9e9f2`): The first layer up. Cards, form panels, accordion rows at rest.
- **Panel Raised** (dark `#1b3c4b` / light `#b3d3e5`): The second layer up. Open/active containers.
- **Readout Ink** (dark `#e7f1f4` / light `#0b1518`): Body and heading text at full strength.
- **Readout Ink Dim** (dark `#b9d4df` / light `#203d46`): Supporting text, list items, chip labels. The floor for body copy — nothing dimmer is permitted at body size.
- **Hairline** (dark `#0a2029` / light `#d6ecf5`): Borders and dividers. 1px, never more.

### Sub-brand (scoped)
- **SoundCloud Orange** (`#ff5500`): Scoped to `.bsc-page` only. The BetterSoundCloud product page borrows its host platform's identity deliberately. This is the sole authorised exception to the single-hue rule and it must never leak past that page's root class.

### Named Rules

**The Voltage Rule.** Signal Cyan appears on ≤10% of any viewport. It marks state, interaction, and one thing per fold that matters. A section where cyan reads as "the section color" has spent the whole budget; pull it back to markers and states.

**The Anti-Agency Rule.** Blue must earn its place by depth and voltage, never by pleasantness. If a proposed surface would look at home on a mid-market consultancy site — mid-tone blue, white ground, soft ambient shadow, generous rounding — it has landed on the anti-reference and must be pushed: darker ground, hotter accent, wider contrast, harder edges.

**The One Hue Rule.** No second hue enters this system. Warmth, alarm, and success states are expressed through lightness and chroma within the blue family, or through type weight and iconography. The only exception is the scoped `.bsc-page` sub-brand.

## Typography

**Display Font:** Grenze (with Georgia, serif) — self-hosted, weights 100–900, roman and italic
**Body Font:** IBM Plex Sans (with system-ui, sans-serif) — self-hosted variable font, roman and italic
**Also present:** Playfair Display is declared in `main.css` and self-hosted but is not used by any component. Treat it as unallocated; do not introduce it as a third voice without replacing one of the two above.

**Character:** Grenze is a condensed, high-contrast serif with sharp terminals — it reads as engraved rather than literary, which keeps the display voice on the instrument side and off the editorial-magazine lane. IBM Plex Sans is the counterweight: neutral, technical, unfussy, built for dense information. The pairing works because the two families sit on genuinely different axes (engraved serif against grotesque-adjacent sans), not because they are both "nice".

Lining numerals are enforced globally (`font-feature-settings: "lnum"`) so figures align in dense readouts.

### Hierarchy

- **Display** (Grenze 700, `clamp(2.25rem → 8rem)`, line-height 1, tracking −0.025em): The page's single hero headline. One per page, never repeated.
- **Headline** (Grenze 700, `clamp(1.875rem → 4.5rem)`, line-height 1.1): Section titles — "Skills & Expertise", "Projects & Works", "Let's Work Together".
- **Title** (Grenze 600, `clamp(1.5rem → 3rem)`, line-height 1.15): Project names in the accordion. The one place a title competes with a headline, deliberately.
- **Body** (IBM Plex Sans 400, `clamp(1rem → 1.25rem)`, line-height 1.625): All prose. Cap measure at 65–75ch.
- **Label** (IBM Plex Sans 600, 0.875rem, sentence case): Form labels, chips, metadata. **Not uppercase, not tracked.** The tracked-caps eyebrow is a named anti-reference.

### Named Rules

**The Two Voices Rule.** Grenze for anything that names a thing; Plex Sans for anything that explains one. A card heading in Plex Sans while another card heading is in Grenze is the system contradicting itself — this currently happens between `SkillsSection` (sans `h3`) and `HomeHeader` (serif `h3`) and should resolve toward Grenze.

**The Shouting Ceiling Rule.** The display max is currently 8rem (`text-9xl` at ≥1280px), above the 6rem ceiling that keeps a heading designing rather than shouting. Do not raise it further; prefer 6rem when reworking the hero, and never combine the current max with a long single word — verify the headline does not overflow at 768px and 1024px.

## Layout

The page is a single centred column governed by one custom property: `--keyw`, which is `calc(100% - 240px)` on desktop and `100%` below 768px. Every section resolves its width through `max-w-[var(--keyw)]`, with the widest sections additionally capped at 80rem. This is the spine — new sections adopt it rather than inventing a container.

Breakpoints are Tailwind defaults (`sm` 640, `md` 768, `lg` 1024, `xl` 1280) plus the single custom `--keyw` switch at 768px, where the desktop side gutters collapse and horizontal padding moves to `px-4` on the section itself.

Vertical rhythm is deliberately uneven rather than a uniform stack: section headings carry `py-10 md:py-16`, panels carry `p-6 md:p-8`, and inter-element gaps step through 16 / 24 / 32 / 48px. Density tightens inside a panel and loosens between them; that contrast is the rhythm.

Grids are asymmetric by default. The hero splits 7/5 across twelve columns; the contact section splits 2/1 between information and form; the skills grid runs `md:grid-cols-2 lg:grid-cols-3` with one panel spanning two columns to break the repeat. **A grid where every cell is the same size is the shape to avoid** — if a new grid comes out even, span something.

## Elevation & Depth

**Flat at rest. Depth is a response, never a decoration.**

Surfaces sit flush on the ground by default. A shadow appears when a surface is hovered, focused, or opened, and disappears when it is released. This makes elevation legible as feedback — you can read the state of the panel from its depth — which is the whole premise of an instrument surface. It also solves a practical problem: soft ambient shadows read as mud on a `#09141b` ground and contribute nothing.

Where a resting surface needs to separate from the ground, it does so **tonally** — Console Black → Panel Surface → Panel Raised — plus a 1px Hairline border. Never with a resting shadow.

### Shadow Vocabulary

- **Response** (`box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3)`): Applied on `:hover` and `:focus-visible` to interactive panels and cards. Transitions in over 300ms.
- **Open** (`box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.35), 0 4px 6px -4px rgb(0 0 0 / 0.35)`): The deepest step, reserved for a container that is actually expanded — the open accordion row.

### Named Rules

**The Flat-By-Default Rule.** No `shadow-*` utility appears on a resting element. If a card has a shadow before you touch it, remove it and separate it tonally instead. *(The current `SkillsSection` cards carry a resting `shadow-sm`; that is drift from this rule, not an exception to it.)*

## Shapes

Two form languages coexist on purpose, and the split carries meaning.

**Panels are generously rounded.** Cards, form containers, and the key-strengths block use 24px (`rounded-3xl`); inputs and buttons use 12px (`rounded-xl`); images use 8–16px. These are the calm, containing surfaces.

**Controls that carry state are square.** The project accordion has a 0px radius and a 2px border that is transparent at rest and Gauge Blue when open. It is the only square container in the system, and that is exactly why it reads as the instrument in the panel — it looks like a switch among readouts. Do not round it, and do not give a second component the same treatment; the squareness is a singular signal.

Circles are reserved for icon wells and bullet markers (`rounded-full`, 40–48px wells, 6–8px markers). Borders are always 1px except on the accordion, which is 2px because that border is a state indicator rather than a divider.

## Components

Component character: **machined and responsive.** Exact edges, tight state changes, immediate feedback on every interaction. Nothing decorative, nothing soft, no easing that lingers.

### Buttons

- **Shape:** Moderately rounded (12px / `rounded-xl`). Full-width inside forms; intrinsic width elsewhere.
- **Primary:** Gauge Blue Deep fill with Readout Ink label, 16px vertical padding (24px at `md`), 600–700 weight, label typography.
- **Hover / Focus:** Fills with Signal Cyan over 300ms. **The label must flip to Console Black on this fill** — Readout Ink on Signal Cyan Hot measures 2.3:1 and fails at body size. This is a live defect in `ContactSection`, not a documented pattern.
- **Focus-visible:** 2px Signal Cyan outline with 2px offset. Required; the current implementation strips the outline via `outline-none` without providing a replacement on the button.

### Chips

- **Style:** Hairline fill, Readout Ink Dim label, 1px Hairline border, 8px radius, 8×16px padding, 500–600 weight. Used for the tools list and project tags.
- **State:** Static — chips here are labels, not filters. If a filtering variant is ever needed, selected state is a Gauge Blue Deep fill, not a border change.

### Cards / Containers

- **Corner Style:** 24px (`rounded-3xl`).
- **Background:** Panel Surface on the Console Black ground.
- **Shadow Strategy:** None at rest; **Response** shadow on hover. See Elevation.
- **Border:** 1px Hairline, warming to Gauge Blue Deep on hover.
- **Internal Padding:** 24px, rising to 32px at `md` and 40px on the largest panels.

### Inputs / Fields

- **Style:** Panel Surface fill, 1px Gauge Blue Deep border, 12px radius, 12×16px padding (16×24px at `md`), body typography. Label sits above at 0.875rem / 600.
- **Focus:** Border shifts to Signal Cyan plus a 2px ring. **The ring must use Signal Cyan at ≥40% opacity, not the 200-step of the accent ramp** — on dark, `accent-200` is `#09445d` and the ring is effectively invisible against the panel. Another live defect in `ContactSection`.
- **Placeholder:** Readout Ink Dim minimum. Never dimmer; placeholder text is held to the same 4.5:1 floor as body copy.
- **Error / Disabled:** Not implemented. When added, error is a Signal Cyan border with a text message below — no red, per the One Hue Rule.

### Navigation

- **Style:** Fixed, chromeless, no bar and no background. The wordmark is a single Grenze "A" that expands to the full name when at the top of the page, at the bottom, or with the menu open, and collapses to a rotating arrow glyph that tracks scroll direction while scrolling. It uses `mix-blend-difference` so it stays legible over any content beneath.
- **Menu:** Full-screen overlay, `backdrop-blur-xl` over a Console Black → Panel Surface gradient at 90% opacity, sliding in from the left over 500ms. Two labelled columns — Portfolio anchors and Navigation destinations — set in Grenze at 1.5–2.25rem.
- **States:** Links shift from Readout Ink to Gauge Blue on hover over 300ms.
- **Required work:** The toggle is a `<div>` with a click handler — it must become a `<button>` with `aria-expanded` and a visible focus ring, and the overlay needs Escape-to-close and focus containment.

### Project Accordion (signature component)

The one component that defines this system. A full-width square row: Panel Surface fill, 2px transparent border, a Grenze project name at 1.5–3rem, and web/GitHub glyph links right-aligned.

- **Disclosure:** `grid-template-rows: 0fr → 1fr` over 600ms with an opacity fade — animating the grid track rather than height, so no fixed measurement is needed and the transition stays smooth at any content length.
- **Two triggers:** Hover peeks the content open; click toggles it locked open and switches the border to Gauge Blue. The peek is the "reward the poke" behaviour of the whole site, and it must be preserved in any rework.
- **Reduced motion:** Under `prefers-reduced-motion: reduce`, the row snaps between states with no transition and hover-peek is disabled entirely — a content panel that expands on hover is a trap for anyone with motion sensitivity or a tremor.
- **Content:** Description prose beside a lazy-loaded preview image in a `minmax(0,1fr) minmax(16rem,24rem)` two-column grid, collapsing to a single column below `lg`.

## Do's and Don'ts

### Do:
- **Do** route every new section's width through `max-w-[var(--keyw)]`; it is the single container spine.
- **Do** separate resting surfaces tonally (Console Black → Panel Surface → Panel Raised) with a 1px Hairline, and save shadow for hover, focus, and open states.
- **Do** keep Signal Cyan under 10% of any viewport, on state and markers only.
- **Do** set anything that names a thing in Grenze, and anything that explains one in IBM Plex Sans.
- **Do** break every grid — span a cell, offset a column, change a ratio. Even grids are the shape this project rejects.
- **Do** pair every GSAP, Lenis, and CSS transition with a `prefers-reduced-motion: reduce` alternative, and skip Lenis entirely under it.
- **Do** verify contrast against the actual dark-theme value before shipping a color pairing; the blue ramp makes 2–3:1 combinations easy to reach by accident.

### Don't:
- **Don't** put a `shadow-*` utility on a resting element.
- **Don't** introduce a second hue. No red error states, no green success states, no warm neutral anywhere. The `.bsc-page` orange is scoped and is the only exception.
- **Don't** let Signal Cyan Hot (`#16aae9`) sit under light text — it measures 2.3:1 against Readout Ink. Dark text on cyan, or cyan text on dark. Never light on cyan.
- **Don't** use `accent-200` for focus rings on the dark theme; it is `#09445d` and disappears into the panel.
- **Don't** write `outline-none` without supplying a `:focus-visible` replacement in the same rule.
- **Don't** round the project accordion, and don't give a second component a square 0px radius. Its edge is a singular signal.
- **Don't** add uppercase tracked labels above section headings, numbered `01 / 02 / 03` section markers, or gradient text. All three are named anti-references in [PRODUCT.md](PRODUCT.md).
- **Don't** raise the display headline above its current 8rem max, and don't ship a hero without checking it at 768px and 1024px for overflow.
- **Don't** introduce Playfair Display as a third family without removing Grenze or IBM Plex Sans.
