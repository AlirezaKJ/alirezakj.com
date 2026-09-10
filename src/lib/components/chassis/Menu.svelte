<script>
	import { menu } from '$lib/data/nav.js';
	import { lockScroll, reducedMotion, unlockScroll } from '$lib/motion/scroll.svelte.js';

	let { open = false, onclose } = $props();

	/** @type {HTMLElement | undefined} */
	let panel = $state();

	const stagger = $derived(reducedMotion.current ? 0 : 40);

	$effect(() => {
		if (!open) return;

		// Lenis owns scroll, so the lock goes through the motion module. Setting
		// `overflow` directly here would leave Lenis still animating underneath.
		lockScroll();

		const returnFocus = document.activeElement;
		panel?.querySelector('a, button')?.focus();

		const onKeydown = (/** @type {KeyboardEvent} */ event) => {
			if (event.key === 'Escape') onclose?.();
		};

		window.addEventListener('keydown', onKeydown);

		return () => {
			window.removeEventListener('keydown', onKeydown);
			unlockScroll();
			if (returnFocus instanceof HTMLElement) returnFocus.focus();
		};
	});

</script>

<div
	bind:this={panel}
	inert={!open}
	role="dialog"
	aria-modal="true"
	aria-label="Site menu"
	class={[
		'bg-background/95 ease-settle fixed inset-0 z-40 backdrop-blur-xl transition-transform duration-[420ms]',
		open ? 'translate-x-0' : '-translate-x-full'
	]}
>
	<div class="flex h-full flex-col overflow-y-auto pt-[var(--nav-h)] pb-8">
		<div
			class="max-w-keyw mx-auto grid w-full flex-1 gap-10 px-4 sm:grid-cols-2 md:gap-16 md:px-0"
		>
			<!-- Hidden entirely until there are sections to point at, rather than a
			     heading standing over an empty list. -->
			{#if menu.page.length > 0}
			<nav aria-label="On this page">
				<h2 class="text-muted mb-6 text-xs font-medium tracking-[0.12em] uppercase">This page</h2>
				<ul class="space-y-3 md:space-y-4">
					{#each menu.page as link, i (link.href)}
						<li
							class={[
								'ease-settle transition-all duration-[420ms]',
								open ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
							]}
							style:transition-delay="{open ? i * stagger : 0}ms"
						>
							<a
								href={link.href}
								onclick={onclose}
								class="font-heading text-foreground hover:text-primary ease-settle block text-3xl font-medium transition-colors duration-[160ms] md:text-4xl"
							>
								{link.name}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
			{/if}

			<nav aria-label="Elsewhere">
				<h2 class="text-muted mb-6 text-xs font-medium tracking-[0.12em] uppercase">Elsewhere</h2>
				<ul class="space-y-3 md:space-y-4">
					{#each menu.elsewhere as link, i (link.name)}
						<li
							class={[
								'ease-settle transition-all duration-[420ms]',
								open ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
							]}
							style:transition-delay="{open ? (menu.page.length + i) * stagger : 0}ms"
						>
							{#if link.soon}
								<!-- Real work, not yet built. It stays visible so the intent is
								     legible, and inert so it is never a dead link. -->
								<span
									class="font-heading text-muted flex items-baseline gap-3 text-3xl font-medium md:text-4xl"
								>
									{link.name}
									<span class="font-sans text-[0.6rem] font-medium tracking-[0.12em] uppercase">
										In progress
									</span>
								</span>
							{:else}
								<a
									href={link.href}
									onclick={onclose}
									target={link.external ? '_blank' : null}
									rel={link.external ? 'noreferrer' : null}
									class="font-heading text-foreground hover:text-primary ease-settle block text-3xl font-medium transition-colors duration-[160ms] md:text-4xl"
								>
									{link.name}
								</a>
							{/if}
						</li>
					{/each}
				</ul>
			</nav>
		</div>

	</div>
</div>
