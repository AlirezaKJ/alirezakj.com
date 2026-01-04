<script>
	import '$lib/main.css';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/Components/Layouts/Footer.svelte';
	import Nav from '$lib/Components/Layouts/Nav.svelte';

	import { onMount } from 'svelte';
	import Lenis from 'lenis';
	import 'lenis/dist/lenis.css';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { scrollState, lenisStore } from '$lib/stores/scroll';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		const lenis = new Lenis();
		lenisStore.set(lenis);

		lenis.on('scroll', (e) => {
			ScrollTrigger.update(e);
			scrollState.set({
				scroll: e.scroll,
				limit: e.limit,
				velocity: e.velocity,
				direction: e.direction,
				progress: e.progress
			});
		});

        lenis.on('scroll', ({ velocity }) => {
            if (Math.abs(velocity) < 0.1) {
                 scrollState.update(s => ({ ...s, direction: 0 }));
            }
        });



		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);
	});

</script>


<svelte:head>
	<link rel="icon" href={favicon} />
	<title> HOME | AKJ </title>
</svelte:head>

<Nav />

<main>
	<div>
		<slot />
		<Footer />
	</div>
</main>