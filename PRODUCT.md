# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: prospective clients — small-to-mid B2B companies.** The sectors already in the portfolio: MedTech, materials science, sustainability/green-tech, modular construction. The person on the page is a founder, director, or marketing lead who can authorise a website build. They arrive comparing options, often after a referral or after seeing a site AKJ Studio already built. They are evaluating whether one independent practice can be trusted with something their whole public presence depends on.

Their job: decide, quickly and with enough confidence to start a conversation, whether this studio can deliver a site materially better than what an agency or a template would give them.

**Secondary audiences that arrive but do not drive the design:** developers arriving from BetterSoundCloud's GitHub repo and Softpedia listing (~67k downloads of reach), and recruiters who find the site through LinkedIn. Neither is the surface's target; the site must not be hostile to them, but it is not built for them.

## Product Purpose

alirezakj.com is the storefront and the proof for **AKJ Studio**, an independent design-and-build practice run by Alireza Karimi Jafari in Melbourne, Australia.

The site exists to convert a prospective client from "considering options" into "in conversation." It succeeds when a qualified client contacts the studio because the site itself demonstrated the standard of work they would be buying. The site is a work sample before it is a description of work.

## Positioning

**Motion and craft as the differentiator.** AKJ Studio ships a level of motion design and typographic craft that small studios and template shops do not attempt and that most agencies bill an extra discipline for. The site itself is the evidence — a client evaluating it is looking directly at the deliverable.

Supporting truths that make this credible rather than a boast:

- The studio designs, builds, animates, deploys, and secures in one head — no handoff between a designer, a front-end contractor, and an ops person, and no scope lost in the gaps.
- Delivered codebases are real, maintainable code a client's own engineers can take ownership of, not a page builder's output. The Lenexa Medical CEO's endorsement makes exactly this point in public.
- Every capability claim on the site is checkable: live client sites, a public GitHub repo with 379 stars, an independently certified desktop application.

## Operating Context

Client engagements are direct: the studio is the only party the client deals with, from first conversation to launch and beyond. Work reaches clients through referral, prior delivery, and the sectors already served, rather than through a marketplace or an agency roster.

Prospects typically evaluate on a laptop during a working day, often with a competitor's site open in another tab, and often shortlisting two or three options before making contact. Some arrive on a phone from a LinkedIn or referral link. Contact is initiated by email, not by a booking flow or a quote calculator.

Delivered sites are built and handed over as codebases the client can host and, where they have their own engineers, maintain.

## Capabilities and Constraints

**What the studio sells:**

- **Custom website design and build** — the core offer. End-to-end marketing and corporate sites: architecture, design, front-end build, motion, CMS integration, third-party feeds, responsive behaviour, SEO. Delivered as SvelteKit + Tailwind codebases.
- **Ongoing maintenance and retainer** — continued care after launch: content, updates, performance, SEO.
- **IT and infrastructure** — SharePoint deployment and user access, Power Automate flows, cloud/DNS, OS hardening, security posture. Currently practised in the IT Manager role at KAI-2.
- **Desktop and product engineering** — Electron applications and web tools, sold as work rather than only shipped as open source.

**Technical constraints (binding):**

- Deploy target is **Cloudflare Workers** via `@sveltejs/adapter-cloudflare` and `wrangler.jsonc`. Anything that requires a Node runtime, long-lived server processes, or a different host is out of scope.
- Existing public URLs must keep working: `/bsc`, `/projects/…`, and `/assets/certs/…`. These are linked from GitHub, LinkedIn, Softpedia, and shared certificate links, and are not under the studio's control once distributed.
- Stack in place: SvelteKit 2 / Svelte 5 (runes forced project-wide), Tailwind CSS v4, Vite, GSAP + ScrollTrigger, Lenis, Three.js. Motion infrastructure (`src/lib/motion/`) is already wired with a single GSAP-ticker-driven Lenis loop and a `prefers-reduced-motion` gate; new motion work builds on it rather than replacing it.
- **Motion is a product commitment, not a decoration budget.** The site runs four motion layers at all times — ambient (never fully still), scroll-choreographed, input-reactive, and transitional. Three.js carries the dedicated set-pieces. Every layer is gated on `prefers-reduced-motion`, and the surface stays fully legible and complete when that gate fires.
- **Styling is authored as Tailwind utilities** against the semantic `@theme` role tokens. Hand-written CSS is a deliberate exception, not a fallback; DESIGN.md's Utility-First Rule lists the four cases that qualify.
- The repository was deliberately cleaned to a fresh scaffold (`30f406c cleaned repo for fresh start`). The previous site's implementation is gone; the vault and the live site are the surviving record of its content.

**Surfaces in scope:**

- Home — the one-page core: who the studio is, selected work, contact.
- Project detail pages under `/projects/…`.
- `/bsc` — the BetterSoundCloud product landing page.

**Explicitly out of scope:** the photography gallery from the previous site. The Screen & Media background is real and may inform the studio's craft claim, but a `/gallery` surface is not being rebuilt.

**Undecided — do not invent:** pricing, service tiers, packages, engagement timelines, turnaround promises, availability, team size or any implication of a team beyond one person, client count, and any process/methodology framework.

## Brand Commitments

