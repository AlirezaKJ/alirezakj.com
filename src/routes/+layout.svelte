<script>
	import { injectAnalytics } from '@vercel/analytics/sveltekit'
	import '$lib/main.css';
	import favicon from '$lib/assets/AKJ Black Rounded White Border.svg';
	import Footer from '$lib/Components/Layouts/Footer.svelte';
	import Nav from '$lib/Components/Layouts/Nav.svelte';
	import SEO from '$lib/Components/SEO.svelte';
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import Lenis from 'lenis';
	import 'lenis/dist/lenis.css';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { scrollState, lenisStore, prefersReducedMotion } from '$lib/stores/scroll';

	injectAnalytics();

	let lenis = null;

	/** Idle jitter reads as a direction flip; below this the page counts as still. */
	const IDLE_VELOCITY = 0.1;

	function publish({ scroll, limit, velocity, direction, progress }) {
		scrollState.set({
			scroll,
			limit,
			velocity,
			direction: Math.abs(velocity) < IDLE_VELOCITY ? 0 : direction,
			progress
		});
	}

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		// One clock: GSAP's ticker drives Lenis, so lag smoothing must not skip frames.
		gsap.ticker.lagSmoothing(0);

		// Reduced motion: Lenis is skipped entirely. Native scroll still has to feed
		// scrollState, since components read it instead of listening themselves.
		if (prefersReducedMotion()) {
			let previous = window.scrollY;

			const update = () => {
				const scroll = window.scrollY;
				const limit = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
				const velocity = scroll - previous;
				previous = scroll;
				publish({
					scroll,
					limit,
					velocity,
					direction: Math.sign(velocity),
					progress: limit > 0 ? scroll / limit : 0
				});
			};

			update();
			window.addEventListener('scroll', update, { passive: true });
			window.addEventListener('resize', update);

			return () => {
				window.removeEventListener('scroll', update);
				window.removeEventListener('resize', update);
			};
		}

		// autoRaf would start a second RAF loop on top of the GSAP ticker below.
		lenis = new Lenis({ autoRaf: false });
		lenisStore.set(lenis);
		publish(lenis);

		lenis.on('scroll', (event) => {
			ScrollTrigger.update();
			publish(event);
		});

		const raf = (time) => lenis.raf(time * 1000);
		gsap.ticker.add(raf);

		// Local @font-face files swap in after first paint and move everything below them.
		document.fonts?.ready.then(() => ScrollTrigger.refresh());

		return () => {
			gsap.ticker.remove(raf);
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
			lenis.destroy();
			lenis = null;
			lenisStore.set(null);
		};
	});

	afterNavigate(() => {
		// SvelteKit moves window scroll on navigation. Lenis ignores native scroll while
		// it is mid-animation, so resync it explicitly or it animates back to the old page's
		// target. Trigger positions are measured against a page that no longer exists.
		lenis?.resize();
		lenis?.scrollTo(window.scrollY, { immediate: true, force: true });
		ScrollTrigger.refresh();
	});
</script>


<SEO {...($page.data.seo ?? {})} />

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Nav />

<main>
	<div>
		<slot />
		<Footer />
	</div>
</main>