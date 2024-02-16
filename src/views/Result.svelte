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
  import { showing_form } from "../lib/store";

  export let params: { [key: string]: string } = {};
  let generating = true;
  let recipe: {
    title: string;
    description: string;
    serving: number;
    image: string;
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
    if (!params.recipeId) {
      push("/");
      return;
    }
    try {
      const response = await axios.get(`${SERVER_URL}/api/${params.recipeId}`);
      const responseData = response.data;

      recipe = {
        title: responseData.recipe.title,
        description: responseData.recipe.description,
        serving: responseData.recipe.serving,
        image: responseData.recipe.image,
        nutrition: responseData.recipe.nutrition,
        protein: responseData.recipe.protein,
        cuisine: responseData.recipe.cuisine,
        readyTime: responseData.recipe.readyTime
      };
      ingredients = responseData.ingredients.map(
        ({ description }: { description: string }) => description
      );
      directions = responseData.directions.map(
        ({ description }: { description: string }) => description
      );
      console.log(recipe, ingredients, directions);
      generating = false;
    } catch (error) {
      console.log(error);
      alert("server error, please refresh the page again");
    }
  });
</script>

<BreadCrumb pathname="result" />
<AiBanner
  title="AI Recipe Generator"
  description="Your Custorm AI Generated Recipe is Ready to be served"
/>
<ShareBanner
  title={generating ? "Generating..." : recipe?.title}
  description={generating ? "Generating..." : recipe?.description}
  image={recipe?.image}
  nutrition={recipe?.nutrition}
  cuisine={recipe?.cuisine}
  protein={recipe?.protein}
  generating={generating}
/>

{#if !generating}
  <TabedResult {ingredients} {directions} servings={recipe?.serving} readyTime={recipe?.readyTime}/>
{/if}

<Auth {generating}/>
