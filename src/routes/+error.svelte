<script>
	import { page } from '$app/stores';
	import { dev } from '$app/environment';

	$: status = $page.status ?? 500;
	$: message = $page.error?.message ?? 'Something went wrong.';
	$: stack = $page.error?.stack;
</script>

<svelte:head>
	<title>{status} | AKJ</title>
</svelte:head>

<section
	class="mx-auto flex flex-col gap-4 min-h-[65vh] w-full max-w-5xl items-center justify-center px-6"
>
	<h2 class="text-6xl font-serif">Error {status}</h2>
	<h3>{message}</h3>
	<div class="mt-8 flex flex-wrap gap-4">
		<a
			href="/"
			class="inline-flex items-center justify-center rounded-full border border-[color:var(--primary-300)] bg-[color:var(--primary-50)] px-5 py-2.5 text-sm font-semibold text-[color:var(--primary-800)] transition hover:-translate-y-0.5 hover:border-[color:var(--primary-500)]"
		>
			Back to home
		</a>
	</div>
	{#if dev && stack}
			<details class="mt-10 rounded-2xl border border-[color:var(--primary-200)] bg-white/60 p-4 text-left">
				<summary class="cursor-pointer text-sm font-semibold text-[color:var(--primary-700)]">
					Stack trace
				</summary>
				<pre class="mt-3 whitespace-pre-wrap text-xs text-[color:var(--text-800)]">
{stack}
				</pre>
			</details>
		{/if}
</section>
