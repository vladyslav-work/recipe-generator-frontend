<script>
    import AddBanner from "../components/AddBanner.svelte";
    import FaQs from "../components/FAQs.svelte";
    import BreadCrumb from "../components/ui/bread-crumb.svelte";
    import Selector from "../components/Selector.svelte";
    // import { location } from "svelte-spa-router";

    let social_links = [
        {
            name: "facebook",
            url: `https://web.facebook.com/sharer.php?u=${location.href}`,
            icon: `<img width="48" height="48" src="https://img.icons8.com/fluency/48/facebook-new.png" alt="facebook-new"/>`,
        },
        {
            name: "twitter",
            url: `https://twitter.com/intent/tweet?text=${location.href}`,
            icon: `<img width="48" height="48" src="https://img.icons8.com/fluency/48/twitter.png" alt="twitter"/>`,
        },
        {
            name: "pinterest",
            url: 'http://pinterest.com/pin/create/button/?url=' + encodeURIComponent(document.URL) + '&description=' + encodeURIComponent(document.title),
            icon: `<img width="48" height="48" src="https://img.icons8.com/color/48/pinterest.png" alt="pinterest"/>`,
        },
        {
            name: "whatsapp",
            url: 'whatsapp://send?text='+encodeURIComponent(document.title)+'%20 '+encodeURIComponent(document.URL),
            icon: `<img width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1"/>`,
        },
    ];
</script>

<div>
    <BreadCrumb pathname="/"/>
    <AddBanner
        title="Welcome to Recipes.net"
        description="Get started by making your selections below. Choose a protein, nutritional style, and cuisine to get started. Get started by making your selections below. Choose a protein, nutritional style, and cuisine to get started. Get started by making your selections below. Choose a protein, nutritional style, and cuisine to get started. "
        link={social_links}
    />
    <Selector />

    <FaQs />
</div>
