<script lang="ts">
  import MainTitle from "./icons/main-title.svelte";
  import { step } from "../lib/store";

  export let title: string;
  export let description: string;
</script>
<div class="w-full text-center bg-blue-50 p-4 sm:p-8 rounded-lg">
  <h2
    class="text-2xl sm:text-3xl mb-2 font-bold text-sky-900 flex items-center gap-1 sm:gap-2 justify-center"
  >
    <MainTitle class="inline-block w-14" />
    <span>{title}</span>
  </h2>
  <p class="text-left">
    {#if $step === 2}
      <span class="text-yellow-500">Step {$step}:</span>
    {/if}
    {description}
  </p>
</div>
