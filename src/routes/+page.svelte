<script>
	/**
	 * TEMPORARY SCAFFOLDING — delete this when real sections land.
	 *
	 * Its only job is to give the page enough height to exercise the nav: the
	 * plate collapsing to "A" on the way down, the chevron reading scroll
	 * direction, and the plate dropping and completing to "AKJ | Studio" at the
	 * bottom. The copy is deliberately generic so nothing here can be mistaken
	 * for real content.
	 */

	const title = 'AKJ Studio';
	const description =
		'AKJ Studio is Alireza Karimi Jafari — design, build, motion, deployment and infrastructure, in Melbourne.';

	const blocks = [
		{
			heading: 'Section one',
			body: 'Placeholder copy. Scroll down and the nameplate should collapse to a single A with the chevron beside it, pointing the way you are travelling.'
		},
		{
			heading: 'Section two',
			body: 'Placeholder copy. Reverse direction and the chevron should swing to point back up; come to a stop and it settles level again.'
		},
		{
			heading: 'Section three',
			body: 'Placeholder copy. The lane down each side is reserved by the chassis, so this column never runs underneath the plate on the left or the menu control on the right.'
		},
		{
			heading: 'Section four',
			body: 'Placeholder copy. Open the menu at any scroll position and the plate should expand again while the overlay is up, then collapse when it closes.'
		},
		{
			heading: 'Section five',
			body: 'Placeholder copy. Body text sits on the same measure the design system uses, so the rhythm here is roughly what real sections will feel like.'
		},
		{
			heading: 'Section six',
			body: 'Placeholder copy. Nothing on this page is real. Replace the whole file rather than editing around it.'
		},
		{
			heading: 'Section seven',
			body: 'Placeholder copy. Keep going — the last stretch is what tests the behaviour at the bottom of the page.'
		},
		{
			heading: 'Section eight',
			body: 'Placeholder copy. At the very bottom the plate should settle into the lower-left corner and read out in full.'
		}
	];
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<!--
	The bottom padding is not decoration. At the seabed the plate drops into the
	lower-left of the viewport and expands, so it occupies the bottom
	`--nav-h + 1.5rem` of the screen. Without clearance it lands on top of the
	last section's copy. Any real page using this nav owes the same allowance.
-->
<div
	class="max-w-keyw mx-auto w-full px-4 pt-[var(--nav-h)] pb-[calc(var(--nav-h)+4rem)] md:px-0"
>
	{#each blocks as block, i (block.heading)}
		<section class={['border-divider py-20 md:py-28', i > 0 && 'border-t']}>
			<h2 class="font-heading text-foreground text-4xl leading-tight font-medium md:text-5xl">
				{block.heading}
			</h2>
			<p class="text-muted mt-5 max-w-[62ch] text-lg leading-relaxed">
				{block.body}
			</p>
		</section>
	{/each}
</div>