**Name:** AKJ Studio. The practice is the entity presented on the site. Alireza Karimi Jafari is the founder behind it, and personal credentials belong to him, not to the studio.

**Typefaces (binding):**

- **Grenze** — headings.
- **Hanken Grotesk** — body.
- **Grenze Gotisch** — expressive and selective use only, where it genuinely fits the content. Never the default heading face.

All three are self-hosted as variable WOFF2 in `static/fonts/`.

**Palette (binding): Sea Glass / Slate.** Already wired as role tokens in `src/routes/layout.css` with light and dark schemes and a `data-theme` override. Reference colours: Turquoise Green `#B5DECC`, Cobalt Green `#96D1AA`, Slate `#34454C`.

**Identity assets:** AKJ wordmark and logo SVGs (black/white, with and without text) live at `C:\Users\akj\OneDrive\The Vault\Work\AKJStudio\assets\`; rounded AKJ marks at `…\Personal\Portfolio\assets\`. An ASCII mark and a colour-and-type explorer also exist in the AKJStudio vault folder. These are the source of truth for the mark — do not redraw one.

**Voice:** not yet formally defined. Existing written traces are plain, factual, and unembellished; the GitHub bio ("the abysmal dev") is self-deprecating personal humour and does not carry to the studio's client-facing voice.

## Evidence on Hand

Real and verifiable. Source material lives in `C:\Users\akj\OneDrive\The Vault\Personal\Portfolio\` and `C:\Users\akj\OneDrive\The Vault\Work\AKJStudio\`.

**Client work delivered:**

| Project        | Sector                     | Stack                     |
| -------------- | -------------------------- | ------------------------- |
| Lenexa Medical | MedTech                    | SvelteKit, Tailwind, GSAP |
| Hybrid Modular | Modular homes (WA)         | SvelteKit, Tailwind       |
| Tansotec       | Graphene materials         | —                         |
| KAI-2          | Sustainability consultancy | —                         |
| Ouroborus      | Green-tech consultancy     | WordPress                 |
| Net Zero Stack | Climate-tech platform      | Wix                       |

**Public endorsements (two, both real, both attributed to Alireza personally rather than to AKJ Studio):**

- **Ajit Ravindran, Co-Founder & CEO, Lenexa Medical** — on an end-to-end rebuild: architecture, CMS integration, animations, third-party feeds, responsive design, "in a clean scalable codebase using SvelteKit and TailwindCSS which our software team is familiar with." Quoted in full in `Endorsements.md`.
- **Reza Hoseinnezhad, Professor of Autonomous Systems, RMIT University** (mentor, April 2026) — on cross-disciplinary capability and self-directed depth in security and cloud.

**BetterSoundCloud** — Electron SoundCloud client, the flagship open-source proof:

- 379 GitHub stars, 30 forks; ~67,400 downloads across 12 releases (V0.1.0 Dec 2022 → V0.7.1 May 2026); V0.6.0 alone 44,625 downloads.
- Softpedia "100% Clean" certified — independent malware-free verification, publicly linkable.
- Featured on jsDelivr.

**Other shipped work:** Font Explorer (fontexplorer.net), Periodic Table (ptable.alirezakj.com), FlorenceDB, Typerrank, plus legacy GitHub Pages demos. Full repo table with stars and dates in `Sources.md`.

**Credentials (Alireza's, with certificate PDFs already hosted under `/assets/certs/`):** Meta Front-End Developer (2025); Swinburne Certificate III in IT (2025), currently Certificate IV in Cyber Security (2025–2026); Parade College Certificate III in Screen and Media (2024); Football Victoria Level 4 Match Official (2023); Iran Knowledge Village Web Design I (2022).

**Assets available:** AKJ logo SVG set, professional photograph (`Resumes/photo.jpg`, circular crop at `photo-circle.png`), six resume variants, brand explorer preview images.

**Absences — must not be fabricated:** no client testimonials beyond the two above; no case-study metrics for any client site (no traffic lift, conversion, or performance numbers); no pricing or rate information; no logos-of-clients permission on record; no screenshots of client work in this repository; no AKJ Studio company registration, founding date, or team; no prior public AKJ Studio web presence.

## Product Principles

1. **The site is the sample.** Every claim about craft must be demonstrated by the page making it, not asserted next to it. A studio selling motion and typographic craft cannot ship a site that merely describes them.
2. **Only checkable claims.** The studio's whole credibility rests on a prospect being able to verify what they read — visit the site, open the repo, read the endorsement, check the Softpedia listing. Never introduce a claim that has no verifiable source in Evidence on Hand.
3. **One practitioner, stated plainly.** The studio's independence is the offer, not a liability to be disguised with plural pronouns or an implied team. Scale is not the pitch; unbroken ownership of the work is.
4. **Client outcomes lead; credentials support.** Prospective clients are buying delivered work, not a CV. Personal certifications and study belong on the page as backing for capability claims, never as its spine.
5. **Continuous motion, concentrated expression.** The site is never fully at rest; perpetual motion is the studio's signature, not an effect budget to be spent sparingly. What judgement governs is concentration — one orchestrated motion system per surface rather than scattered hover tricks, and one maker's mark rather than expressive type everywhere. The craft shows in how the motion is built, not in how little of it there is.
