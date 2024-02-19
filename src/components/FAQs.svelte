<script lang="ts">
    import FAQSection from "./ui/faq-section.svelte";
    let faqs: { title: string; description: string[] }[] = [
        {
            title: "Are the recipes any good?",
            description: [
                `Surprisingly yes! Recipes.net users have generated close to 10,000 custom recipes and we have personally cooked dozens of them. So far our experience has been overwhelmingly positive with the recipes providing quick and easy meal plans and new flavor combinations we might not have considered otherwise.`,
                `Feel free to check out our list of the Best AI Generated Recipes or read more about our experience eating AI generated food.`,
            ],
        },
        {
            title: "What about meal planing?",
            description: [
                `Glad you asked! Recipes.net was built from the ground up to simplify weekly meal planing. we make it easy to add recipes to your plan, manage your shopping list, and keep track of your favorite recipes.`,
                `for more details check out this quick video showcasing how easy it is to integrate your custom generated recipes into your meal plan`
            ],
        },
        {
            title: "What's the point of AI generated recipes?",
            description: [
                "AI generated recipes offer instant access to personalized meal ideas that align with your taste preferences or dietary requirements.",
                "No more meal monotony -Our recipe generator puts a world of culinary variety at your fingertips, providing an unlimited supply of dished to ensure you never to cook the same thing twice. (Unless you want to!)",
            ],
        },
    ];
</script>

<section class="my-2">
    {#each faqs as faq}
        <FAQSection title={faq.title} descriptions={faq.description} />
    {/each}
</section>
