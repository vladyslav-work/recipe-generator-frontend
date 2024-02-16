<script lang="ts">
    import { generating, showing_form } from "../lib/store";
    import Buble from "./ui/buble.svelte";
    import gen_image from "../assets/ai-generating-image.jpg";
    import gen_image_mobile from "../assets/ai-generating-image-mobile.jpg";

    export let title: string;
    export let descriptions: string[];
</script>

<div class="shared grid gap-5 my-8">
    <div
        class="left overflow-hidden bg-slate-100 rounded-lg flex-1 min-h-[200px] flex justify-center items-center"
    >
        {#if !$generating}
            <picture>
                <source srcset={gen_image} media="(min-width: 768px)" />
                <source srcset={gen_image_mobile} media="(max-width: 768px)" />
                <img src={gen_image} class="w-full sm:w-[250px]" alt={title} />
            </picture>
        {/if}
        {#if $generating}
            Generating ...
        {/if}
    </div>
    <div class="right">
        <div class="flex justify-between items-center">
            <div class="flex gap-2">
                <Buble value="Fish" color="red" />
                <Buble value="BBQ" color="green" />
                <Buble value="Milk" color="black" />
            </div>

            <button
                class=" p-1.5 px-6 bg-blue-800 rounded-lg text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={$generating}
                on:click={() => showing_form.set(!$showing_form)}
            >
                Save Recipe
            </button>
        </div>
        <h2 class="text-blue-800 text-wrap text-3xl py-3 font-bold">{title}</h2>
        <div>
            {#each descriptions as description}
                <p>{description}</p>
            {/each}
        </div>
    </div>
</div>

<style>
    .shared {
        grid-template-columns: 250px 1fr;
    }

    @media (max-width: 768px) {
        .shared {
            grid-template-columns: 1fr !important;
        }

        .shared img {
            width: 100% !important;
        }
    }
    .shared img {
        object-fit: cover;
    }

    .shared .right {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>
