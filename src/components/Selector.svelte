<script lang="ts">
  import { nutritionalStyles, options } from "../lib/data";
  import { data_store, step } from "../lib/store";
  import type { IOption } from "../lib/types";
  import Options from "./ui/options.svelte";
  import Select from "./ui/select.svelte";
  import { push } from "svelte-spa-router";
  import subtitleIcon from "../assets/sub-title-icon.svg";

  let protein: IOption[] = options;
  let nutritionalStyle = nutritionalStyles;
  let cuisine = ["Italian", "Mexican", "Chinese", "Japanese"];

  import axios, { type AxiosResponse } from "axios";
  import { SERVER_URL } from "../api";

  const getOptions = async (
    protein: string,
    nutrition: string,
    cuisine: string
  ) => {
    wait = true
    try {
      const response: AxiosResponse = await axios.post(`${SERVER_URL}/api`, {
        protein,
        nutrition,
        cuisine,
      });
      console.log(response.data);
      const { variations } = response.data;
      data_store.update(() => {
        console.log({
          protein: protein,
          nutrition: nutrition,
          cuisine: cuisine,
          variations: variations,
        });
        return {
          protein: protein,
          nutrition: nutrition,
          cuisine: cuisine,
          variations: variations,
        };
      });
      step.update(() => 2)
    } catch (error: any) {
      console.error(error);
      alert(error?.response?.data?.message || "Server Error, please try again");
    }
    wait = false
  };

  let isAllSelected = false;
  let wait = false;

  function handleChange() {
    const form = new FormData(
      document.querySelector("#form") as HTMLFormElement
    );
    const protein = form.get("protein");
    const nutrition = form.get("nutrition");
    const cuisine = form.get("cuisine");
    isAllSelected = !!protein && !!nutrition && !!cuisine;
    console.log(isAllSelected);
  }

  function handleSubmit(
    e: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement }
  ) {
    e.preventDefault();
    // using form data to get the selected values
    const form = new FormData(
      document.querySelector("#form") as HTMLFormElement
    );
    const protein = form.get("protein");
    const nutrition = form.get("nutrition");
    const cuisine = form.get("cuisine");
    console.log(protein, nutrition, cuisine);
    if (!protein || !nutrition || !cuisine) return;
    getOptions(protein as string, nutrition as string, cuisine as string);
  }
</script>

<form
  id="form"
  class="rounded-xl border p-4 mt-20"
  action=""
  method="post"
  on:submit={handleSubmit}
  on:change={handleChange}
>
  <h2 class="text-sky-900 font-bold text-xl sm:text-2xl flex items-end gap-3">
    <img src={subtitleIcon} alt="make" class="inline w-8" />
    Make your selections
  </h2>
  <p class="py-3">
    Choose a protein, nutritional style, and cuisine to get started.
  </p>

  <div class="flex flex-col gap-3">
    <Options options={protein} name="protein" change={handleChange}/>
    <div class="py-2 lg:py-0"></div>
    <Options options={nutritionalStyle} name="nutrition" change={handleChange}/>
    <div class="py-2 lg:py-0"></div>
    <Select options={cuisine} name="cuisine" />

    {#if isAllSelected && !wait}
      <button
        type="submit"
        class="bg-blue-600/100 text-white p-2.5 rounded-lg text-center font-bold"
      >
        Generate Recipes!
      </button>
    {/if}
    {#if isAllSelected === false || wait}
      <button
        type="submit"
        class="bg-blue-400/35 text-white p-2.5 rounded-lg text-center font-bold"
        disabled
      >
        {wait ? "Generating..." : "Generate Recipes!"}
      </button>
    {/if}
  </div>
</form>
