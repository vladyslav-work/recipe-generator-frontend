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
    class=" p-3 mx-auto flex justify-between gap-10 lg:flex-row flex-col px-8"
>
    <div class="left">
        <Logo />
    </div>
    <div class="right flex gap-2 flex-col lg:flex-row">
        {#each footer_links as link (link.url)}
            <a href={link.url} class=" hover:text-blue-900 mr-3">{link.name}</a>
        {/each}
    </div>
</footer>
