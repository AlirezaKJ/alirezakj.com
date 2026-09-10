import { browser } from '$app/environment';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registered once, at app level, rather than in every component that animates.
// ScrollSmoother ships in this package too — it must never be registered here,
// because Lenis already owns scroll and the two fight over the same input.
if (browser) {
	gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
