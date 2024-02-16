<script lang="ts">
    import SubTitle from "../icons/sub-title.svelte";
    export let title: string;
    export let descriptions: string[];
</script>

<section class="my-4">
    <h2 class="text-blue-900 text-3xl font-bold flex gap-3 mb-3">
        <!-- svelte-ignore missing-declaration -->
        <div class="inline-block">
            <SubTitle />
        </div>
        <div class="inline-block">
            {title}
        </div>
    </h2>
    <div>
        {#each descriptions as description}
            <p class="text-gray-700 mb-2">{description}</p>
        {/each}
    </div>
</section>
