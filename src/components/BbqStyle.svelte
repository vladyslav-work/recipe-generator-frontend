<script lang="ts">
    import { bbqStyles } from "../lib/data";
    import { data_store } from "../lib/store";
    import BbqOption from "./ui/BbqOPtion.svelte";
    export let options: { name: string; description: string }[] = [];
    
    let selectedOption = options[0].name;
    function handleSelection(value: string) {
        selectedOption = value;
    }

    function handleChange(event: Event) {
        const form = new FormData(document.querySelector("form") as HTMLFormElement);
        const bbqStyle = form.get("bbqStyle");
        data_store.update((data) => {
            return {
                ...data,
                bbqStyle: bbqStyle as string,
            };
        });
    }
</script>

<form
    action=""
    on:change={handleChange}
    class="py-5 flex gap-4 flex-col lg:flex-row"
>
    {#each options as option, i}
        <BbqOption
            title={option.name}
            name="bbqStyle"
            description={option.description}
            selected={selectedOption === option.name}
            onClick={() => handleSelection(option.name)}
        />
    {/each}
</form>
