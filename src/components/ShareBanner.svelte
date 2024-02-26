<script lang="ts">
  import Bubble from "./ui/bubble.svelte";
  import { showing_form } from "../lib/store";
  import GenerationImage from "../components/icons/main-title.svelte";
  import Share from "./Share.svelte";
  export let title: string | undefined;
  export let description: string | undefined;
  // export let image: string | undefined;
  export let nutrition: string | undefined;
  export let protein: string | undefined;
  export let cuisine: string | undefined;

  export let generating = true;
</script>

<div class="shared gap-5 my-8 items-center">
  <div class="right">
    <div class="flex justify-between items-center text-sm sm:text-base">
      <div class="flex gap-1 sm:gap-2">
        <Bubble value={protein} color="red" />
        <Bubble value={nutrition} color="green" />
        <Bubble value={cuisine} color="black" />
      </div>

      <button
        class="p-1.5 px-2 sm:px-6 bg-blue-800 rounded-lg text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-base"
        disabled={generating}
        on:click={() => showing_form.set(!$showing_form)}
      >
        Save Recipe
      </button>
    </div>
    <h2 class="text-sky-800 text-wrap text-2xl sm:text-3xl py-3 font-bold">
      {title}
    </h2>
    <p>{description}</p>
    <Share />
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

    /* .shared img {
      width: 100% !important;
    } */
  }
  /* .shared img {
    object-fit: cover;
  } */

  .shared .right {
    display: flex;
    flex-direction: column;
  }
</style>
