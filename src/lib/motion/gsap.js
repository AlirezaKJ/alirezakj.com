import { browser } from '$app/environment';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registered once, at app level, rather than in every component that animates.
if (browser) {
	gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
