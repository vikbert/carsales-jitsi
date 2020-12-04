import { writable } from 'svelte/store';

export const isLoginValid = writable(true);
export const slideIndex = writable(7);
export const infoIndex = writable('empty');
