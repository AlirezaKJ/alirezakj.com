<script>
	import '$lib/main.css';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/Components/Footer.svelte';
	import Nav from '$lib/Components/Nav.svelte';

	import { onMount } from 'svelte';
	import Lenis from 'lenis';
	import 'lenis/dist/lenis.css';

	onMount(() => {
		const lenis = new Lenis()

		function raf(time) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	})

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