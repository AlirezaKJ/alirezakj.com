# Product

## Register

brand

## Users

Three audiences arrive at the same URL with different scan patterns. The site must not be re-shaped per audience; it must survive all three reads.

- **Freelance clients** (small businesses, individuals). Non-technical. Looking for evidence of delivery and reasons to trust. They read the projects and the contact path, not the stack list.
- **Hiring managers / recruiters**. Scanning fast, often on mobile, often with 20 other tabs open. They want stack, evidence, credentials, and location (Melbourne, AU) resolvable in under 30 seconds. Structured data and SEO already serve this read.
- **Developers and designers**. Judging craft, not claims. They will open devtools, resize the window, tab through, and check whether the interactions are real. They are the harshest audience and the one whose approval converts into the other two.

**Context of use:** unprompted, low-commitment. Nobody is obligated to stay. The site competes against a browser tab close, not against another portfolio.

## Product Purpose

A personal portfolio for Alireza Karimi Jafari — full-stack web developer, UI/UX designer, and photographer based in Melbourne, Australia — and the hub linking his shipped projects (BetterSoundCloud, Periodic Table, Font Explorer, photography gallery).

**The job it must do: be memorable.** Not "be complete", not "list everything". Dev portfolios are a saturated category where the modal entry is functionally identical to every other. Success is a visitor who remembers this site a week later and can describe *one specific thing* about it. Enquiries and interviews are the downstream effect of that, not the primary metric to design against.

Success looks like: a peer sends the link to another peer. A recruiter mentions the site itself in the first message. A client says "I want mine to feel like yours."

Failure looks like: technically fine, entirely forgettable. Indistinguishable from the template.

## Brand Personality

**Precise · restless · playful.**

- **Precise** — technically exact. Alignment, timing, and behaviour are correct because he can make them correct. Nothing is approximately placed. This is the credential, expressed without saying it.
- **Restless** — the page is not static. Things move, respond, and change under interaction. Motion is part of the build, not a decoration pass. GSAP and Lenis are already in the stack and carry this.
- **Playful** — willing to be strange, willing to reward curiosity. Something is hidden for the person who pokes at it. Never cutesy, never at the expense of legibility.

**Voice:** first-person, direct, specific. Names the actual technologies and the actual outcomes. No agency plural ("we deliver"), no adjective stacking, no humility theatre.

**Emotional goal:** the visitor should feel they are looking at something *made*, by a specific person, on purpose — not configured.

**Identity balance:** developer first; photography is texture, not a second offer. There is no parallel "hire me for photos" funnel. The photographic eye shows up in imagery quality, crop, composition, and pacing — it explains *why* the code looks the way it does. The gallery is evidence, not a service page.

## Anti-references

Three named failure modes. Any new surface that drifts toward one is wrong regardless of how well executed it is.

**1. The generic dev-portfolio template.** Dark navy background with a glowing purple/blue gradient hero. "Hi, I'm X 👋". A grid of identical skill cards with rounded icon tiles. A vertical timeline of jobs. A three-across project card grid where every card is a screenshot, a title, and three tech pills. This is the default shape of the category; matching it is how a site becomes invisible.

**2. The AI-slop landing page.** Cream / sand / beige body background. Tiny uppercase tracked eyebrows above every section heading. `01 / 02 / 03` numbered section markers used as scaffolding. Gradient text. Side-stripe accent borders. Identical card grids. Hero-metric rows. Anything that reads as "generated" defeats the entire premise of a craft portfolio.

**3. The corporate agency site.** Stock photography of teamwork. "We deliver solutions that drive results." Safe corporate blue. Vague capability statements with no artefact behind them. This one is a live risk: the current palette is a full blue ramp, and blue-on-white is exactly where this failure lives.

*(Not an anti-reference: ambition. Overdesigned award-site excess was not flagged as a risk. Custom cursors, long intro loaders, and scroll-jacking that fights the user are still out — they break the "precise" half of the personality — but the site is permitted to be visually loud.)*

## Design Principles

**1. The site is the proof.**
No claim survives unless the page itself demonstrates it. "High-performance applications" is worth nothing next to a page that loads instantly. "UI/UX design" is worth nothing next to a layout that is merely fine. Prefer demonstrating over asserting; where a sentence and an interaction make the same point, cut the sentence.

**2. Reward the poke.**
Restlessness and playfulness are expressed through response, not decoration. Interactive elements should do something worth doing. There should be at least one thing on the site a visitor finds only by being curious. Motion is designed alongside the layout, never bolted on afterward.

**3. Refuse the default shape.**
For every section, ask what shape a portfolio template would use — then use a different one. Skills are not an icon grid. Experience is not a timeline. Projects are not three equal cards. If a section can only be described by its category name, it isn't designed yet.

**4. Photography is texture, not a second pitch.**
One practice, two lenses. Imagery, crop, and pacing carry the photographic eye. Never a parallel service funnel, never a split identity that forces the visitor to choose which Alireza they came for.

**5. Memorable beats complete.**
Cutting a section is better than diluting the page. One dominant idea per fold, long scroll, deliberate pacing. Completeness is what a résumé is for; the site has a different job.

## Accessibility & Inclusion

**Current decision: best-effort, no formal audit target.** Sensible defaults, not a claimed WCAG conformance level. Recorded as-is.

Baseline expected of any work on this project regardless:

- **Semantic HTML and real landmarks.** `<nav>`, `<main>`, `<header>`, `<footer>`, correct heading order. Cheap, and already mostly present.
- **Keyboard operability.** The nav toggle, the menu overlay, and the project accordion must be reachable and operable by keyboard with visible focus. The current nav toggle is a `<div>` with a click handler and no keyboard path — that's the known gap.
- **`prefers-reduced-motion`.** Motion is central to this site (GSAP, Lenis smooth scroll, scroll-driven reveals), which makes this the highest-value single item on the list. Every animation needs a reduced-motion alternative, and Lenis should be skipped entirely under it.
- **Contrast.** Body text ≥ 4.5:1, large text ≥ 3:1. The blue ramp makes low-contrast mid-tones easy to reach for by accident.
- **Content visible by default.** Scroll reveals must enhance already-visible content, never gate it — otherwise the page ships blank to headless renderers and to the recruiter whose tab was backgrounded during load.

Worth noting once and then dropping: on a portfolio whose entire argument is *this person builds well*, accessibility is itself a credential, and the audit is the artefact. Upgrading to WCAG 2.2 AA later is a small delta from the baseline above.
