<script>
	import { slide } from 'svelte/transition';

	let expandedVersion = null;

	export let patchnotes = [];

	function toggleVersion(index) {
		expandedVersion = expandedVersion === index ? null : index;
	}
</script>

<section class="via-background to-background bg-gradient-to-tr from-[var(--sc-orange-950)] w-full py-24">
	<div class="mx-auto w-full max-w-[var(--keyw)] px-6">
		<div class="mb-16 text-center">
			<h2 class="mb-6 font-serif text-5xl font-bold md:text-7xl">Release/Patch Notes</h2>
			<p class="text-text/60 mx-auto max-w-3xl text-xl">Track what changed in every release</p>
		</div>

		<div class="mx-auto max-w-4xl space-y-4">
			{#each patchnotes as patch, index}
				<div class="bg-secondary-100 border-secondary-200 overflow-hidden rounded-xl border">
					<button
						class="hover:bg-secondary-200 flex w-full items-center justify-between px-8 py-6 text-left transition-colors duration-200"
						on:click={() => toggleVersion(index)}
					>
						<div>
							<p class="text-xl font-bold">{patch.title}</p>
							<p class="text-text/60 mt-1 text-sm">{patch.date}</p>
						</div>
						<svg
							class="h-6 w-6 flex-shrink-0 transition-transform duration-300"
							class:rotate-180={expandedVersion === index}
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
						</svg>
					</button>

					{#if expandedVersion === index}
						<div transition:slide={{ duration: 300 }} class="px-8 py-6">
							<ul class="text-text/70 space-y-3">
								{#each patch.changes as change}
									<li class="leading-relaxed">
										<div>{change.text}</div>
										{#if change.links?.length}
											<div class="mt-1 flex flex-wrap gap-2">
												{#each change.links as link}
													<a
														href={link.href}
														target="_blank"
														rel="noopener noreferrer"
														class="text-primary-600 hover:text-primary-700 text-sm font-semibold"
													>
														{link.label}
													</a>
												{/each}
											</div>
										{/if}
									</li>
								{/each}
							</ul>

							<div class="mt-6">
								<a
									href={patch.link}
									target="_blank"
									rel="noopener noreferrer"
									class="text-primary-600 hover:text-primary-700 font-semibold"
								>
									View full release
								</a>
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>