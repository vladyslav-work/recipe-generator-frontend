<script lang="ts">
  import { push } from "svelte-spa-router";
  import AiBanner from "../components/AIBanner.svelte";
  import BbqStyle from "../components/BbqStyle.svelte";
  import BreadCrumb from "../components/ui/bread-crumb.svelte";
  import { onMount } from "svelte";
  import axios, { type AxiosResponse } from "axios";
  import { SERVER_URL } from "../api";
  import { type Variation } from "../lib/types";
  import { variation } from "../lib/store";

  export let params: { [key: string]: string } = {};

  let variations: Variation[] = [];
  let wait = false

  onMount(async () => {
    if (!params.recipeId) {
      push("/");
      return;
    }
    try {
      const response = await axios.get(
        `${SERVER_URL}/api/variations/${params.recipeId}`
      );
      variations = response.data.map(
        ({
          id,
          recipe,
          title,
          description,
        }: {
          id: number;
          recipe: string;
          title: string;
          description: string;
        }) => ({
          id,
          recipe,
          title,
          description,
        })
      );
      console.log(variations);
    } catch (error) {
      console.log(error);
      alert("server error, please refresh the page again");
    }
  });


  const handleCreate = async () => {
    console.log("create", variation);
    
    if (!variation) return;
    console.log("create", variation);
    wait = true
    try {
      const response = await axios.post(`${SERVER_URL}/api/select`, {
        recipeId: $variation?.recipe,
        variationId: $variation?.id,
      });
      console.log('select', response.data);
      
      push(`/result/${$variation?.recipe}`);
    } catch (error) {
      console.log(error);
      alert("server error, please refresh the page again");
    }
    wait = false
  };
</script>

<BreadCrumb pathname="history" />
<div class="py-5">
  <AiBanner
    title={`AI Generated Recipe`}
    description="Step 2: Pick your favorite Bbq style Healthy Fish recipe from the list of AI generated options below. We will provide you with the ingredients and directions to cook the recipe."
  />
  <div class="p-8 border rounded-lg my-8">
    <h2 class="text-3xl text-center mb-8 font-bold text-blue-800">
      Bbq Style Fish Recipe
    </h2>
    <BbqStyle options={variations} />

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
