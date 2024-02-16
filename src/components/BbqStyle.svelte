<script lang="ts">
  import type { Variation } from "./../lib/types.ts";
  import BbqOption from "./ui/BbqOPtion.svelte";
  import { variation } from "../lib/store.js";
  export let options: Variation[] = [];

  function handleSelection(value: Variation) {
    variation.update(() => value);
  }
</script>

<form action="" class="py-5 flex gap-4 flex-col lg:flex-row">
  {#each options as option, i}
    <BbqOption
      title={option.title}
      name="bbqStyle"
      description={option.description}
      selected={$variation?.id === option.id}
      onClick={() => handleSelection(option)}
    />
  {/each}
</form>
