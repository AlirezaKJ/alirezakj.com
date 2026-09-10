---
name: AKJ Studio
description: A precision marine instrument for a design-and-build practice that sells motion and craft.
colors:
  turquoise-green: '#B5DECC'
  cobalt-green: '#96D1AA'
  slate: '#34454C'
  background: '#EFF7F2'
  surface: '#FFFFFF'
  foreground: '#273B42'
  muted: '#617276'
  primary: '#375E50'
  on-primary: '#FFFFFF'
  secondary: '#96D1AA'
  on-secondary: '#111111'
  link: '#375E50'
  divider: '#CBD5D2'
  control: '#808E91'
typography:
  display:
    fontFamily: 'Grenze, ui-serif, Georgia, serif'
    fontSize: 'clamp(3rem, 8vw, 7rem)'
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: '-0.02em'
  headline:
    fontFamily: 'Grenze, ui-serif, Georgia, serif'
    fontSize: 'clamp(2rem, 4vw, 3.25rem)'
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: '-0.01em'
  title:
    fontFamily: 'Grenze, ui-serif, Georgia, serif'
    fontSize: 'clamp(1.25rem, 2vw, 1.75rem)'
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 'normal'
  body:
    fontFamily: 'Hanken Grotesk, ui-sans-serif, system-ui, sans-serif'
    fontSize: '1.0625rem'
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: 'normal'
  label:
    fontFamily: 'Hanken Grotesk, ui-sans-serif, system-ui, sans-serif'
    fontSize: '0.75rem'
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: '0.12em'
  readout:
    fontFamily: 'Hanken Grotesk, ui-sans-serif, system-ui, sans-serif'
    fontSize: 'clamp(2rem, 5vw, 4rem)'
    fontWeight: 500
    lineHeight: 1
    letterSpacing: '-0.01em'
    fontVariation: 'tabular-nums'
  mark:
    fontFamily: 'Grenze Gotisch, Grenze, ui-serif, serif'
    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)'
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: 'normal'
rounded:
  none: '0px'
  sm: '2px'
  md: '6px'
  lg: '12px'
  bezel: '20px'
  dial: '9999px'
spacing:
  hair: '4px'
  xs: '8px'
  sm: '16px'
  md: '32px'
  lg: '64px'
  xl: '128px'
  xxl: '192px'
components:
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    rounded: '{rounded.sm}'
    padding: '14px 32px'
    typography: '{typography.label}'
  button-primary-hover:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
  button-ghost:
    backgroundColor: 'transparent'
    textColor: '{colors.foreground}'
    rounded: '{rounded.sm}'
    padding: '14px 32px'
    typography: '{typography.label}'
  button-ghost-hover:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.primary}'
  input-field:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.foreground}'
    rounded: '{rounded.sm}'
    padding: '12px 16px'
    typography: '{typography.body}'
  input-field-focus:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.foreground}'
  panel:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.foreground}'
    rounded: '{rounded.lg}'
    padding: '32px'
  chip-readout:
    backgroundColor: 'transparent'
    textColor: '{colors.muted}'
    rounded: '{rounded.none}'
    padding: '6px 0px'
    typography: '{typography.label}'
  nav-link:
    backgroundColor: 'transparent'
    textColor: '{colors.foreground}'
    rounded: '{rounded.none}'
    padding: '8px 0px'
    typography: '{typography.label}'
---

<!-- SEED: established with the user before implementation. Colors and typefaces are extracted from src/routes/layout.css and are real; layout, depth, shapes, and components are committed decisions not yet built. Re-run /impeccable document once there's code to capture the actual tokens and components. -->

# Design System: AKJ Studio

## Overview

**Creative North Star: "The Marine Instrument"**

The site is a precision instrument in a slate housing — a marine chronometer, a depth sounder, an optical bench. Slate is the case: structural, matte, silent, the thing that holds everything else steady. Sea glass is the readout: luminous, sparing, and always attached to a real value. Grenze is the engraving on the instrument's nameplate and its calibration marks; Hanken Grotesk is the modern readout printed beside them. The instrument is machined, not moulded — its edges are cut, its scales are marked at intervals somebody chose, and nothing on its face is there for decoration.

