<script>
	import { slide } from 'svelte/transition';

	let expandedFaq = null;

	function toggleFaq(index) {
		expandedFaq = expandedFaq === index ? null : index;
	}

	const faqs = [
		{
			question: 'Is BetterSoundCloud Safe?',
			answer:
				'Yes. BetterSoundCloud is completely safe and verified as 100% virus-free by Softpedia security analysis. The entire source code is publicly available on GitHub for transparency and security auditing by the community.'
		},
		{
			question: 'Will My SoundCloud Account Get Banned?',
			answer:
				"No. Since BetterSoundCloud's launch, no users have reported account bans from using the client. We operate within SoundCloud's terms of service by simply providing an alternative interface to access your account."
		},
		{
			question: 'How Do I Access Settings?',
			answer:
				'You can open the settings menu in two ways: Right-click anywhere in the application window, or use the control icons located in the bottom-right corner of the window.'
		},
		{
			question: 'How Do I Report Bugs or Suggest Features?',
			answer:
				"We actively welcome community feedback! Visit the GitHub Issues page, click 'New Issue' and provide detailed information. Include screenshots or error messages if relevant. The development team responds to all reports within 24 hours."
		},
		{
			question: 'Can I Contribute to the Project?',
			answer:
				'Absolutely! BetterSoundCloud is open-source and welcomes community contributions. Fork the repository on GitHub, make your improvements or fixes, and submit a pull request with a clear description. Our team reviews and merges contributions regularly.'
		}
	];
</script>

<!-- FAQ Section -->
<section class="w-full py-24">
	<div class="mx-auto w-full max-w-[var(--keyw)] px-6">
		<div class="mb-16 text-center">
			<h2 class="mb-6 font-serif text-5xl font-bold md:text-7xl">Frequently Asked Questions</h2>
			<p class="text-text/60 mx-auto max-w-3xl text-xl">
				Everything you need to know about BetterSoundCloud
			</p>
		</div>

		<div class="mx-auto max-w-4xl space-y-4">
			{#each faqs as faq, index}
				<div
					class="bg-secondary-100 border-secondary-200 overflow-hidden rounded-xl border transition-all duration-300"
				>
					<button
						class="hover:bg-secondary-200 flex w-full items-center justify-between px-8 py-6 text-left transition-colors duration-200"
						on:click={() => toggleFaq(index)}
					>
						<span class="pr-4 text-xl font-bold">{faq.question}</span>
						<svg
							class="h-6 w-6 flex-shrink-0 transition-transform duration-300"
							class:rotate-180={expandedFaq === index}
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
						</svg>
					</button>
					{#if expandedFaq === index}
						<div transition:slide={{ duration: 300 }} class="text-text/70 px-8 py-6 leading-relaxed">
							{faq.answer}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>