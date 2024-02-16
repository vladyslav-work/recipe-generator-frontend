import { writable } from "svelte/store";

type Store = {
    [key: string]: any;
};


export const data_store = writable<Store>({
});

export const is_all_selected = writable<boolean | null>(null);

export const generating = writable<boolean>(true)

export const user_email = writable<string | null>(null)

export const showing_form = writable<boolean>(false)