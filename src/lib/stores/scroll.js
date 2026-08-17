import { get, readable, writable } from 'svelte/store';
import { browser } from '$app/environment';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

/**
 * Live scroll state, published by the root layout (from Lenis, or from the native
 * scroll event when Lenis is skipped). Read `$scrollState` instead of adding a
 * scroll listener per component.
 */
export const scrollState = writable({
    scroll: 0,
    limit: 0,
    velocity: 0,
    direction: 0,
    progress: 0
});

/**
 * The single Lenis instance. `null` during SSR, before mount, and for the whole
 * session under `prefers-reduced-motion: reduce` — go through the helpers below
 * rather than assuming it exists.
 */
export const lenisStore = writable(null);

/** Live `prefers-reduced-motion: reduce`. Single source of truth for motion gates. */
export const reducedMotion = readable(false, (set) => {
    if (!browser) return;
    const query = window.matchMedia(REDUCED_MOTION_QUERY);
    set(query.matches);
    const onChange = (event) => set(event.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
});

/** One-shot read, for setup code that runs once (the layout's onMount). */
export function prefersReducedMotion() {
    return browser && window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

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
 */
export function scrollTo(target, options = {}) {
    const lenis = get(lenisStore);
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
    const lenis = get(lenisStore);
    if (lenis) {
        lenis.stop();
        return;
    }
    if (browser) document.documentElement.style.overflow = 'clip';
}

export function unlockScroll() {
    const lenis = get(lenisStore);
    if (lenis) {
        lenis.start();
        return;
    }
    if (browser) document.documentElement.style.overflow = '';
}
