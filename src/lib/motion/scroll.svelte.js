import { browser } from '$app/environment';
import { MediaQuery } from 'svelte/reactivity';

/** Idle jitter reads as a direction flip; below this the page counts as still. */
const IDLE_VELOCITY = 0.1;

/**
 * Live scroll state, published by the root layout (from Lenis, or from the native
 * scroll event when Lenis is skipped). Read this instead of adding a scroll
 * listener per component.
 */
export const scrollState = $state({
	scroll: 0,
	limit: 0,
	velocity: 0,
	direction: 0,
	progress: 0
});

/** Live `prefers-reduced-motion: reduce`. Single source of truth for motion gates. */
export const reducedMotion = new MediaQuery('prefers-reduced-motion: reduce');

/**
 * The single Lenis instance. `null` during SSR, before mount, and for as long as
 * the user prefers reduced motion — go through the helpers below rather than
 * assuming it exists.
 */
let lenis = null;

/** @param {import('lenis').default | null} instance */
export function setLenis(instance) {
	lenis = instance;
}

export function getLenis() {
	return lenis;
}

/** @param {{ scroll: number, limit: number, velocity: number, direction: number, progress: number }} event */
export function publishScroll({ scroll, limit, velocity, direction, progress }) {
	scrollState.scroll = scroll;
	scrollState.limit = limit;
	scrollState.velocity = velocity;
	scrollState.direction = Math.abs(velocity) < IDLE_VELOCITY ? 0 : direction;
	scrollState.progress = progress;
}

/**
 * Feed `scrollState` from the native scroll event, for when Lenis is skipped.
 * Returns its own teardown.
 */
export function watchNativeScroll() {
	let previous = window.scrollY;

	const update = () => {
		const scroll = window.scrollY;
		const limit = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
		const velocity = scroll - previous;
		previous = scroll;
		publishScroll({
			scroll,
			limit,
			velocity,
			direction: Math.sign(velocity),
			progress: limit > 0 ? scroll / limit : 0
		});
	};

	update();
	window.addEventListener('scroll', update, { passive: true });
	window.addEventListener('resize', update, { passive: true });

	return () => {
		window.removeEventListener('scroll', update);
		window.removeEventListener('resize', update);
	};
}

/**
 * @param {number | string | HTMLElement} target
 * @returns {number | null}
 */
function resolveTop(target) {
	if (typeof target === 'number') return target;
	const element = typeof target === 'string' ? document.querySelector(target) : target;
	if (!element) return null;
	return element.getBoundingClientRect().top + window.scrollY;
}

/**
 * Programmatic scrolling. Uses Lenis when it owns the page; falls back to an
 * instant native jump when it doesn't (reduced motion), which is the correct
 * behaviour there anyway. Never call `window.scrollTo` directly — it fights Lenis.
 *
 * @param {number | string | HTMLElement} target
 * @param {Record<string, unknown> & { offset?: number }} [options]
 */
export function scrollTo(target, options = {}) {
	if (lenis) {
		lenis.scrollTo(target, options);
		return;
	}
	if (!browser) return;
	const top = resolveTop(target);
	if (top === null) return;
	window.scrollTo({ top: top + (options.offset ?? 0), behavior: 'auto' });
}

/** Lock page scroll (modals, lightboxes). Mirrors Lenis' own stopped state. */
export function lockScroll() {
	if (lenis) {
		lenis.stop();
		return;
	}
	if (browser) document.documentElement.style.overflow = 'clip';
}

export function unlockScroll() {
	if (lenis) {
		lenis.start();
		return;
	}
	if (browser) document.documentElement.style.overflow = '';
}
