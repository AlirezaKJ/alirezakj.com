<section class="services px-6 py-24 text-white md:px-20">
	<div class="mx-auto max-w-7xl">
		<h2 class="mb-16 text-center font-serif text-5xl font-bold md:text-7xl">Services</h2>

		<div class="mb-20 grid gap-8 md:grid-cols-3">
			{#each [{ title: 'Custom Web Development', desc: 'From concept to deployment, building tailored layout and functionality.' }, { title: 'Website Redesign', desc: 'Modernizing existing sites with fresh design and improved performance.' }, { title: 'Web Apps', desc: 'Interactive, feature-rich applications using SvelteKit or React.' }, { title: 'Responsive Design', desc: 'Ensuring your site looks perfect on all devices, mobile-first.' }, { title: 'Performance', desc: 'Speed optimization, faster load times, and efficient code.' }, { title: 'UI/UX Design', desc: 'Creating beautiful, user-centered interfaces and experiences.' }] as service}
				<div
					class="bg-primary-900/40 border-primary-800 hover:bg-primary-900 hover:border-accent-500 group rounded-2xl border p-8 transition-all duration-300"
				>
					<h3 class="text-primary-100 group-hover:text-accent-400 mb-3 text-xl font-bold">
						{service.title}
					</h3>
					<p class="text-primary-300 leading-relaxed">{service.desc}</p>
				</div>
			{/each}
		</div>

		<!-- Rates / Engagement -->
		<div
			class="from-primary-900 to-primary-800 border-primary-700 rounded-3xl border bg-gradient-to-r p-8 md:p-12"
		>
			<h3 class="mb-8 text-center font-serif text-3xl font-bold md:text-left">Engagement Models</h3>
			<div class="grid grid-cols-2 gap-6 md:grid-cols-4">
				<div class="text-center md:text-left">
					<h4 class="text-accent-400 text-lg font-bold">Hourly</h4>
					<p class="text-primary-300 text-sm">Consultation & Planning</p>
				</div>
				<div class="text-center md:text-left">
					<h4 class="text-accent-400 text-lg font-bold">Project-Based</h4>
					<p class="text-primary-300 text-sm">Fixed Scope & Price</p>
				</div>
				<div class="text-center md:text-left">
					<h4 class="text-accent-400 text-lg font-bold">Retainer</h4>
					<p class="text-primary-300 text-sm">Ongoing Maintenance</p>
				</div>
				<div class="text-center md:text-left">
					<h4 class="text-lg font-bold text-green-400">Freelance</h4>
					<p class="text-primary-300 text-sm">Available Now</p>
				</div>
			</div>
		</div>
	</div>
</section>
