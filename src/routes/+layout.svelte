<script>
	import '$lib/main.css';
	import favicon from '$lib/assets/favicon.svg';

	import Footer from '$lib/Components/Footer.svelte';
	import Nav from '$lib/Components/Nav.svelte';

</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title> HOME | AKJ </title>
</svelte:head>

<Nav />

<slot />

<Footer />