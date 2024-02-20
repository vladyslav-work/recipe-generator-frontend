import { writable } from "svelte/store";
import type { Variation } from "./types";

type Store = {
    [key: string]: any;
};


export const data_store = writable<Store>({
});

export const variation = writable<Variation | null>(null)

export const is_all_selected = writable<boolean | null>(null);

export const generating = writable<boolean>(true)

export const step = writable<number>(1)

export const recipeId = writable<string | null>(null)

export const variations = writable<Variation[]>([]) 

export const user_email = writable<string | null>(null)

export const showing_form = writable<boolean>(false)