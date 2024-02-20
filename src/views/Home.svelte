<script>
  import AddBanner from "../components/AddBanner.svelte";
  import FaQs from "../components/FAQs.svelte";
  import BreadCrumb from "../components/ui/bread-crumb.svelte";
  import Selector from "../components/Selector.svelte";
  // import { location } from "svelte-spa-router";

  
</script>

<div>
  <BreadCrumb/>
  <AddBanner
    title="Recipe Generator"
    description="Unleash your inner chef with our FREE AI-powered recipe generator! Save your profile or profile or effortlessly add them to tour weekly meal plan or send the ingredients straight to tour grocery list!"
  />
  <Selector />

  <FaQs />
</div>
