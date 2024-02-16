<script lang="ts">
    export let link: string;
</script>
<a href="/#/{link}"
    class=
    {`
        mx-auto
        px-10 py-2
        rounded
        text-white
        transition
        duration-300
        ease-in-out
        bg-blue-900
    `}
>
    <slot />
</a>
