<script>
    import { page } from "$app/state";
    import Technology from "$lib/components/Technology.svelte";
    import { currentlySelectedProject } from "../projects.svelte";
    import '$lib/style/github-md.css';
    import '$lib/style/custom-md.css';

    const { text } = page.data;
    console.log(currentlySelectedProject);
</script>

<style>
    .project-container {
        display: flex;
        gap: 1.5em;
    }

    .divider {
        width: 100%;
        height: 1px;
        background-color: var(--border-color);
        margin: 1em 0;
    }
</style>

<div class="project-container">
    {#each currentlySelectedProject.technologies as tech}
        <Technology tech={tech} />
    {/each}
</div>
<div class="divider"></div>
<div class="markdown-body">
    {@html text}
</div>