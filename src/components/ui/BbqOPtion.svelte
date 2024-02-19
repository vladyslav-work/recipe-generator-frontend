<script lang="ts">
    import { onMount } from "svelte";
    import { data_store } from "../../lib/store";
    import { bbqStyles } from "../../lib/data";

    export let name: string;
    export let title: string;
    export let description: string;
    export let selected: boolean;
    export let onClick: () => void;
    onMount(() => {
        if (selected) {
            data_store.update(data => {
                return {
                    ...data,
                    bbqStyle: bbqStyles[0].name,
                }
            })
        }
    });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<label
    on:click={onClick}
    class={`${
        selected && " border-blue-500"
    } relative w-full p-2.5 border-2 cursor-pointer rounded-lg bg-transparent`}
>
    <input
        required
        type="radio"
        bind:group={selected}
        {name}
        value={title}
        class="absolute top-2 right-2 -z-10"
    />
    <h2 class="text-lg text-blue-900 font-semibold">{title}</h2>
    {description}
</label>

<style>
    .selected {
        background-color: #8ea5d3;
        border-color: #1351ad;
    }
</style>
