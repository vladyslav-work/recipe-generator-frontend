<script lang="ts">
  import Router from "svelte-spa-router";
  import { wrap } from "svelte-spa-router/wrap";
  import { replace } from "svelte-spa-router";
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import Home from "./views/Home.svelte";
  import History from "./views/History.svelte";
  import Result from "./views/Result.svelte";
  import { data_store, is_all_selected, step } from "./lib/store";
  import { onMount } from "svelte";
  import ScrollUp from "./components/ui/scroll-up.svelte";
  import FingerprintJS from "@fingerprintjs/fingerprintjs";
  import axios from "axios";
  import { SERVER_URL } from "./api";

  let fingerprint = "";

  onMount(async () => {
    is_all_selected.update((data) => {
      return true;
    });
    try {
      const fp = await FingerprintJS.load();
      const result = await fp.get();

      // This is the visitor identifier:
      fingerprint = result.visitorId;
      console.log(`Fingerprint: ${fingerprint}`);
      await axios.post(`${SERVER_URL}/api/fingerprint`, { fingerprint });
    } catch (error) {
      console.error("Error getting fingerprint:", error);
    }
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
<main class=" min-h-screen mx-auto pb-6 container px-2 sm:px-4">
  <article class="max-w-[1000px] mx-auto">
    {#if $step === 1}
        <Home />
    {:else if $step === 2}
        <History />
    {:else if $step === 3}
        <Result />
    {/if}
  </article>
</main>
<ScrollUp />
<Footer />
