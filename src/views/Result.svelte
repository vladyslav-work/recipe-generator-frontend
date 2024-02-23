<script lang="ts">
  import AiBanner from "../components/AIBanner.svelte";
  import ShareBanner from "../components/ShareBanner.svelte";
  import TabedResult from "../components/TabedResult.svelte";
  import { _ingredients, _directions } from "../lib/data";
  import { onMount } from "svelte";
  import Auth from "../components/Auth.svelte";
  import BreadCrumb from "../components/ui/bread-crumb.svelte";
  import { push } from "svelte-spa-router";
  import axios from "axios";
  import { SERVER_URL } from "../api";
  import { data_store, showing_form, step, variation } from "../lib/store";

  let generating = true;
  let recipe: {
    title: string;
    description: string;
    serving: number;
    image: string | undefined;
    nutrition: string;
    protein: string;
    cuisine: string;
    readyTime: number;
  };
  let ingredients: string[] = [];
  let directions: string[] = [];

  onMount(async () => {
    showing_form.set(false);
    generating = true;
    const recipeId = $variation?.recipe;
    if (!recipeId) {
      step.update(() => 1);
      return;
    }
    try {
      let response = await axios.get(`${SERVER_URL}/api/${recipeId}`);
      const responseData = response.data;

      recipe = {
        title: responseData.recipe.title,
        description: responseData.recipe.description,
        serving: responseData.recipe.serving,
        nutrition: responseData.recipe.nutrition,
        image: undefined,
        protein: responseData.recipe.protein,
        cuisine: responseData.recipe.cuisine,
        readyTime: responseData.recipe.readyTime,
      };
      ingredients = responseData.ingredients.map(
        ({ description }: { description: string }) => description
      );
      directions = responseData.directions.map(
        ({ description }: { description: string }) => description
      );
      console.log(recipe, ingredients, directions);
      generating = false;

      response = await axios.get(`${SERVER_URL}/api/${recipeId}/image`);
      const image = response.data;
      recipe.image = image;
    } catch (error: any) {
      console.log(error);
      alert(
        error.response?.data?.message ||
          "server error, please refresh the page again"
      );
    }
  });
</script>

<BreadCrumb />
<AiBanner
  title="AI Recipe Generator"
  description="Your Custorm AI Generated Recipe is Ready to be served - Bon appétit!"
/>
<ShareBanner
  title={generating ? $variation?.title : recipe?.title}
  description={generating ? $variation?.description : recipe?.description}
  nutrition={$data_store.nutrition}
  cuisine={$data_store.cuisine}
  protein={$data_store.protein}
  {generating}
/>

{#if !generating}
  <TabedResult
    {ingredients}
    {directions}
    servings={recipe?.serving}
    readyTime={recipe?.readyTime}
  />
{/if}

<Auth {generating} />