The metaphor is doing structural work, not supplying a texture. AKJ Studio's positioning is motion and craft, and an instrument is the one object whose entire value is that it is precisely made _and_ never at rest. A needle settles. A trace sweeps. A bubble finds level. That is where "the page is never fully still" stops being an effect and becomes the subject: a page that comes to a complete stop reads as a switched-off instrument, which is a defect, not a resting state. Every claim on this site is a reading the instrument is taking, and every reading is one a visitor can verify — 379 stars, ~67,400 downloads, a live client site, a certification they can open.

Depth is dimensional and caused, never drawn. Elements occupy real z-space, Three.js scenes carry an actual light rig, and a shadow exists only where something is genuinely above something else. Light and dark schemes are both first-class and neither is the "real" one: the same instrument in afternoon daylight and under panel light. The system's discipline is that its expression is concentrated — one instrument per surface, rendered completely — rather than distributed as ornament across everything.

**Key Characteristics:**

- Slate housing, sea-glass readout: structure is silent, signal is luminous, and the two never swap jobs.
- Perpetually powered — an idle, scroll, input, and transition motion layer running at all times.
- Machined form language: cut edges, hairline calibration rules, radii from a fixed machining set.
- Dimensional depth from real light and z-space, never from decorative shadow.
- Engraved display type (Grenze) against a modern readout face (Hanken Grotesk), with tabular figures on every measured number.
- Authored as Tailwind utilities against semantic role tokens; hand-written CSS is an exception that needs a reason.
- Both colour schemes fully realised; neither is an afterthought.

## Colors

A cold marine palette in two registers: a slate-and-glass housing that never draws attention, and a narrow band of sea green that only ever appears where something is being read.

### Primary

- **Deep Kelp** (`#375E50` light / `#B5DECC` dark): The instrument's active signal and the only colour permitted on a primary action. It carries the CTA, the live link, the current state of a control, and the engraved rule under a section a visitor is inside. Verified 7.29:1 against white in light mode, so it holds a button at any size.

### Secondary

- **Cobalt Green** (`#96D1AA` light / `#7FAF91` dark): The secondary readout — supporting highlights, chart traces, the second value in a comparison, selection fill. It never carries a primary action and never sits under body text.

### Tertiary

- **Turquoise Green** (`#B5DECC`): A fixed brand reference identical in both schemes. Reserved for the illuminated edge of a lens, the glow of a trace, and Three.js emissive material — light, not paint. It is the one colour allowed to exceed its own token's contrast because it is never carrying text.

### Neutral

- **Sea Foam Ground** (`#EFF7F2` light / `#14242A` dark): The page ground. Not white and not black — the pale wash of sea glass, and in dark mode the slate the instrument is cased in.
- **Instrument Face** (`#FFFFFF` light / `#21353B` dark): The raised surface: panels, cards, sheets, input fields. The one tonal step above ground, and the reason depth reads before any shadow is applied.
- **Slate Ink** (`#273B42` light / `#ECF5EF` dark): Body text and headings. Cold, near-black, never pure black.
- **Etched Grey** (`#617276` light / `#A3AEAC` dark): Secondary text, captions, metadata. Verified 4.53:1 against the light ground — passing but with no margin, so it is barred from anything below 16px and from any information a visitor actually needs.
- **Calibration Line** (`#CBD5D2` light / `#3B4A4D` dark): Hairline rules, dividers, scale markings. The instrument's engraved intervals.
- **Control Edge** (`#808E91` light / `#758283` dark): Borders on interactive controls. Verified 3.11:1 against the light ground, clearing the 3:1 non-text minimum.

### Named Rules

**The Housing and Readout Rule.** Slate and neutrals are structure and say nothing; sea green is signal and always means something. A green value on an element that carries no live state, no action, and no measured figure is a broken readout — remove it or give it something to read.

**The Two Instruments Rule.** Light and dark are the same object under different light, not two designs. Every colour decision is made as a role token (`bg-surface`, `text-muted`, `border-divider`), never as a literal value, so both schemes resolve from one authored source. A component that only looks right in one scheme is unfinished.

**The Emissive Exception.** Turquoise Green may exceed normal contrast expectations only where it functions as emitted light — a Three.js emissive material, a trace glow, a lens edge. The moment it sits behind or beneath text, ordinary contrast rules apply.

