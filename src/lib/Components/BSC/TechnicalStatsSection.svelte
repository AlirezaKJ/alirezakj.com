<script>
	export let starCount = 0;
	export let forkCount = 0;
	export let contributorCount = 0;
	export let releaseCount = 0;
	export let jsPercentage = 0;
	export let cssPercentage = 0;
	export let htmlPercentage = 0;
</script>

<!-- Technical Details & Community Stats -->
<section class="w-full py-24">
	<div class="mx-auto w-full max-w-[var(--keyw)] px-6">
		<div class="grid gap-12 md:grid-cols-2">
			<!-- Technical Stack -->
			<div>
				<h2 class="mb-8 font-serif text-4xl font-bold md:text-5xl">Technical Details</h2>

				<div class="space-y-6">
					<div>
						<h3 class="mb-4 text-2xl font-bold">Technology Stack</h3>
						<div class="space-y-3">
							<div class="flex items-center space-x-3">
								<span
									class="bg-accent-200 text-accent-800 inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold"
									>Electron.js</span
								>
								<span class="text-text/60">Desktop Framework</span>
							</div>
							<div class="flex items-center space-x-3">
								<span
									class="bg-primary-200 text-primary-800 inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold"
									>Node.js</span
								>
								<span class="text-text/60">Runtime Environment</span>
							</div>
							<div class="flex items-center space-x-3">
								<span
									class="inline-flex items-center rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700"
									>JavaScript</span
								>
								<span class="text-text/60">{jsPercentage}%</span>
							</div>
							<div class="flex items-center space-x-3">
								<span
									class="inline-flex items-center rounded-full bg-blue-200 px-4 py-2 text-sm font-semibold text-blue-700"
									>CSS</span
								>
								<span class="text-text/60">{cssPercentage}%</span>
							</div>
							<div class="flex items-center space-x-3">
								<span
									class="inline-flex items-center rounded-full bg-[var(--sc-orange-200)] px-4 py-2 text-sm font-semibold text-orange-700"
									>HTML</span
								>
								<span class="text-text/60">{htmlPercentage}%</span>
							</div>
						</div>
					</div>

					<div class="mt-8">
						<h3 class="mb-4 text-2xl font-bold">License</h3>
						<div class="bg-secondary-200 border-primary-100 rounded-xl border p-6">
							<p class="text-text/70">
								Released under the <strong>MIT License</strong>, allowing free use, modification, and
								distribution with proper attribution.
							</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Community Stats -->
			<div>
				<h2 class="mb-8 font-serif text-4xl font-bold md:text-5xl">Community & Stats</h2>

				<div class="space-y-6">
					<div class="bg-primary-100 border-primary-100 rounded-2xl border p-8 shadow-md">
						<div class="mb-2 flex items-center justify-between">
							<span class="text-text/60">GitHub Stars</span>
							<svg
								class="text-accent-500 h-6 w-6"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								><path
									d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
								/></svg
							>
						</div>
						<p class="text-primary-600 text-5xl font-bold">{starCount.toLocaleString()}</p>
					</div>

					<div class="bg-primary-100 border-primary-100 rounded-2xl border p-8 shadow-md">
						<div class="mb-2 flex items-center justify-between">
							<span class="text-text/60">Active Forks</span>
							<svg
								class="h-6 w-6"
								style="fill: var(--sc-orange-500);"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								><path
									d="M6 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
								/></svg
							>
						</div>
						<p class="text-5xl font-bold" style="color: var(--sc-orange-600);">
							{forkCount.toLocaleString()}
						</p>
					</div>

					<div class="bg-primary-100 border-primary-100 rounded-2xl border p-8 shadow-md">
						<div class="mb-2 flex items-center justify-between">
							<span class="text-text/60">Contributors</span>
							<svg
								class="text-secondary-500 h-6 w-6"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								><path
									d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
								/></svg
							>
						</div>
						<p class="text-secondary-600 text-5xl font-bold">{contributorCount}+</p>
					</div>

					<div class="bg-primary-100 border-primary-100 rounded-2xl border p-8 shadow-md">
						<div class="mb-2 flex items-center justify-between">
							<span class="text-text/60">Total Releases</span>
							<svg
								class="text-accent-500 h-6 w-6"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								><path
									d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
								/></svg
							>
						</div>
						<p class="text-accent-600 text-5xl font-bold">{releaseCount}+</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>