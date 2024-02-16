<script lang="ts">
    import MainTitle from "./icons/main-title.svelte";

    export let title: string;
    export let description: string;
</script>

<div class="py-5"></div>

<div class="w-full text-center bg-blue-200 p-8 rounded-lg">
    <h2 class="text-3xl mb-2 font-bold text-blue-900">
        <MainTitle class="inline-block w-14" />
        {title}</h2>
    <p>{description}</p>
</div>
