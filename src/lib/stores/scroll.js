import { writable } from 'svelte/store';

export const scrollState = writable({
    scroll: 0,
    limit: 0,
    velocity: 0,
    direction: 0,
    progress: 0
});

export const lenisStore = writable(null);