## Typography

**Display Font:** Grenze (with `ui-serif, Georgia, serif`)
**Body Font:** Hanken Grotesk (with `ui-sans-serif, system-ui, sans-serif`)
**Expressive Font:** Grenze Gotisch (with `Grenze, ui-serif, serif`)

All three are self-hosted variable WOFF2 from `static/fonts/`, with Hanken Grotesk and Grenze preloaded in `src/app.html`.

**Character:** Grenze has engraved, slightly gothic bones — it reads as something cut into a metal nameplate rather than set in a book, which is exactly the register an instrument's markings occupy. Hanken Grotesk is the modern printed readout beside it: neutral, wide-apertured, legible at label sizes. The pairing is old engraving against current measurement, and the tension between them is the studio's whole pitch — craft that is also precise.

### Hierarchy

- **Display** (600, `clamp(3rem, 8vw, 7rem)`, 0.95, -0.02em): The instrument's nameplate. One per surface, in the first viewport, at a scale that would be uncomfortable if it were not the subject.
- **Headline** (500, `clamp(2rem, 4vw, 3.25rem)`, 1.05): Section engraving. Marks the major intervals of the page.
- **Title** (500, `clamp(1.25rem, 2vw, 1.75rem)`, 1.2): Panel and card headings, project names.
- **Body** (400, `1.0625rem`, 1.65): Running prose, capped at 68ch. Hanken Grotesk only.
- **Label** (500, `0.75rem`, 1.2, 0.12em, uppercase): Calibration markings — eyebrows, metadata keys, nav items, button text, axis labels. The tracking is what makes it read as engraved interval rather than small body text.
- **Readout** (500, `clamp(2rem, 5vw, 4rem)`, 1, tabular figures): Measured values shown at scale — 379, 67,400, 12. Always paired with a Label naming what is being measured.
- **Mark** (400, `clamp(1.5rem, 3vw, 2.5rem)`): Grenze Gotisch. The maker's mark stamped on the instrument.

### Named Rules

**The Engraved Plate Rule.** Grenze appears where an instrument would actually be engraved — the nameplate, section markings, numerals on a dial, a project's name on its plate. It never sets running prose. Grenze at body size and body length is a serif doing a grotesk's job badly.

**The Maker's Mark Rule.** Grenze Gotisch appears at most **once per surface**, and only where the content genuinely warrants a maker's mark: the studio signature, a single pull quote, the close. It is not a heading option and not a decorative alternate. A second Grenze Gotisch on a page is a bug.

**The Tabular Figure Rule.** Every measured number on the site is a reading, and readings must not shift as they animate. Any figure that is counted, compared, or counted-up to carries `font-variant-numeric: tabular-nums` (`tabular-nums` in Tailwind). Proportional figures are for prose only.

**The Named Reading Rule.** A Readout never appears alone. Every figure carries a Label naming what it measures and, where the claim is external, a link to where it can be verified. An unlabelled big number is decoration wearing data's clothes, and this site's entire credibility is that its claims are checkable.

## Layout

The spatial model is a calibrated scale, not a generic column grid. Every measure derives from a **4px base unit**, doubling through the spacing scale (4 / 8 / 16 / 32 / 64 / 128 / 192). Nothing is eyeballed and nothing sits at an off-scale value; an instrument's intervals are chosen, and an arbitrary `margin-top: 37px` is the tell that they weren't.

**Bezel.** Content sits inside a consistent inset from the viewport edge — the instrument's bezel. `16px` at mobile, `32px` at tablet, `64px` at desktop, and the bezel is never broken except by a deliberate full-bleed element (a Three.js canvas, an edge-to-edge image), which breaks it completely rather than partially.

**Measure.** Content column caps at `68ch` for prose and `1440px` for full layouts. Beyond that the instrument stops widening and the housing takes the extra space.

**Rhythm.** Vertical rhythm runs on the same scale, with more space above a heading than below it — a heading belongs to the content that follows. Major section intervals are `xl` (128px) at desktop, `lg` (64px) at mobile. Density varies deliberately across a surface: a dense passage of readouts earns a quiet one after it, and the page ends anchored rather than trailing off.

