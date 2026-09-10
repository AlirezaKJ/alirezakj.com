<script>
	import { reducedMotion, scrollState } from '$lib/motion/scroll.svelte.js';

	/**
	 * The nameplate. Collapsed it is a single engraved "A"; expanded it reads
	 * "AKJ | Studio", arriving in two beats — A, then AKJ, then the rule and
	 * Studio together.
	 *
	 * It expands in two beats and collapses in one. Collapsing in two would put
	 * the fussiness where nobody asked for it: on the way out, at every scroll.
	 */

	let { expanded = false, onclick } = $props();

	/** Only the second beat is genuinely stateful — it is the one that waits. */
	let settled = $state(false);

	$effect(() => {
		// Reduced motion gets the finished nameplate, not a slower version of the
		// same choreography.
		if (!expanded || reducedMotion.current) return;

		const beat = setTimeout(() => (settled = true), 190);
		return () => {
			clearTimeout(beat);
			settled = false;
		};
	});

	/** 0: A · 1: AKJ · 2: AKJ | Studio */
	const stage = $derived(!expanded ? 0 : reducedMotion.current || settled ? 2 : 1);

	/**
	 * The chevron orbits the A rather than spinning where it stands: it rests to
	 * the right, swings under when the page travels down, and over when it
	 * travels up. Idle reads as neither direction, so it returns to rest.
	 */
	const heading = $derived(
		scrollState.direction === 1 ? 'rotate-90' : scrollState.direction === -1 ? '-rotate-90' : ''
	);
</script>

<a
	href="/"
	{onclick}
	data-stage={stage}
	class="group ease-settle flex h-[var(--nav-h)] items-center outline-offset-4 transition-all duration-[240ms]"
	aria-label="AKJ Studio — back to the top"
>
	<span
		class="text-foreground font-heading flex items-baseline text-4xl leading-none font-semibold tracking-tight sm:text-5xl md:text-6xl"
	>
		<!-- The A is its own positioning context, so the orbit below pivots on the
		     letter's own centre at every size rather than on a measured pixel
		     offset that only holds at one breakpoint. -->
		<span class="relative">
			A

			<!-- A zero-size point at the centre of the A. Rotating it sweeps the
			     chevron around on an arc, and because the chevron is its child it
			     turns to face the way it is travelling. -->
			<span
				class={[
					'ease-settle absolute top-1/2 left-1/2 h-0 w-0 transition-transform duration-[320ms]',
					heading
				]}
				aria-hidden="true"
			>
				<!-- The glyph only fills about a third of this viewBox, so the box has
				     to run well past the visible chevron. Sized against the letterform
				     rather than the old muted-grey hairline, and in the plate's own ink
				     so it reads as part of the mark. -->
				<svg
					viewBox="0 -960 960 960"
					class={[
						'fill-foreground absolute top-0 left-[0.82em] h-[0.86em] w-[0.86em] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-[240ms]',
						stage === 0 ? 'opacity-100 delay-[240ms]' : 'opacity-0 delay-0'
					]}
				>
					<path
						d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z"
					/>
				</svg>
			</span>
		</span>

		<!-- Beat one. `0fr → 1fr` animates without reflowing anything outside this
		     element, which `width: auto` cannot do.

		     The reveals clip with `clip-path` rather than `overflow-hidden`: the
		     separator is taller than the line box, and `overflow-hidden` would cut
		     its ends off. This clips horizontally and lets it through vertically. -->
		<span
			class={[
				'ease-settle grid transition-[grid-template-columns] duration-[240ms]',
				stage >= 1 ? 'grid-cols-[1fr]' : 'grid-cols-[0fr]'
			]}
		>
			<span class="min-w-0 [clip-path:inset(-60%_0_-60%_0)]">KJ</span>
		</span>

		<!-- Beat two. The separator rides inside this reveal with "Studio", so
		     "AKJ" never waits with a trailing rule hanging off it.

		     It follows the vault lockup's separator — an ink stroke rather than a
		     typed glyph, clearing the cap height above and the baseline below — but
		     shortened from the lockup's full proportion, which reads too tall at
		     nameplate size. Both ends are pulled in by the same factor, so it stays
		     optically centred on the text rather than sinking or floating. -->
		<span
			class={[
				'ease-settle grid transition-[grid-template-columns] duration-[420ms]',
				stage >= 2 ? 'grid-cols-[1fr]' : 'grid-cols-[0fr]'
			]}
		>
			<span class="min-w-0 [clip-path:inset(-60%_0_-60%_0)]">
				<span class="flex items-baseline gap-[0.32em] pl-[0.32em] whitespace-nowrap">
					<span
						class="bg-foreground h-[1.05em] w-[0.04em] shrink-0 translate-y-[0.19em]"
						aria-hidden="true"
					></span>
					<span class="text-primary">Studio</span>
				</span>
			</span>
		</span>
	</span>
</a>
