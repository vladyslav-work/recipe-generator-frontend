<script lang="ts">
    export let options: string[] = [];
    export let name: string;
</script>

<!-- Custorm select -->

<div class="relative">
    <select placeholder="Select a cuisine..." {name} class="block ddd appearance-none w-full bg-white/25 border hover:border-gray-500 px-4 py-2.5 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
        <option value="" disabled selected>Select a cuisine...</option>
        {#each options as option}
            <option class="p-2 m-3 appearance-none">{option}</option>
        {/each}
    </select>
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9 11l3-3 3 3 1-1-4-4-4 4 1 1z"/>
        </svg>
    </div>
</div>




<style>
    .ddd {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;        
    }
</style>