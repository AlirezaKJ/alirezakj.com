<script>
	import './layout.css';
	import 'lenis/dist/lenis.css';
	import favicon from '$lib/assets/favicon.svg';
	import Nav from '$lib/components/chassis/Nav.svelte';
	import Lenis from 'lenis';
	import { afterNavigate } from '$app/navigation';
	import { gsap, ScrollTrigger } from '$lib/motion/gsap.js';
	import {
		getLenis,
		publishScroll,
		reducedMotion,
		setLenis,
		watchNativeScroll
	} from '$lib/motion/scroll.svelte.js';

	let { children } = $props();

	$effect(() => {
		// Re-runs if the preference flips mid-session. Under reduced motion Lenis is
		// skipped entirely, but native scroll still has to feed `scrollState` since
		// components read it instead of listening themselves.
		if (reducedMotion.current) {
			return watchNativeScroll();
		}

		// autoRaf would start a second RAF loop on top of the GSAP ticker below.
		const lenis = new Lenis({ autoRaf: false });
		setLenis(lenis);
		publishScroll(lenis);

		lenis.on('scroll', (event) => {
			ScrollTrigger.update();
			publishScroll(event);
		});

		// One clock: GSAP's ticker drives Lenis, so lag smoothing must not skip frames.
		const raf = (time) => lenis.raf(time * 1000);
		gsap.ticker.add(raf);
		gsap.ticker.lagSmoothing(0);

		// Local @font-face files swap in after first paint and move everything below them.
		document.fonts?.ready.then(() => ScrollTrigger.refresh());

		return () => {
			gsap.ticker.remove(raf);
			gsap.ticker.lagSmoothing(500, 33);
			for (const trigger of ScrollTrigger.getAll()) trigger.kill();
			lenis.destroy();
			setLenis(null);
		};
	});

	afterNavigate(() => {
		// SvelteKit moves window scroll on navigation. Lenis ignores native scroll while
		// it is mid-animation, so resync it explicitly or it animates back to the old page's
		// target. Trigger positions are measured against a page that no longer exists.
		const lenis = getLenis();
		lenis?.resize();
		lenis?.scrollTo(window.scrollY, { immediate: true, force: true });
		ScrollTrigger.refresh();
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<a
	href="#main"
	class="bg-primary text-on-primary sr-only rounded-sm px-4 py-2 text-xs font-medium tracking-[0.12em] uppercase focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60]"
>
	Skip to content
</a>

<Nav />

<main id="main">
	{@render children()}
</main>
