/**
 * Menu contents for the fullscreen overlay.
 *
 * `page` is the in-page anchor column. It is empty until there are sections to
 * point at — the overlay hides that column entirely rather than showing a
 * heading with nothing under it, so adding entries here is what lights it up.
 *
 * An entry with `soon: true` renders as forthcoming and does not navigate, so
 * planned work stays visible without shipping a dead link.
 */

export const menu = {
	/** @type {{ name: string, href: string }[]} */
	page: [],

	elsewhere: [
		{ name: 'BetterSoundCloud', href: '/bsc' },
		{ name: 'Gallery', href: null, soon: true },
		{ name: 'Periodic Table', href: 'https://ptable.alirezakj.com/', external: true },
		{ name: 'Font Explorer', href: 'https://fontexplorer.net/', external: true },
		{ name: 'GitHub', href: 'https://github.com/AlirezaKJ', external: true },
		{ name: 'LinkedIn', href: 'https://www.linkedin.com/in/alirezakj/', external: true }
	]
};
