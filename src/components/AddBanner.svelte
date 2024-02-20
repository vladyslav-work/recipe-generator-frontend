<script lang="ts">
  import gen_image from "../assets/ai-generating-image.jpg";
  import Share from "./Share.svelte";
  export let title: string;
  export let description: string;
</script>

<div
  class="sm:bg-orange-50 mt-4 flex rounded-none sm:rounded-3xl overflow-hidden flex-col lg:flex-row p-0 sm:p-6 gap-6 bg-opacity-40"
>
  <div class="rounded-xl overflow-hidden aspect-square bg-black/20">
    <picture>
      <source srcset={gen_image} media="(min-width: 768px)" />
      <!-- <source srcset={gen_image_mobile} media="(max-width: 768px)" /> -->
      <img src={gen_image} class="w-full lg:w-[250px]" alt={title} />
    </picture>
  </div>
  <div class="pt-6 w-full flex-1 flex-col justify-between h-full">
    <h1 class="text-2xl sm:text-3xl font-bold text-sky-900 flex items-center gap-2">
      {title}
      <span class="bg-yellow-500 py-0.5 sm:py-1 px-2 sm:px-4 text-sm rounded-2xl text-white"
        >Free Tools</span
      >
    </h1>
    <p class="text-gray-600 mt-2">{description}</p>
    <Share />
  </div>
</div>
