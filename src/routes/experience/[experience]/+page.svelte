<script>
    import { page } from "$app/state";
    import '$lib/style/github-md.css';
    import '$lib/style/custom-md.css';
    import { addIdsToHTML } from "$lib/utils/markdown";
    import { experiences, selectedExperience } from "../experience.svelte";

    const { text } = page.data;


    const pathnameSplit = page.url.pathname.split("/");
    if (pathnameSplit.length < 3) {
        throw new Error("Invalid route");
    }

    const expName = pathnameSplit[2];
    const exp = experiences.find((p) => {
        return p.article == expName;
    }, experiences);
    if (!exp) {
        throw new Error("Invalid route");
    }

    Object.assign(selectedExperience, exp);
</script>

<br>
<div class="markdown-body">
    {@html addIdsToHTML(text)}
</div>