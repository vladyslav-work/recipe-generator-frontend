<!-- Scroll-up -->

<script lang="ts">
    import { onMount } from "svelte";

    onMount(() => {
        const scrollUp = document.getElementById(
            "scroll-up",
        ) as HTMLButtonElement;

        scrollUp.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });

        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                scrollUp.style.display = "block";
            } else {
                scrollUp.style.display = "none";
            }
        });
    });
</script>

<div class="fixed bottom-16 right-5 z-[900]">
    <button
        class="text-sky-800 bg-white shadow-lg p-2 py-1.5 rounded-full border"
        id="scroll-up"
    >
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="mb-[-35%]"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 15l6-6l6 6"/></svg>
    <div class="text-xs font-bold">
            TOP
        </div>
    </button>
</div>
