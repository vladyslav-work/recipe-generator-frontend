<script lang="ts">
    import Logo from "./ui/logo.svelte";

    const footer_links = [
        { name: "About Us", url: "/about-us" },
        { name: "Contribute", url: "/contribute" },
        { name: "Terms", url: "/terms" },
        { name: "Privacy Policy", url: "/privacy-policy" },
        { name: "Advertising", url: "/advertising" },
        { name: "Contact Us", url: "/contact-us" },
    ];
</script>

<footer
    class=" p-3 mx-auto flex justify-between gap-3 flex-col md:flex-row  px-8 items-center"
>
    <div class="left w-full md:w-fit">
        <Logo />
    </div>
    <div class="right flex gap-2 flex-row flex-wrap justify-center items-center">
        {#each footer_links as link (link.url)}
            <a href={link.url} class=" hover:text-sky-900 mr-3 text-nowrap">{link.name}</a>
        {/each}
    </div>
</footer>
