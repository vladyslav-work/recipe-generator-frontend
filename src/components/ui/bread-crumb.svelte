<script lang="ts">
  import { step } from "../../lib/store";
</script>

<div class="flex gap-2 text-gray-500 text-xs sm:text-sm py-4">
  <a href="/#/" class="hover:text-sky-900 underline decoration-yellow-600">Home</a>
  <span>></span>
  {#if $step !== 1}
  <a href="/#/" class="hover:text-sky-900 underline decoration-yellow-600">AI Recipe Generator</a>
    <span>></span>
    <span class="hover:text-sky-900">
      {#if $step === 2}
        Step 2: Choose a Recipe
      {:else if $step === 3}
        Step 3: Save your recipe
      {/if}
    </span>
  {:else}
  <span class="hover:text-sky-900">AI Recipe Generator</span>
  {/if}
</div>
