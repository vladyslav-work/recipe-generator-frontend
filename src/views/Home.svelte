<script>
  import AddBanner from "../components/AddBanner.svelte";
  import FaQs from "../components/FAQs.svelte";
  import BreadCrumb from "../components/ui/bread-crumb.svelte";
  import Selector from "../components/Selector.svelte";
  // import { location } from "svelte-spa-router";

  
</script>

<div>
  <BreadCrumb/>

  <h1 class="bg-yellow-400 text-2xl p-3 rounded text-center">Sorry, I have been blocked by my upwork account. My gmail address is <a href="mailto:vladyslav.social@gmail.com" class="text-blue-600">vladyslav.social@gmail.com</a> , please contact me via gmail. Thank you</h1>

  <AddBanner
    title="Recipe Generator"
    description="Unleash your inner chef with our FREE AI-powered recipe generator! Save your profile or profile or effortlessly add them to tour weekly meal plan or send the ingredients straight to tour grocery list!"
  />
  <Selector />

  <FaQs />
</div>
