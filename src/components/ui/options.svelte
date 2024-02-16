<script lang="ts">
  import Option from "./option.svelte";

  let selectedOption = "";
  export let options: { name: string; icon: string }[] = [];
  export let name: string;

  function handleSelection(value: string) {
    selectedOption = value;
  }
</script>

<div class="_auto-grid gap-3 ">
  {#each options as option}
    <Option
      value={option.name}
      icon={option.icon}
      {name}
      selected={selectedOption === option.name}
      onSelection={handleSelection}
    />
  {/each}
</div>

<style>
  ._auto-grid {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
    /* //flex items-center justify-between gap-3 flex-wrap lg:flex-nowrap */
  }

  @media (max-width: 768px) {
    ._auto-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
  }
</style>
