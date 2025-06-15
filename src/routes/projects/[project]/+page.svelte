<script>
    import { page } from "$app/state";
    import Technology from "$lib/components/Technology.svelte";
    import { selectedProject } from "../projects.svelte";
    import '$lib/style/github-md.css';
    import '$lib/style/custom-md.css';
    import { addIdsToHTML } from "$lib/utils/markdown";

    const { text } = page.data;
</script>

<style>
    .project-container {
        display: flex;
        gap: 1.5em;
    }
</style>

<div class="project-container">
    {#each selectedProject.technologies as tech}
        <Technology tech={tech} />
    {/each}
</div>
<div class="divider"></div>
<div class="markdown-body">
    {@html addIdsToHTML(text)}
    <br><br>
</div>