<script lang="ts">
  import AiBanner from "../components/AIBanner.svelte";
  import ShareBanner from "../components/ShareBanner.svelte";
  import TabedResult from "../components/TabedResult.svelte";
  import { _ingredients, _directions } from "../lib/data";
  import Auth from "../components/Auth.svelte";
  import BreadCrumb from "../components/ui/bread-crumb.svelte";
  import { data_store, variation, recipe, generating } from "../lib/store";

  let ingredients: string[] = [];
  let directions: string[] = [];

</script>

<BreadCrumb />
<AiBanner
  title="AI Recipe Generator"
  description="Your Custorm AI Generated Recipe is Ready to be served - Bon appétit!"
/>
<ShareBanner
  title={!$recipe ? $variation?.title : $recipe?.title}
  description={!$recipe ? $variation?.description : $recipe?.description}
  nutrition={$data_store.nutrition}
  cuisine={$data_store.cuisine}
  protein={$data_store.protein}
  generating={!$recipe}
/>

<TabedResult
  ingredients={ingredients}
  directions={directions}
  servings={$recipe?.serving}
  readyTime={$recipe?.readyTime}
  generating={!$recipe}
/>

<Auth generating={!$recipe} />
