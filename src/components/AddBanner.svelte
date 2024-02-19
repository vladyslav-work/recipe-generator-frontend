<script lang="ts">
  import gen_image from "../assets/ai-generating-image.jpg";

  type Link = {
    name: string;
    url: string;
    icon: string;
  };
  export let title: string;
  export let description: string;
  export let link: Link[];
</script>

<div
  class="bg-orange-50 mt-4 flex rounded-3xl overflow-hidden flex-col lg:flex-row"
>
  <div class="rounded-xl overflow-hidden m-6 aspect-square bg-black/20">
    <picture>
      <source srcset={gen_image} media="(min-width: 768px)" />
      <!-- <source srcset={gen_image_mobile} media="(max-width: 768px)" /> -->
      <img src={gen_image} class="w-full sm:w-[250px]" alt={title} />
    </picture>
  </div>
  <div class="p-6 pt-12 w-full flex-1 flex-col justify-between h-full">
    <h1 class="text-3xl font-bold text-sky-900 flex items-center gap-2">
      {title}
      <span class="bg-yellow-500 py-1 px-4 text-sm rounded-2xl text-white"
        >Free Tools</span
      >
    </h1>
    <p class="text-gray-600 mt-2">{description}</p>

    <div class="mt-4 flex gap-3 items-center j">
      <span class="uppercase font-bold text-lg pr-4 text-sky-900">SHARE ON</span>
      {#each link as item (item.url)}
        <a
          href={item.url}
          target="_blank"
          class="text-blue-500 scale-75 hover:text-blue-600 flex items-center"
        >
          {@html item.icon}
        </a>
      {/each}
    </div>
  </div>
</div>
