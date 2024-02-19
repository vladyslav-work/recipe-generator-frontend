<script>
  import AddBanner from "../components/AddBanner.svelte";
  import FaQs from "../components/FAQs.svelte";
  import BreadCrumb from "../components/ui/bread-crumb.svelte";
  import Selector from "../components/Selector.svelte";
  // import { location } from "svelte-spa-router";

  let social_links = [
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

<div>
  <BreadCrumb pathname="/" />
  <AddBanner
    title="Recipe Generator"
    description="Unleash your inner chef with our FREE AI-powered recipe generator! Save your profile or profile or effortlessly add them to tour weekly meal plan or send the ingredients straight to tour grocery list!"
    link={social_links}
  />
  <Selector />

  <FaQs />
</div>
