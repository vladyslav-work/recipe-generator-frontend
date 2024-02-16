<script lang="ts">
    import type { IDirection } from "../../lib/types";

    export let directions: IDirection[] = [];
</script>

<section class="my-4">
    <h2 class="mb-3 text-center"> <span class="text-blue-900 text-lg font-bold">{directions.length} steps</span> Ready in about 40 minutes</h2>
    <ol>
        {#each directions as direction}
            <li class="text-gray-700 mb-2">{direction.description}</li>
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