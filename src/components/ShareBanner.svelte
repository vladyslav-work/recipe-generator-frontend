<script lang="ts">
  import Bubble from "./ui/bubble.svelte";
  import { SERVER_URL } from "../api";
  import { showing_form } from "../lib/store";
  import GenerationImage from "../components/icons/main-title.svelte";
  import Share from "./Share.svelte";
  export let title: string | undefined;
  export let description: string | undefined;
  export let image: string | undefined;
  export let nutrition: string | undefined;
  export let protein: string | undefined;
  export let cuisine: string | undefined;

  export let generating = true;

  let links = [
    {
      name: "facebook",
      url: `https://web.facebook.com/sharer.php?u=${location.href}`,
      icon: `<img width="48" height="48" src="https://img.icons8.com/fluency/48/facebook-new.png" alt="facebook-new"/>`,
    },
    {
      name: "twitter",
      url: `https://twitter.com/intent/tweet?text=${location.href}`,
      icon: `<img width="48" height="48" src="https://img.icons8.com/fluency/48/twitter.png" alt="twitter"/>`,
    },
    {
      name: "pinterest",
      url:
        "http://pinterest.com/pin/create/button/?url=" +
        encodeURIComponent(document.URL) +
        "&description=" +
        encodeURIComponent(document.title),
      icon: `<img width="48" height="48" src="https://img.icons8.com/color/48/pinterest.png" alt="pinterest"/>`,
    },
    {
      name: "whatsapp",
      url:
        "whatsapp://send?text=" +
        encodeURIComponent(document.title) +
        "%20 " +
        encodeURIComponent(document.URL),
      icon: `<img width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1"/>`,
    },
    {
      name: "link",
      url: "#",
      icon: `<div class="bg-sky-900 rounded-full p-1"><img width="32" height="32" src="/icons8-link-64.png" alt="link"/></div>`,
    },
  ];
</script>

<div class="shared grid gap-5 my-8 items-center">
  <div
    class="left overflow-hidden bg-slate-100 rounded-lg flex-1 flex justify-center items-center h-fit"
  >
    {#if !generating}
      <img
        src={`${SERVER_URL}${image}`}
        class="w-full h-auto"
        alt={title}
      />
    {:else}
      <div class="flex items-center justify-center flex-col rounded-md min-h-56">
        <GenerationImage />
        Generating...
      </div>
    {/if}
  </div>
  <div class="right">
    <div class="flex justify-between items-center text-sm sm:text-base">
      <div class="flex gap-1 sm:gap-2">
        <Bubble value={protein} color="red" />
        <Bubble value={nutrition} color="green" />
        <Bubble value={cuisine} color="black" />
      </div>

      <button
        class="p-1.5 px-2 sm:px-6 bg-blue-800 rounded-lg text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-base"
        disabled={generating}
        on:click={() => showing_form.set(!$showing_form)}
      >
        Save Recipe
      </button>
    </div>
    <h2 class="text-sky-800 text-wrap text-2xl sm:text-3xl py-3 font-bold">{title}</h2>
    <p>{description}</p>
    <Share />
  </div>
</div>

<style>
  .shared {
    grid-template-columns: 250px 1fr;
  }

  @media (max-width: 768px) {
    .shared {
      grid-template-columns: 1fr !important;
    }

    .shared img {
      width: 100% !important;
    }
  }
  .shared img {
    object-fit: cover;
  }

  .shared .right {
    display: flex;
    flex-direction: column;
  }
</style>
