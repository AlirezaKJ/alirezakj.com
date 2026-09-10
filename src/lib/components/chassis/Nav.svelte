<script>
	import LetterMark from './LetterMark.svelte';
	import Menu from './Menu.svelte';
	import { scrollState, scrollTo } from '$lib/motion/scroll.svelte.js';
	import { theme } from '$lib/motion/theme.svelte.js';

	/**
	 * The chassis: the nameplate in the left lane, the menu control in the right.
	 * Both are fixed, and the `--chassis-lane` reservation in layout.css is what
	 * keeps them from ever colliding with content.
	 *
	 * The plate opens at the top of the page, at the bottom, and whenever the
	 * menu is open — the three moments when nothing else needs the room.
	 */

	let menuOpen = $state(false);

	const atTop = $derived(scrollState.scroll < 1);
	const atBottom = $derived(scrollState.limit > 0 && scrollState.scroll >= scrollState.limit - 2);

	/**
	 * At the bottom the plate travels in two moves, not one.
	 *
	 * It drops the moment the page bottoms out, and only unfurls once it has
	 * finished falling — so it reads as being taken down and then across into its
	 * indent, rather than materialising in the corner already open. Driving both
	 * from the same delayed flag is what makes it appear instead of arrive.
	 */
	const dropped = $derived(atBottom && !menuOpen);

	/** True once the drop has finished travelling; gates the second move only. */
	let landed = $state(false);

	$effect(() => {
		if (!dropped) return;
		// Matches the drop's own duration, so the unfurl starts as it touches down.
		const travel = setTimeout(() => (landed = true), 420);
		return () => {
			clearTimeout(travel);
			landed = false;
		};
	});

	const expanded = $derived(atTop || landed || menuOpen);

	function toTop(/** @type {MouseEvent} */ event) {
		event.preventDefault();
		menuOpen = false;
		scrollTo(0);
	}
</script>

<div class="pointer-events-none fixed inset-0 z-50" aria-hidden={menuOpen ? null : undefined}>
	<!--
		Both moves are transforms rather than `top`/`left`, so the travel runs on
		the compositor and the two compose into one `translate` instead of two
		competing layout animations.
	-->
	<div
		class={[
			'ease-settle pointer-events-auto absolute top-0 left-4 transition-transform duration-[420ms] will-change-transform',
			expanded ? 'translate-x-[calc(var(--chassis-lane)-1rem)]' : 'translate-x-0',
			dropped ? 'translate-y-[calc(100dvh-var(--nav-h)-1.5rem)]' : 'translate-y-0'
		]}
	>
		<LetterMark {expanded} onclick={toTop} />
	</div>

	<!-- The right lane. The menu control keeps its place centred in the nav band,
	     level with the nameplate, and the display toggle sits directly beneath it
	     rather than shifting the pair off-centre. -->
	<div class="absolute top-0 right-4 flex flex-col items-center md:right-8">
		<div class="flex h-[var(--nav-h)] items-center">
			<button
				type="button"
				onclick={() => (menuOpen = !menuOpen)}
				aria-expanded={menuOpen}
				aria-label={menuOpen ? 'Close menu' : 'Open menu'}
				class="text-foreground hover:text-primary ease-settle pointer-events-auto flex h-12 w-12 items-center justify-center rounded-sm transition-colors duration-[160ms]"
			>
				{#if menuOpen}
					<svg viewBox="0 -960 960 960" class="h-8 w-8 fill-current" aria-hidden="true">
						<path
							d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"
						/>
					</svg>
				{:else}
					<svg viewBox="0 -960 960 960" class="h-8 w-8 fill-current" aria-hidden="true">
						<path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
					</svg>
				{/if}
			</button>
		</div>

		<!-- Shows the mode it will switch you to, which is the thing the click
		     actually does. It stays above the overlay, so it is reachable with the
		     menu open too. -->
		<button
			type="button"
			onclick={() => theme.toggle()}
			aria-label={theme.isDark ? 'Switch to light mode' : 'Switch to dark mode'}
			class="text-muted hover:text-primary ease-settle pointer-events-auto -mt-8 flex h-12 w-12 items-center justify-center rounded-sm transition-colors duration-[160ms]"
		>
			{#if theme.isDark}
				<svg viewBox="0 -960 960 960" class="h-7 w-7 fill-current" aria-hidden="true">
					<path
						d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z"
					/>
				</svg>
			{:else}
				<svg viewBox="0 -960 960 960" class="h-7 w-7 fill-current" aria-hidden="true">
					<path
						d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Z"
					/>
				</svg>
			{/if}
		</button>
	</div>
</div>

<Menu open={menuOpen} onclose={() => (menuOpen = false)} />
