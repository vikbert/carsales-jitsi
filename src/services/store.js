import { writable } from 'svelte/store';

export const isLoginValid = writable(true);
export const slideIndex = writable(-1);
export const infoIndex = writable('empty');
