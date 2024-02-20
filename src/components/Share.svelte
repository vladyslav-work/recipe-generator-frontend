<script lang="ts">
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

<div class="mt-4 flex gap-1 sm:gap-3 items-center j">
  <span class="uppercase font-bold text-sm sm:text-lg pr-4 text-sky-900 text-nowrap">SHARE ON</span>
  {#each links as item (item.url)}
    <a
      href={item.url}
      target="_blank"
      class="text-sky-500 scale-75 hover:text-sky-600 flex items-center"
    >
      {@html item.icon}
    </a>
  {/each}
</div>