**Breakpoints.** Tailwind defaults (`sm` 640, `md` 768, `lg` 1024, `xl` 1280, `2xl` 1536). Layout is authored mobile-first; the desktop composition is the elaboration, not the origin.

**Hairlines.** Calibration rules are true 1px (`0.5px` where the device supports it) in Calibration Line, drawn full-bleed to the bezel. They mark intervals on the page the way scale markings do on an instrument face — used to divide, never to decorate a box.

### Named Rules

**The Calibration Rule.** Every spatial value comes from the scale. If a Tailwind arbitrary value (`mt-[37px]`) is needed, either the scale is wrong and should be extended deliberately, or the layout is. Arbitrary spacing values are a code-review failure.

**The Complete Break Rule.** The bezel is either respected or fully broken. An element that hangs 12px past the bezel looks like a mistake; one that runs edge to edge looks like a decision.

## Elevation & Depth

Depth is **dimensional and caused**. Elements occupy real z-space and light falls on them accordingly; nothing gets a shadow because it "needs separation."

Three layers produce depth, in order of preference:

1. **Tonal step.** Instrument Face sits one step above Sea Foam Ground. Most panel separation needs nothing more, and this layer costs nothing to render.
2. **Real light.** Three.js scenes carry an actual rig — a key light matching the active scheme's direction, ambient fill from the ground colour, and physical falloff. Objects in these scenes cast because they are lit, not because a shadow token was applied.
3. **Cast shadow.** A small, physically consistent CSS set, all from a single light source above and slightly in front. Used only where an element genuinely floats above the page: an open menu, a modal, a dragged card, a hover-lifted panel.

Glass is real where it appears. `backdrop-filter` is permitted only where a plane genuinely overlaps content it should show through — a nav bar over scrolling content, a sheet over a page. Lens and refraction effects belong in the Three.js layer, where they can be done properly, not approximated with blur in CSS.

### Shadow Vocabulary

- **lift-hover** (`box-shadow: 0 2px 8px -2px rgba(39, 59, 66, 0.10)`): A panel raised by pointer hover. Paired with a `translateY(-2px)`, never applied at rest.
- **lift-float** (`box-shadow: 0 8px 24px -6px rgba(39, 59, 66, 0.14)`): Menus, popovers, sheets — genuinely detached layers.
- **lift-modal** (`box-shadow: 0 24px 64px -12px rgba(39, 59, 66, 0.22)`): Modal dialogs and lightboxes, the only elements far enough off the page to warrant it.

In dark mode these lose most of their usefulness — shadow on a dark ground barely reads. Dark mode substitutes a `1px` Control Edge top-highlight on floated surfaces instead, which is what a lit edge actually does on a dark instrument.

### Named Rules

**The Caused Depth Rule.** A shadow is a consequence of an element being above another element. If nothing is above anything, there is no shadow. A drop shadow on a flat card sitting flush in the page is decoration, and it is banned.

**The One Lamp Rule.** Every shadow on the site — CSS and Three.js alike — is cast by the same light: above, slightly in front. Two elements lit from different directions on one surface breaks the illusion that the page is a single physical object, which is the whole basis of the dimensional strategy.

## Shapes

Machined, not moulded. Edges are cut at a small set of radii that read as tooled rather than softened, and the set is fixed:

- **none** (`0px`): Hairlines, full-bleed elements, tables, calibration rules. The default for anything structural.
- **sm** (`2px`): Controls — buttons, inputs, chips, tags. Just enough to say the corner was finished, not enough to look soft.
- **md** (`6px`): Small containers, thumbnails, inline media.
- **lg** (`12px`): Panels, cards, sheets.
- **bezel** (`20px`): The largest housing radius — a full instrument enclosure, a hero container, the outer frame of a Three.js viewport.
- **dial** (`9999px`): Circular only. Dials, lenses, avatars, status indicators, and nothing else.

Borders are hairline (`1px`) in Control Edge for interactive elements and Calibration Line for structural division. There are no thick borders; an instrument's panel lines are cut thin.

### Named Rules

**The Machined Edge Rule.** Radii come from the set above, always. `rounded-full` is reserved for things that are genuinely round — a dial, a lens, an avatar, a status dot. A pill-shaped button is a different product's design language.

