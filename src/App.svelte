<script lang="ts">
  import Router from "svelte-spa-router";
  import { wrap } from "svelte-spa-router/wrap";
  import { replace } from "svelte-spa-router";
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import Home from "./views/Home.svelte";
  import History from "./views/History.svelte";
  import Result from "./views/Result.svelte";
  import { data_store, is_all_selected } from "./lib/store";
  import { onMount } from "svelte";
  import ScrollUp from "./components/ui/scroll-up.svelte";

  const routes = {
    "/": Home,
    "/options/:recipeId": History,
    "/result/:recipeId": Result,
    "*": () => replace("/"),
  };

  onMount(() => {
    is_all_selected.update((data) => {
      return true;
    });
  });

  $: {
    let arr = Object.values($data_store);
    let not_full = arr.some((item) => item == null);
    is_all_selected.update((data) => {
      return not_full;
    });
    console.log(not_full);
  }
</script>

<Header />
<main class=" min-h-screen mx-auto pb-11 container">
  <article class="max-w-[1000px] mx-auto">
    <Router {routes} />
  </article>
</main>
<ScrollUp />
<Footer />
