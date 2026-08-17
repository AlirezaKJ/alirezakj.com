# alirezakj.com

Personal portfolio site for Alireza Karimi Jafari — web developer, UI/UX designer, and photographer based in Melbourne, Australia. Also the hub linking his shipped projects.

**Stack:** SvelteKit 2 · Svelte 5 (runes) · Tailwind CSS v4 · GSAP + ScrollTrigger · Lenis smooth scroll · deployed on Vercel (`@sveltejs/adapter-vercel`).

**Routes:** `/` (single-page portfolio: header → skills → projects → experience → testimonials → education → contact), `/gallery` (photography), `/projects`, `/bsc` (BetterSoundCloud product page, its own sub-brand palette), `/sitemap.xml`.

## Motion & scroll

**Lenis and GSAP own everything scroll-related on this site.** This is the convention, not an implementation detail — anything scroll-driven goes through them.

How it's wired ([`src/routes/+layout.svelte`](src/routes/+layout.svelte)):

- **Lenis owns page scroll.** A single instance is created on mount with `{ autoRaf: false }` and published to `lenisStore` in [`src/lib/stores/scroll.js`](src/lib/stores/scroll.js). It is destroyed (and its ticker callback removed) in the `onMount` cleanup.
- **GSAP drives Lenis, not `requestAnimationFrame`.** `gsap.ticker.add((time) => lenis.raf(time * 1000))` with `gsap.ticker.lagSmoothing(0)`. One clock, no competing loops — hence `autoRaf: false`, which would otherwise start a second one.
- **ScrollTrigger updates from Lenis**, not from the native scroll event: `lenis.on('scroll', () => ScrollTrigger.update())`. It also refreshes after `document.fonts.ready` and after every `afterNavigate`.
- **Scroll state is a store, not a listener per component.** `scrollState` carries `{ scroll, limit, velocity, direction, progress }`. Read it (`$scrollState`) instead of attaching new scroll handlers — `Nav.svelte` already does.
- **Reduced motion has no Lenis at all**, so nothing may assume `$lenisStore` is non-null. Use the helpers in the same module — `scrollTo(target, options)` for programmatic scrolling, `lockScroll()` / `unlockScroll()` for modals — which fall back to native behaviour when Lenis is absent. `reducedMotion` (store) and `prefersReducedMotion()` (one-shot) are the single source of truth for motion gates.

Rules for any new scroll work:

- **Don't** add `window.scrollTo`, `scrollIntoView`, or `scroll-behavior: smooth` — they fight Lenis and produce two competing animations. `scrollTo()` from the scroll store is the one sanctioned exception, and only on the no-Lenis path.
- **Don't** hand-copy Lenis' stylesheet into `main.css`; `lenis/dist/lenis.css` is imported in the layout and stays in step with the package.
- **Don't** add a second smooth-scroll or scroll-animation library, and don't add a second `gsap.ticker` RAF loop.
- **Do** register ScrollTrigger plugins once, in the layout, and build effects on top of the existing instance.
- **Do** gate every scroll-driven effect on `prefers-reduced-motion: reduce` — under it, Lenis is skipped entirely and ScrollTrigger reveals become instant. Motion is central to this site, which makes this the highest-value accessibility item in the project.
- **Do** keep reveals as enhancements to already-visible content. Never gate visibility on a scroll-triggered class; transitions don't fire on hidden tabs or in headless renderers, and the section ships blank.

The **GSAP skills are installed** under [`.claude/skills/`](.claude/skills) (`gsap-core`, `gsap-scrolltrigger`, `gsap-timeline`, `gsap-frameworks`, `gsap-plugins`, `gsap-performance`, `gsap-utils`). Defer to them for GSAP API specifics; this section is the project-level wiring contract they must respect. In components, follow `gsap-frameworks`: create inside `onMount` in a `gsap.context(fn, container)` and `return () => ctx.revert()`.

## Design Context

Design work on this repo is governed by two documents. **Read them before changing any UI.**

- [`docs/PRODUCT.md`](docs/PRODUCT.md) — strategic: register, users, purpose, brand personality, anti-references, principles, accessibility. Answers *who / what / why*.
- [`docs/DESIGN.md`](docs/DESIGN.md) — visual: color, typography, layout, components, do's and don'ts. Answers *how it looks*.

**Register: `brand`.** Design IS the product here. The site is the primary work sample; a visitor's impression is the thing being made. It is not an app UI where design serves a workflow.

**The job the site must do: be memorable.** Not be complete, not list everything. Success is a visitor who remembers one specific thing about it a week later.

### The five design principles

1. **The site is the proof.** No claim survives unless the page demonstrates it. Prefer demonstrating over asserting; where a sentence and an interaction make the same point, cut the sentence.
2. **Reward the poke.** Restlessness and playfulness come from response, not decoration. Something should be discoverable only by being curious. Motion is designed alongside layout, never bolted on.
3. **Refuse the default shape.** For every section, ask what shape a portfolio template would use — then use a different one. Skills are not an icon grid. Experience is not a timeline. Projects are not three equal cards.
4. **Photography is texture, not a second pitch.** One practice, two lenses. Developer first. No parallel "hire me for photos" funnel.
5. **Memorable beats complete.** Cutting a section beats diluting the page. One dominant idea per fold.

### Hard anti-references

Never drift toward these, however well executed:

- **Generic dev-portfolio template** — glowing gradient hero, "Hi, I'm X 👋", icon-card skill grid, vertical job timeline, three-across project cards with tech pills.
- **AI-slop landing page** — cream/sand backgrounds, tiny uppercase tracked eyebrows above every section, `01 / 02 / 03` scaffolding, gradient text, side-stripe accent borders, hero-metric rows.
- **Corporate agency site** — stock teamwork photography, "we deliver solutions", safe corporate blue, vague capability claims with no artefact behind them.

### Accessibility baseline

No formal WCAG target is claimed, but any work here holds this line: semantic landmarks and correct heading order; keyboard operability with visible focus on the nav toggle, menu overlay, and project accordion; a `prefers-reduced-motion` path for every GSAP/Lenis effect (Lenis skipped entirely under it); body text ≥ 4.5:1 contrast; and content visible by default — scroll reveals enhance, never gate.

## Svelte MCP server

You are able to use the Svelte MCP server, where you have access to comprehensive Svelte 5 and SvelteKit documentation. Here's how to use the available tools effectively:

### Available Svelte MCP Tools:

#### 1. list-sections

Use this FIRST to discover all available documentation sections. Returns a structured list with titles, use_cases, and paths.
When asked about Svelte or SvelteKit topics, ALWAYS use this tool at the start of the chat to find relevant sections.

#### 2. get-documentation

Retrieves full documentation content for specific sections. Accepts single or multiple sections.
After calling the list-sections tool, you MUST analyze the returned documentation sections (especially the use_cases field) and then use the get-documentation tool to fetch ALL documentation sections that are relevant for the user's task.

#### 3. svelte-autofixer

Analyzes Svelte code and returns issues and suggestions.
You MUST use this tool whenever writing Svelte code before sending it to the user. Keep calling it until no issues or suggestions are returned.

#### 4. playground-link

Generates a Svelte Playground link with the provided code.
After completing the code, ask the user if they want a playground link. Only call this tool after user confirmation and NEVER if code was written to files in their project.
