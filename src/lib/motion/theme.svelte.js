import { browser } from '$app/environment';
import { MediaQuery } from 'svelte/reactivity';

/**
 * Light and dark are the same instrument under different light — neither is the
 * real one. This module is the single source of truth for which is active, so
 * CSS and the WebGL light rig can never disagree about it.
 *
 * The pre-paint script in app.html sets `data-theme` before first paint; this
 * picks up from there rather than re-deciding.
 */

const prefersDark = new MediaQuery('prefers-color-scheme: dark');

/** @type {'light' | 'dark' | 'system'} */
let preference = $state('system');

if (browser) {
	try {
		const stored = localStorage.getItem('theme');
		if (stored === 'light' || stored === 'dark') preference = stored;
	} catch {
		// Private browsing and blocked site data both throw here. The system
		// preference is a perfectly good answer.
	}
}

export const theme = {
	get preference() {
		return preference;
	},

	/** Resolved: what the page is actually rendering right now. */
	get isDark() {
		if (preference === 'dark') return true;
		if (preference === 'light') return false;
		return prefersDark.current;
	},

	/** @param {'light' | 'dark' | 'system'} next */
	set(next) {
		preference = next;
		if (!browser) return;
		try {
			if (next === 'system') {
				localStorage.removeItem('theme');
				delete document.documentElement.dataset.theme;
			} else {
				localStorage.setItem('theme', next);
				document.documentElement.dataset.theme = next;
			}
		} catch {
			// Storage refused; the attribute below still governs this session.
			if (next === 'system') delete document.documentElement.dataset.theme;
			else document.documentElement.dataset.theme = next;
		}
	},

	/** Flip to the opposite of what is currently on screen. */
	toggle() {
		this.set(this.isDark ? 'light' : 'dark');
	}
};

/**
 * Read a resolved palette token as an `[r, g, b]` triple in 0–1, for handing
 * CSS colours to WebGL. Going through the computed style means no component
 * ever contains a literal colour, and both schemes stay in one authored source.
 *
 * @param {string} name  A custom property name, e.g. `--sg-background`.
 * @returns {[number, number, number]}
 */
export function readToken(name) {
	if (!browser) return [0, 0, 0];

	const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
	const hex = raw.replace('#', '');
	if (hex.length !== 6) return [0, 0, 0];

	return [
		parseInt(hex.slice(0, 2), 16) / 255,
		parseInt(hex.slice(2, 4), 16) / 255,
		parseInt(hex.slice(4, 6), 16) / 255
	];
}
