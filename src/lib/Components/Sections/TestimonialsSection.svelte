<script>
	import { onDestroy, onMount } from 'svelte';


	const testimonials = [
		// {
		// 	image: '/assets/images/Portrait%20Cropped.jpg',
		// 	name: 'Tawab Frahmand',
		// 	role: 'CEO, Lenexa Medical',
		// 	paragraph:
		// 		'Working with Alireza was smooth from start to finish. He translated our ideas into a clean, modern website and kept communication clear through every phase of the project, from early planning to final launch. What stood out most was how quickly he understood both the visual direction and business goals, then turned feedback into practical improvements without delay. The final result looked polished, loaded quickly across devices, and gave our team a much stronger digital presence than we had before.'
		// },
		{
			image: '/assets/images/pfp/ajit.jpg',
			name: 'Ajit Ravindran',
			role: 'Co-Founder and CEO at Lenexa Medical',
			paragraph:
				"We engaged Ali to completely rebuild the Lenexa Medical website, and the outcome exceeded our expectations. He handled everything: end-to-end architecture, CMS integration, animations, third-party feeds, and responsive design all in a clean scalable codebase using SvelteKit and TailwindCSS which our software team is familiar with. He communicated clearly throughout, respected our timelines, and was invested in getting the result right. I'd recommend him without hesitation for any serious web project."
		},
		{
			image: '/assets/images/pfp/reza.jpg',
			name: 'Reza Hoseinnezhad',
			role: 'Professor of Autonomous Systems at RMIT University',
			paragraph:
				"I've had the privilege of watching Ali grow from a curious student into a skilled and self-driven developer. What sets him apart is his ability to bridge disciplines. He's not just technically sharp, but approaches problems with the kind of analytical thinking I expect from postgraduate researchers. He independently pursued certifications in both web development and cybersecurity, diving deep into areas like network security, cloud infrastructure, and penetration testing using his own initiative. Ali builds, experiments, and iterates. Any team that brings him on board is getting someone who will go beyond the job description."
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
				class="overflow-hidden"
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
							class="w-full flex-shrink-0"
							aria-hidden={activeIndex !== index}
						>
							<div class="mx-auto">
								<div class="mb-6 flex items-center gap-4">
									<img
										src={testimonial.image}
										alt={testimonial.name}
										loading="lazy"
										class="h-16 w-16 rounded-full border border-primary-200 object-cover shadow-sm sm:h-24 sm:w-24"
									/>
									<div>
										<h3 class="text-2xl font-bold text-primary-950 sm:text-3xl">{testimonial.name}</h3>
										<p class="text-base font-medium text-primary-600 sm:text-lg">{testimonial.role}</p>
									</div>
								</div>

								<p class="text-pretty text-base leading-7 text-primary-700 sm:text-lg sm:leading-8 md:text-xl">
									“ {testimonial.paragraph} ”
								</p>
							</div>
						</article>
					{/each}
				</div>
			</div>

			<div class="mt-6 flex items-center justify-between gap-4 px-2 sm:px-4">
				<button
					type="button"
					class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary-200 bg-primary-50 text-primary-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-100 hover:text-white hover:border-primary-900 transition-all duration-300"
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
					class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary-200 bg-primary-50 text-primary-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-100 hover:text-white hover:border-primary-900 transition-all duration-300"
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
