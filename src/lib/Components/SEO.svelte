<script>
	import { page } from '$app/stores';

	const SITE_URL = 'https://alirezakj.com';
	const SITE_NAME = 'Alireza Karimi Jafari';

	export let title = 'Alireza Karimi Jafari — Web Developer & Photographer in Melbourne';
	export let description =
		'Full-stack web developer and UI/UX designer based in Melbourne, Australia. Building fast, modern websites and apps with SvelteKit, React, and Tailwind CSS.';
	/** Path or absolute URL to the social share image. */
	export let image = '/assets/images/Portrait Cropped.jpg';
	/** Open Graph type, e.g. "website", "article", "profile". */
	export let type = 'website';
	/** Override the canonical URL; defaults to the current path. */
	export let canonical = '';
	export let noindex = false;
	/** Optional structured data object rendered as JSON-LD. */
	export let jsonld = null;

	$: resolvedCanonical = canonical || `${SITE_URL}${$page.url.pathname}`;
	$: resolvedImage = image.startsWith('http')
		? image
		: `${SITE_URL}${image.split('/').map(encodeURIComponent).join('/')}`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={resolvedCanonical} />
	<meta name="author" content={SITE_NAME} />
	<meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />

	<!-- Open Graph -->
	<meta property="og:type" content={type} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={resolvedCanonical} />
	<meta property="og:image" content={resolvedImage} />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:locale" content="en_AU" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={resolvedImage} />

	{#if jsonld}
		{@html `<script type="application/ld+json">${JSON.stringify(jsonld).replace(/</g, '\\u003c')}<\/script>`}
	{/if}
</svelte:head>
