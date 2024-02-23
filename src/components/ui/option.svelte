<script lang="ts">
    export let value: string;
    export let selected: boolean = false;
    export let icon: string;
    export let onSelection: (value: string) => void;
    export let name: string;

    console.log(selected);
    
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<label
    on:click={() => {
        onSelection(value)
        }}
    class={`${
        selected && "bg-blue-100 border-blue-500"
    } relative sm:min-w-fit p-2.5 flex-1 flex gap-2 items-center justify-center border-2 cursor-pointer rounded-lg bg-transparent`}
>
    <input
        required
        type="radio"
        checked={selected}
        {value}
        {name}
        class="absolute top-2 right-2 -z-10"
    />
    <div class="min-w-28 flex gap-4">
        <div>
            {@html icon}
        </div>
        <div>
            {value}
        </div>
    </div>
</label>
