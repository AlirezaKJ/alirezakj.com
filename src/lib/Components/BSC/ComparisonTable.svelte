<script>
	const columns = ['BetterSoundCloud', 'SoundCloud.com'];

	const rows = [
		{
			feature: 'Ad-free listening',
			values: ['Yes', 'Paid']
		},
		{
			feature: 'Discord Rich Presence',
			values: ['Yes', 'No']
		},
    {
			feature: 'Synced Lyrics',
			values: ['Yes', 'No']
		},
    {
			feature: 'Song Downloader',
			values: ['Yes', 'No']
		},
    {
			feature: 'Last.fm scrobbling',
			values: ['Yes', 'No']
		},
		{
			feature: 'Theme support',
			values: ['Yes', 'No']
		},
		{
			feature: 'Tray support',
			values: ['Yes', 'No']
		},
    {
			feature: 'Lazy Loader',
			values: ['Yes', 'No']
		},
		{
			feature: 'Custom CSS',
			values: ['Yes', 'No']
		},
		{
			feature: 'Custom JavaScript',
			values: ['Yes', 'No']
		},
	];

	const displayValue = (value) => {
		// if (value === 'Yes') {
		// 	return '✓';
		// }

		// if (value === 'No') {
		// 	return '✕';
		// }

		return value;
	};

	const valueColumnClass = (index) => {
		if (index === 0) {
			return 'bg-accent-50 text-accent-800 border-accent-200';
		}

		return 'bg-[var(--sc-orange-950)] text-[var(--sc-orange-300)] border-[var(--sc-orange-900)]';
	};
</script>

<section class="from-background to-primary-50 w-full bg-gradient-to-b py-24">
	<div class="mx-auto w-full max-w-[var(--keyw)] px-6">
		<div class="mb-12 text-center">
			<h2 class="mb-6 font-serif text-5xl font-bold md:text-7xl">Comparison Table</h2>
			<p class="text-text/60 mx-auto max-w-4xl text-xl">
				Quickly compare BetterSoundCloud against the standard SoundCloud browser experience.
			</p>
		</div>

		<div class="border-primary-100 bg-primary-100 overflow-x-auto rounded-2xl border shadow-md">
			<table class="w-full min-w-[640px] border-collapse">
				<thead>
					<tr class="border-primary-200 bg-primary-50 border-b">
						<th class="text-text/70 px-6 py-5 text-left text-sm font-bold uppercase tracking-wide">
							Feature
						</th>
						{#each columns as column, index}
							<th
								class={`px-6 py-5 text-left text-sm font-bold uppercase tracking-wide ${
									index === 0 ? 'text-accent' : 'text-[var(--sc-orange-600)]'
								}`}
							>
								{column}
							</th>
						{/each}
					</tr>
				</thead>

				<tbody>
					{#each rows as row}
						<tr class="border-background-50 border-b last:border-b-0">
							<td class="px-6 py-4 text-base font-semibold">{row.feature}</td>
							{#each row.values as value, valueIndex}
								<td class="px-6 py-4">
									<span
										class={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-semibold ${valueColumnClass(
											valueIndex
										)}`}
										aria-label={value}
										title={value}
									>
										{displayValue(value)}
									</span>
								</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</section>
