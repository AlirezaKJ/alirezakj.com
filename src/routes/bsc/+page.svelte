<script>
	import Header from '$lib/Components/BSC/BSCHeader.svelte';
	import Features from '$lib/Components/BSC/Features.svelte';
	import ComparisonTable from '$lib/Components/BSC/ComparisonTable.svelte';
	import WhyChoose from '$lib/Components/BSC/WhyChoose.svelte';
	import InstallationGuide from '$lib/Components/BSC/InstallationGuide.svelte';
	import PatchNotesSection from '$lib/Components/BSC/PatchNotesSection.svelte';
	import FAQSection from '$lib/Components/BSC/FAQSection.svelte';
	import TechnicalStatsSection from '$lib/Components/BSC/TechnicalStatsSection.svelte';
	import FinalCTASection from '$lib/Components/BSC/FinalCTASection.svelte';
	import { onMount } from 'svelte';

	export let data;

	let starCount = 242; // fallback value
	let forkCount = 14; // fallback value
	let contributorCount = 4; // fallback value
	let releaseCount = 10; // fallback value
	let jsPercentage = 26.9; // fallback value
	let cssPercentage = 56.2; // fallback value
	let htmlPercentage = 16.9; // fallback value

	onMount(async () => {
		try {
			// Fetch repository stats
			const repoResponse = await fetch('https://api.github.com/repos/AlirezaKJ/BetterSoundCloud');
			if (repoResponse.ok) {
				const repoData = await repoResponse.json();
				starCount = repoData.stargazers_count;
				forkCount = repoData.forks_count;
			}

			// Fetch contributors count
			const contributorsResponse = await fetch(
				'https://api.github.com/repos/AlirezaKJ/BetterSoundCloud/contributors'
			);
			if (contributorsResponse.ok) {
				const contributorsData = await contributorsResponse.json();
				contributorCount = contributorsData.length;
			}

			// Fetch releases count
			const releasesResponse = await fetch(
				'https://api.github.com/repos/AlirezaKJ/BetterSoundCloud/releases'
			);
			if (releasesResponse.ok) {
				const releasesData = await releasesResponse.json();
				releaseCount = releasesData.length;
			}

			// Fetch language statistics
			const languagesResponse = await fetch(
				'https://api.github.com/repos/AlirezaKJ/BetterSoundCloud/languages'
			);
			if (languagesResponse.ok) {
				const languagesData = await languagesResponse.json();
				const totalBytes = Object.values(languagesData).reduce((sum, bytes) => sum + bytes, 0);

				if (totalBytes > 0) {
					jsPercentage = (((languagesData.JavaScript || 0) / totalBytes) * 100).toFixed(1);
					cssPercentage = (((languagesData.CSS || 0) / totalBytes) * 100).toFixed(1);
					htmlPercentage = (((languagesData.HTML || 0) / totalBytes) * 100).toFixed(1);
				}
			}
		} catch (error) {
			console.error('Failed to fetch GitHub stats:', error);
		}
	});
</script>

<svelte:head>
	<title>BetterSoundCloud - Enhanced SoundCloud Desktop Client</title>
</svelte:head>

<div class="bsc-page w-full">
	<Header starCount={starCount.toLocaleString()} />

	<WhyChoose />

	<Features />

	<ComparisonTable />

	<InstallationGuide />

	<FAQSection />
	
	<TechnicalStatsSection
		{starCount}
		{forkCount}
		{contributorCount}
		{releaseCount}
		{jsPercentage}
		{cssPercentage}
		{htmlPercentage}
	/>
	
	<PatchNotesSection patchnotes={data.patchnotes} />

	<FinalCTASection />
</div>

