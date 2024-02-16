<script lang="ts">
  import Bubble from "./ui/bubble.svelte";
  import { SERVER_URL } from "../api";
  import { showing_form } from "../lib/store";
  export let title: string | undefined;
  export let description: string | undefined;
  export let image: string | undefined;
  export let nutrition: string | undefined;
  export let protein: string | undefined;
  export let cuisine: string | undefined;

  export let generating = true;
</script>

<div class="shared grid gap-5 my-8">
  <div
    class="left overflow-hidden bg-slate-100 rounded-lg flex-1 min-h-[200px] flex justify-center items-center"
  >
    {#if !generating}
      <picture>
        <source srcset={`${SERVER_URL}${image}`} media="(min-width: 768px)" />
        <source srcset={`${SERVER_URL}${image}`} media="(max-width: 768px)" />
        <img
          src={`${SERVER_URL}${image}`}
          class="w-full sm:w-[250px]"
          alt={title}
        />
      </picture>
    {/if}
    {#if generating}
      Generating ...
    {/if}
  </div>
  <div class="right">
    <div class="flex justify-between items-center">
      <div class="flex gap-2">
        {#if !generating}
          <Bubble value={protein} color="red" />
          <Bubble value={nutrition} color="green" />
          <Bubble value={cuisine} color="black" />
        {/if}
      </div>

      <button
        class=" p-1.5 px-6 bg-blue-800 rounded-lg text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={generating}
        on:click={() => showing_form.set(!$showing_form)}
      >
        Save Recipe
      </button>
    </div>
    <h2 class="text-blue-800 text-wrap text-3xl py-3 font-bold">{title}</h2>
    <div>
      <p>{description}</p>
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