**The Cut Not Poured Rule.** Where a shape needs emphasis, it is cut — a clipped corner, a notch, an inset plate — rather than softened, glowed, or gradient-filled. Gradients appear only as emitted light in the Three.js layer, never as a surface fill on a DOM element.

## Components

Every component below is **synthesised from the tokens**, not extracted — no component library exists in the repo yet. They are the committed starting specification; re-run `/impeccable document` after the build to record what actually shipped.

All components are authored as **Tailwind utilities against the semantic role tokens** (`bg-surface`, `text-muted`, `border-divider`, `font-heading`). See the Utility-First Rule below.

### Buttons

- **Shape:** Cut corner (`2px`, `rounded-sm`). Never pill.
- **Primary:** Deep Kelp ground, on-primary text, Label typography (uppercase, 0.12em tracking), `14px 32px` padding. The only element on a surface permitted to carry the full primary colour as a fill.
- **Hover / Focus:** The needle behaviour — a `translateY(-1px)` lift with `lift-hover` shadow, settling on a damped ease over 240ms, plus a Turquoise Green rule that wipes across the bottom edge from left. Focus-visible gets a `2px` Deep Kelp outline at `2px` offset; it is never removed and never replaced by the hover treatment alone.
- **Ghost:** Transparent ground, foreground text, `1px` Control Edge border. On hover the border goes Deep Kelp and the ground takes Instrument Face.
- **Disabled:** Etched Grey text on Instrument Face, no border, no motion, `cursor: not-allowed`.

### Cards / Containers (Panels)

- **Corner Style:** `12px` (`rounded-lg`).
- **Background:** Instrument Face, one tonal step above ground.
- **Shadow Strategy:** None at rest — the tonal step is the separation. `lift-hover` on pointer hover only, where the panel is interactive.
- **Border:** `1px` Calibration Line, or none where the tonal step alone is sufficient. Never both a border and a rest-state shadow.
- **Internal Padding:** `32px` (`md`) desktop, `16px` (`sm`) mobile.

### Inputs / Fields

- **Style:** Instrument Face ground, `1px` Control Edge border, `2px` radius, `12px 16px` padding, Body typography.
- **Focus:** Border shifts to Deep Kelp and a second `1px` Deep Kelp ring appears at `1px` offset — a machined double-line, not a glow. Transition 160ms.
- **Error:** Border and helper text take a dedicated error red (`#B4453A` light / `#E58B80` dark — outside the brand palette by necessity; sea green cannot signal failure). Helper text sits below at Label size.
- **Disabled:** Ground drops to Sea Foam Ground, text to Etched Grey, border to Calibration Line.

### Navigation

- **Style:** Label typography, foreground colour, no background, `8px 0` padding, with an `8px` gap between the label and its underline slot.
- **Default / Hover / Active:** Rest has no rule. Hover draws a `1px` Deep Kelp rule left-to-right over 200ms. Active holds that rule permanently and the label takes Deep Kelp.
- **Behaviour:** The bar is a plane over content — Instrument Face at 80% with `backdrop-blur`, `1px` Calibration Line bottom border, one of the few sanctioned `backdrop-filter` uses. It reacts to `scrollState.direction` from `$lib/motion/scroll.svelte.js`: hides on scroll down, returns on scroll up, animated, never cut.
- **Mobile:** Full-height sheet sliding from the right, `lift-modal` shadow, items arriving in a `40ms` stagger. Scroll locks via `lockScroll()` from the motion module — never by setting `overflow` directly.

### Readout

The signature component. A measured figure at Readout scale with its Label beneath it and, where the claim is external, a verification link.

- Figure in tabular figures, animated on entry by counting up from zero on a damped ease — the needle sweeping to its value — then holding. Under reduced motion it renders at its final value immediately.
- Label beneath in Calibration Line-separated Label type.
- Grouped readouts sit on a shared hairline baseline, at even intervals, like markings on one scale.
- The figure is Slate Ink, not green. Green appears only on the verification link.

### Instrument Canvas

The Three.js surface (`three@0.186.0`). A bounded WebGL viewport rendering the surface's set-piece.

