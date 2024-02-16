<script lang="ts">
  import { push } from "svelte-spa-router";
  import AiBanner from "../components/AIBanner.svelte";
  import BbqStyle from "../components/BbqStyle.svelte";
  import Button from "../components/ui/button.svelte";
  import BreadCrumb from "../components/ui/bread-crumb.svelte";
  import { onMount } from "svelte";
  import axios, { type AxiosResponse } from "axios";
  import { SERVER_URL } from "../api";

  export const params: { [key: string]: string } = {};

  let variations: {
    id: string;
    recipe: string;
    name: string;
    description: string;
  }[] = [];

  onMount(async () => {
    if (!params.recipeId) {
      push("/");
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
    } catch (error) {
      console.log(error);
    }
  });

  const handleCreate = () => {
    const variation = {}
  }
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
        bg-blue-900
    `}
    on:click={handleCreate}
      >
        Create Custom Recipe
      </button>
    </div>
  </div>
</div>
