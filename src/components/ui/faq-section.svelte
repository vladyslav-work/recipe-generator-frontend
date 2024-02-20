<script lang="ts">
    import SubTitle from "../icons/sub-title.svelte";
    export let title: string;
    export let descriptions: string[];
</script>

<section class="my-4">
    <h2 class="text-sky-900 text-2xl sm:text-3xl font-bold gap-3 mb-4 flex items-end">
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
            <p class="text-gray-700 mb-6">{description}</p>
        {/each}
    </div>
</section>
