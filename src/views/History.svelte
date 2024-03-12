<script lang="ts">
  import { push } from "svelte-spa-router";
  import AiBanner from "../components/AIBanner.svelte";
  import BbqStyle from "../components/BbqStyle.svelte";
  import BreadCrumb from "../components/ui/bread-crumb.svelte";
  import axios from "axios";
  import { SERVER_URL } from "../api";
  import subtitleIcon from "../assets/sub-title-icon.svg";
  import { recipe, step, variation } from "../lib/store";
  import { data_store } from "../lib/store";

  let wait = false;

  const handleCreate = async () => {
    if (!$variation) return;
    wait = true;
    try {
      step.update(() => 3);
      const response = await axios.post(`${SERVER_URL}/api/generate`, {
        protein: $data_store.protein,
        nutrition: $data_store.nutrition,
        cuisine: $data_store.cuisine,
        title: $variation.title,
        description: $variation.description,
      });

      recipe.update(() => ({
        title: response.data.title,
        description: response.data.description,
        serving: response.data.serving,
        nutrition: response.data.nutrition,
        protein: response.data.protein,
        cuisine: response.data.cuisine,
        readyTime: response.data.readyTime,
        ingredients: response.data.ingredients.map(
          (ingredient: {
            quantity?: string;
            name: string;
            preparationMethod?: string;
          }) =>
            `${ingredient.quantity && ingredient.quantity.toLowerCase() !== "none" ? ingredient.quantity : ""} <strong>${ingredient.name}</strong> <em>${ingredient.preparationMethod && ingredient.preparationMethod.toLowerCase() !== "none" ? ingredient.preparationMethod : ""}</em>`
        ),
        directions: response.data.directions.map(
          (description : string ) => description
        ),
      }));
      console.log("select", response.data);
    } catch (error) {
      console.log(error);
      alert("server error, please refresh the page again");
    }
    wait = false;
  };
</script>

<BreadCrumb />
<div class="pt-5">
  <AiBanner
    title={`AI Generated Recipe`}
    description={`Pick your favorite Bbq style ${$data_store.nutrition} ${$data_store.protein} recipe from the list of AI generated options below. We will provide you with the ingredients and directions to cook the recipe.`}
  />
  <div class="p-4 sm:p-8 border rounded-lg mt-8">
    <h2
      class="text-sky-900 font-bold text-2xl sm:text-3xl flex items-center gap-3"
    >
      <img src={subtitleIcon} alt="make" class="inline" />
      {`${$data_store.protein} & ${$data_store.nutrition} & ${$data_store.cuisine} Recipes:`}
    </h2>
    <BbqStyle options={$data_store.variations || []} />

    <div class="flex mx-auto">
      <button
        class={`
        mx-auto
        px-10 py-2
        rounded
        text-white
        transition
        duration-300
        ease-in-out
        w-full
        sm:w-fit
        ${wait ? "bg-blue-300" : "bg-blue-900"}
    `}
        on:click={handleCreate}
        disabled={wait}
      >
        Create Custom Recipe
      </button>
    </div>
  </div>
</div>
