<script>
    import { generating, showing_form } from "../lib/store";

// @ts-nocheck

    import EmailAuth from "./EmailAuth.svelte";

    function togleShowingForm() {

        if ($generating) {
            return;
        }
        showing_form.set(!$showing_form);
    }
</script>

{#if !$showing_form}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
   
        <div class="flex items-center justify-center mt-3">
            <button class:generating={$generating} class="mx-auto bg-blue-900 w-full sm:w-fit lg:px-20 p-3 rounded-lg text-white " on:click={() => {togleShowingForm()}}> Save Recipe</button>
        </div>
{/if}

{#if $showing_form}
        <p class="py-3"></p>
    <EmailAuth />
{/if}



<style>
    .generating {
        background-color: #8ea5d3;
        border-color: #1351ad;
    }
</style>