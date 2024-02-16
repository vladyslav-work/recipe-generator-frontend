<script lang="ts" >
    export let pathname: string
</script>

<div class="flex gap-2 text-gray-500 text-sm py-4">
    <a href="/" class="hover:text-blue-900">Home</a>
    <span>/</span>
    <a href="/#/{pathname}" class="hover:text-blue-900">
        {#if pathname == "/"}
            Recipe Generator
        {/if}
        {#if pathname == "history"}
            Step 2: Choose a Recipe
        {/if}
        {#if pathname == "result"}
            Step 3: Save your recipe
        {/if}
    </a>
</div>