<script lang="ts">

    export let directions: string[] = [];
    export let readyTime: number | undefined;
</script>

<section class="my-4">
    <h2 class="mb-3 text-left text-sm sm:text-lg"> <span class="text-sky-900 text-lg sm:text-2xl font-bold">{directions.length} steps</span>&nbsp;&nbsp;&nbsp; Ready in about {readyTime} minutes</h2>
    <ol>
        {#each directions as direction}
            <li class="text-gray-700 mb-2 text-sm sm:text-lg">{direction}</li>
        {/each}
    </ol>
</section>

<style>
    ol {
        list-style: none;
        counter-reset: my-awesome-counter;
    }

    li::before {
        counter-increment: my-awesome-counter;
        content: counter(my-awesome-counter) ". ";
        font-weight: bold;
        color: #3b82f6;
        margin-right: 20px;
    }
</style>