- Framed at `bezel` radius, or full-bleed with the bezel completely broken. Never partially inset.
- Carries a light rig matching the active scheme, read from the `data-theme` attribute and `prefers-color-scheme`, and re-lit rather than re-tinted when the scheme changes.
- Runs at idle continuously, capped at `devicePixelRatio` 2, and **pauses when off-screen or when the tab is hidden**.
- Driven from the existing GSAP ticker in `+layout.svelte`, never its own `requestAnimationFrame` loop — the project runs one clock.
- Under reduced motion it renders a single static frame and stops.
- Always has a non-WebGL fallback: a static rendered still, not an empty box.

### Named Rules

**The Utility-First Rule.** Styling is authored as Tailwind utility classes against the `@theme` role tokens. Hand-written CSS is reserved for exactly four cases: (1) `@font-face`, `@theme`, and token definitions in `src/routes/layout.css`; (2) `@keyframes` and motion GSAP cannot own; (3) selectors Tailwind genuinely cannot express — `::selection`, scrollbar pseudo-elements, complex `:has()`, print rules; (4) Three.js canvas sizing and positioning. A Svelte `<style>` block that does not fall into one of those four is a bug, and "it was quicker" is not a fifth case.

**The Role Token Rule.** No component contains a literal colour. Every colour arrives through a semantic role utility (`bg-surface`, `text-foreground`, `border-control`) so both schemes resolve from one authored source. A hex value inside a component is how dark mode breaks.

## Do's and Don'ts

### Do:

- **Do** author every style as Tailwind utilities against the `@theme` role tokens; reserve hand-written CSS for the four cases in the Utility-First Rule.
- **Do** keep something in motion at idle on every surface. The four motion layers — **ambient** (never fully still), **scroll-choreographed** (GSAP ScrollTrigger over Lenis), **input-reactive** (pointer-tracked light and parallax), and **transitional** (nothing cuts; everything arrives) — all run, on every surface.
- **Do** damp motion like a needle: arrive with slight overshoot and settle. Default easing `cubic-bezier(0.22, 1, 0.36, 1)`; 160ms for controls, 240ms for panels, 600ms+ for set-pieces.
- **Do** gate every motion layer on `reducedMotion` from `$lib/motion/scroll.svelte.js`. Under reduce: ambient stops, Three.js renders one static frame, scroll choreography becomes final state, transitions become ≤100ms crossfades. The instrument is still fully legible — just unpowered.
- **Do** read scroll position from the shared `scrollState` store, and scroll programmatically through `scrollTo()` from the motion module.
- **Do** run all animation off the single GSAP ticker already driving Lenis in `+layout.svelte`.
- **Do** animate only `transform`, `opacity`, and `filter` in DOM motion, and pause every Three.js scene when off-screen or the tab is hidden.
- **Do** give every measured figure tabular figures and a Label naming what it measures.
- **Do** call `ScrollTrigger.refresh()` after any layout-changing content load; the local fonts already do this on `document.fonts.ready`.
- **Do** use long, non-obvious periods for ambient loops so they never read as a repeating GIF.

### Don't:

- **Don't** write raw CSS where a Tailwind utility exists.
- **Don't** put a hex value inside a component; every colour comes from a role token.
- **Don't** add a `window.addEventListener('scroll')` anywhere — read `scrollState`.
- **Don't** call `window.scrollTo()`; it fights Lenis. Use the motion module's `scrollTo()`.
- **Don't** start a second `requestAnimationFrame` loop. The project runs one clock.
- **Don't** apply a shadow to an element that isn't genuinely above another element.
- **Don't** use `rounded-full` on anything that isn't a dial, lens, avatar, or status dot.
- **Don't** let Grenze Gotisch appear more than once on a surface, or Grenze set running body copy.
- **Don't** use Etched Grey below 16px, or for information a visitor actually needs — it clears 4.5:1 with no margin.
- **Don't** use sea green on anything that isn't an action, a live state, or a measured value.
- **Don't** use `backdrop-filter` outside a genuine overlapping plane; refraction belongs in the Three.js layer.
- **Don't** use an arbitrary spacing value (`mt-[37px]`); extend the scale deliberately or fix the layout.
- **Don't** ship a big number without a label and, where the claim is external, a verification link.
- **Don't** let a surface come to a complete stop. A fully static page is a switched-off instrument.
