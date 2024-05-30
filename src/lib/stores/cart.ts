import { writable } from 'svelte/store';

export const cart: any = writable(<any[]>([]));
export const cartTotal: any = writable(0);
export const quantity: any = writable(<{ [key: string]: number}>({}));
