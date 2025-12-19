<script>
	import '$lib/main.css';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/Components/Footer.svelte';
	import Nav from '$lib/Components/Nav.svelte';

	import { onMount } from 'svelte';
	import gsap from 'gsap'
	import { ScrollSmoother } from 'gsap/ScrollSmoother';


	gsap.registerPlugin(ScrollSmoother);

	onMount(() => {
		ScrollSmoother.create({
			wrapper: '#smoother-wrapper',
			content: '#smoother-content',
			smooth: 1.5,
			effects: true
		});
	})

</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title> HOME | AKJ </title>
</svelte:head>

<Nav />

<main id="smoother-wrapper">
	<div id="smoother-content">
		<slot />
	</div>
</main>

<Footer />