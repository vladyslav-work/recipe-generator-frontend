<script lang="ts">
    import FAQSection from "./ui/faq-section.svelte";
    let faqs: { title: string; description: string[] }[] = [
        {
            title: "Are the recipes any good?",
            description: [
                `Surprisingly yes! Recipes.net users have gener-
                ated close to 10,000 custom recipes and we
                have personally cooked dozens of them. So far
                our experience has been overwhelmingly posi-
                tive with the recipes providing quick and easy
                meal plans and new flavor combinations we
                might not have considered otherwise.`,
                `Feel free to check out our list of the Best AI
                Generated Recipes or read more about our ex-
                perience eating AI generated food.`,
            ],
        },
        {
            title: "What's the point of AI generated recipes?",
            description: [
                `Al generated recipes offer instant access to
                personalized meal ideas that align with your
                taste preferences or dietary requirements.`,
                `No more meal monotony - Our recipe generator
                puts a world of culinary variety at your finger-
                tips, providing an unlimited supply of dishes to
                ensure you never have to cook the same thing
                twice. (Unless you want to!)`,
                `These unique recipes provide a spark of inspira-
                tion and are guaranteed to take the humdrum
                out of your weekly meal planning!`
            ],
        },
        {
            title: "What is the best way to cook a steak?",
            description: [
                "The best way to cook a steak is to use a cast iron skillet and cook it on high heat for 2 minutes on each side.",
                "Then, put the skillet in the oven at 375 degrees for 5 minutes.",
            ],
        },
    ];
</script>

<section class="my-2">
    {#each faqs as faq}
        <FAQSection title={faq.title} descriptions={faq.description} />
    {/each}
</section>
