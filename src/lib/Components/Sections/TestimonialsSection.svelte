<script>
	import { onDestroy, onMount } from 'svelte';


	const testimonials = [
		{
			image: '/assets/images/Portrait%20Cropped.jpg',
			name: 'Tawab Frahmand',
			role: 'CEO, Lenexa Medical',
			paragraph:
				'Working with Alireza was smooth from start to finish. He translated our ideas into a clean, modern website and kept communication clear through every phase of the project, from early planning to final launch. What stood out most was how quickly he understood both the visual direction and business goals, then turned feedback into practical improvements without delay. The final result looked polished, loaded quickly across devices, and gave our team a much stronger digital presence than we had before.'
		},
		{
			image: '/assets/images/blued%20portrait.jpg',
			name: 'Ajit Ravindran',
			role: 'Operations Lead, KAI-2',
			paragraph:
				'He delivered exactly what we needed while improving several workflows we had not originally identified as priorities. Throughout the engagement, he was responsive, detail-oriented, and always willing to explain technical decisions in a way that made planning easier for our non-technical stakeholders. He consistently proposed practical solutions rather than quick fixes, which helped us reduce friction in day-to-day operations and maintain a stable, professional experience for our users after go-live.'
		},
		{
			image: '/assets/images/Portrait%20Cropped.jpg',
			name: 'Reza Hoseinnezhad',
			role: 'Project Coordinator, Freelance Client',
			paragraph:
				'Our collaboration was efficient and genuinely stress-free from kickoff to delivery. Alireza was organized, realistic with timelines, and proactive about sharing progress so there were no surprises during development. The final product looked excellent, performed reliably on mobile and desktop, and included thoughtful refinements that improved usability beyond the original scope. He also provided clear handover guidance, which made post-launch updates much easier for our team to manage confidently.'
		}
	];

	let activeIndex = 0;
	let autoplayId;
	let carouselEl;
	let prefersReducedMotion = false;
	let isPaused = false;
	let touchStartX = 0;
	let touchStartY = 0;
	let touchActive = false;

	const AUTOPLAY_DELAY = 12000;

	function clampIndex(index) {
		return (index + testimonials.length) % testimonials.length;
	}

	function goTo(index) {
		activeIndex = clampIndex(index);
	}

	function next() {
		goTo(activeIndex + 1);
	}

	function prev() {
		goTo(activeIndex - 1);
	}

	function handleKeydown(event) {
		if (!carouselEl || !carouselEl.contains(document.activeElement)) return;

		if (event.key === 'ArrowRight') {
			event.preventDefault();
			next();
		}

		if (event.key === 'ArrowLeft') {
			event.preventDefault();
			prev();
		}
	}

	function startAutoplay() {
		if (autoplayId || prefersReducedMotion) return;

		autoplayId = setInterval(() => {
			if (!isPaused) next();
		}, AUTOPLAY_DELAY);
	}

	function stopAutoplay() {
		if (autoplayId) {
			clearInterval(autoplayId);
			autoplayId = undefined;
		}
	}

	function pauseAutoplay() {
		isPaused = true;
	}

	function resumeAutoplay() {
		isPaused = false;
	}

	function handlePointerDown(event) {
		touchActive = true;
		touchStartX = event.clientX;
		touchStartY = event.clientY;
		pauseAutoplay();
	}

	function handlePointerUp(event) {
		if (!touchActive) return;

		const deltaX = event.clientX - touchStartX;
		const deltaY = event.clientY - touchStartY;
		const horizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40;

		if (horizontalSwipe) {
			if (deltaX < 0) {
				next();
			} else {
				prev();
			}
		}

		touchActive = false;
		resumeAutoplay();
	}

	onMount(() => {
		prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		startAutoplay();

		return () => {
			stopAutoplay();
		};
	});

	onDestroy(() => {
		stopAutoplay();
	});
</script>

<svelte:window on:keydown={handleKeydown} />


<section id="testimonials" class="py-16 md:py-24">
	<div class="max-w-[var(--keyw)] mx-auto w-full px-4 md:px-0">
		<div class="mb-10 md:mb-14 text-center">
			<h2 class="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-primary-950">
				Endorsements
        <!-- Testimonials & Recommendations -->
			</h2>
			<!-- <p class="text-primary-700 text-base sm:text-lg mt-3 md:mt-4">
				Recommendations from people I have worked with.
			</p> -->
		</div>

		<div bind:this={carouselEl} class="mx-auto w-full"
			role="region"
			aria-roledescription="carousel"
			aria-label="Testimonials"
		>
			<div
				class="overflow-hidden rounded-[2rem] border border-primary-100 bg-primary-50 shadow-[0_12px_40px_rgba(14,37,49,0.08)]"
				on:pointerdown={handlePointerDown}
				on:pointerup={handlePointerUp}
				on:pointercancel={() => (touchActive = false)}
				on:pointerleave={() => (touchActive = false)}
			>
				<div
					class="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
					style={`transform: translateX(-${activeIndex * 100}%);`}
				>
					{#each testimonials as testimonial, index}
						<article
							class="w-full flex-shrink-0 px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12"
							aria-hidden={activeIndex !== index}
						>
							<div class="mx-auto rounded-[1.75rem] backdrop-blur-sm">
								<div class="mb-6 flex items-center gap-4">
									<img
										src={testimonial.image}
										alt={testimonial.name}
										loading="lazy"
										class="h-16 w-16 rounded-full border border-primary-200 object-cover shadow-sm sm:h-20 sm:w-20"
									/>
									<div>
										<h3 class="text-xl font-bold text-primary-950 sm:text-2xl">{testimonial.name}</h3>
										<p class="text-sm font-medium text-primary-600 sm:text-base">{testimonial.role}</p>
									</div>
								</div>

								<p class="text-pretty text-base leading-7 text-primary-700 sm:text-lg sm:leading-8 md:text-xl">
									“{testimonial.paragraph}”
								</p>
							</div>
						</article>
					{/each}
				</div>
			</div>

			<div class="mt-6 flex items-center justify-between gap-4 px-2 sm:px-4">
				<button
					type="button"
					class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary-200 bg-primary-50 text-primary-900 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary-400"
					on:click={prev}
					aria-label="Previous testimonial"
				>
					<svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
					</svg>
				</button>

				<div class="flex flex-1 items-center justify-center gap-2">
					{#each testimonials as testimonial, index}
						<button
							type="button"
							class={`h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-400 ${
								activeIndex === index ? 'w-8 bg-primary-700' : 'w-3 bg-primary-300 hover:bg-primary-500'
							}`}
							on:click={() => goTo(index)}
							aria-label={`Go to testimonial ${index + 1} of ${testimonials.length}`}
							aria-pressed={activeIndex === index}
							></button>
					{/each}
				</div>

				<button
					type="button"
					class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary-200 bg-primary-50 text-primary-900 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary-400"
					on:click={next}
					aria-label="Next testimonial"
				>
					<svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
					</svg>
				</button>
			</div>

			<p class="sr-only" aria-live="polite">
				Testimonial {activeIndex + 1} of {testimonials.length}: {testimonials[activeIndex].name}
			</p>
		</div>
	</div>
</section>
