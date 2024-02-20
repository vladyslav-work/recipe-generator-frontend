<script lang="ts">
    export let value: string | undefined;
    export let color: string;
</script>

<div class="rounded-full px-2 sm:px-3" style="background-color: color-mix(in srgb, {color} 80%, white 100%)">
    <p class="font-semibold text-nowrap" style="color: {color};">{value}</p>
</div>