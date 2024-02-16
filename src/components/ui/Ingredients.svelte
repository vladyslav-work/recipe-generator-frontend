<script lang="ts">
  export let ingredients: string[] = [];
  export let servings: number | undefined;
</script>

<section class="my-4">
  <h2 class="text-center mb-4">
    <span class="text-blue-900 text-lg font-bold mb-3">
      {servings}
      servings
    </span>
    with {ingredients.length} Ingredients
  </h2>
  <ul class="ingredients">
    {#each ingredients as ingredient}
      <li class="text-gray-700 ml-6 text-lg">{@html ingredient}</li>
    {/each}
  </ul>
</section>

<style>
  .ingredients {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    grid-auto-flow: row;
    list-style: circle;
  }

  @media (max-width: 768px) {
    .ingredients {
      grid-template-columns: 1fr;
    }
  }

  .ingredients li::marker {
    color: blue;
  }
</style>
