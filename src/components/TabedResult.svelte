<script lang="ts">
  import type { IDirection, IIngredient } from "../lib/types";
  import Ingredients from "./ui/Ingredients.svelte";
  import Directions from "./ui/directions.svelte";

  export let ingredients: string[] = [];
  export let directions: string[] = [];
  export let servings: number | undefined = 0;
  export let readyTime: number | undefined = 0;
  let activeTab = "ingredients";
</script>

<section class="p-4 sm:p-8 border-2 rounded-lg">
  <div class="flex items-center justify-center gap-3">
    <button
      class="px-3 btn font-semibold"
      class:active={activeTab === "ingredients"}
      on:click={() => (activeTab = "ingredients")}
    >
      Ingredients
    </button>
    <button
      class="px-3 btn font-semibold"
      class:active={activeTab === "directions"}
      on:click={() => (activeTab = "directions")}
    >
      Directions
    </button>
  </div>
  <hr class="" />
  <div class="max-w-[700px] mx-auto">
    {#if activeTab === "ingredients"}
      <div class="mt-4">
        <Ingredients {ingredients} {servings} />
      </div>
    {/if}

    {#if activeTab === "directions"}
      <div class="mt-4">
        <Directions directions={directions || []} {readyTime} />
      </div>
    {/if}
  </div>
</section>

<style>
  .active {
    color: #3b82f6;
    border-bottom: 2px solid #3b82f6;
  }

  .btn {
    padding: 10px 20px;
    font-weight: bold;
  }
</style>
