<script lang="ts">
    import Search from "./icons/search.svelte";
    import Menu from "./icons/menu.svelte";
    import SubTitle from "./icons/sub-title.svelte";
    import User from "./icons/user.svelte";
    import Logo from "./ui/logo.svelte";
    type Link = { name: string; url: string };

    const links: Link[] = [
        { name: "Cooking Style", url: "/#/cooking-style" },
        { name: "Meals", url: "/#/meals" },
        { name: "Ingredients", url: "/#/ingredients" },
        { name: "Occasions", url: "/#/occasions" },
        { name: "Cuisines", url: "/#/cuisines" },
        { name: "Kitchen Tips", url: "/#/kitchen-tips" },
    ];

    let opened_humberger = false;
</script>

<header
    class="px-3 sm:px-10 border-b sticky top-0 bg-white/40 backdrop-blur-xl z-20 mx-auto"
>
    <div class="max-w-[1300px] mx-auto">
        <div
            class="top py-2 flex justify-between sm:justify-evenly items-center"
        >
            <div class="logo">
                <Logo />
            </div>
            <div class="left items-center hidden lg:flex">
                <div
                    class="search border rounded-md flex items-center p-0 pl-4 border-r-0 shadow-lg"
                >
                    <Search class="text-blue-800" />
                    <input
                        type="text"
                        placeholder="Find a recipe"
                        class="bg-transparent box-border p-2 max-w-full min-w-[500px] outline-none border-r-0 border-0 focus:border-b-2 focus:border-blue-800 transition-all duration-300 ease-in-out"
                    />
                    <button
                        class="text-blue-800 bg-blue-200 text-lg font-bold border-l border-r p-1 px-4"
                    >
                        Ingredient Search +
                    </button>
                </div>
                <button
                    class="bg-blue-800 h-full rounded-r-lg p-2 px-4 ml-[-4px] font-bold text-white"
                >
                    GO
                </button>
            </div>
            <button
                class="ml-5 hidden border-2 p-[7px] px-3 rounded-lg font-semibold lg:flex items-center gap-2"
            >
                <User class="text-blue-800" />
                <p>Login</p>
            </button>

            <div class="menu lg:hidden flex gap-3">
                <Search class="text-blue-800 text-2xl" />
                <User class="text-blue-800 text-2xl" />
                <button on:click={() => (opened_humberger = !opened_humberger)}>
                    <Menu class="text-blue-800 text-2xl" />
                </button>
            </div>
        </div>

        {#if opened_humberger}
            <div class="bottom lg:hidden block">
                <ul
                    class="flex flex-col items-center justify-center gap-2 py-2"
                >
                    {#each links as link (link.url)}
                        <li>
                            <a
                                href={link.url}
                                class="font-semibold hover:text-blue-900"
                            >
                                {link.name}
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>
        {/if}

        <div class="bottom hidden lg:block">
            <ul class="flex items-center justify-center gap-12 py-2">
                {#each links as link (link.url)}
                    <li>
                        <a
                            href={link.url}
                            class="font-semibold hover:text-blue-900"
                        >
                            {link.name}
                        </a>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</header>
