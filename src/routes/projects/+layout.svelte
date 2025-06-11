<script lang="ts">
    import { currentlySelectedProject, projects } from "./projects.svelte";
    import { fade } from 'svelte/transition';
    const { children } = $props();

    const projTitle = $derived(currentlySelectedProject.project.title);
</script>

<style>
    h1 {
        font-size: 2em;
        font-weight: 600;
    }

    a {
        width: auto;
        display: flex;
        gap: 0.5em;
        align-items: center;
        font-size: 1.5em;
        font-weight: 600;
        cursor: pointer;
        transition: gap 0.2s ease-in-out;

        img {
            position: relative;
            top: 0;
            transition: top 0.2s ease-in-out;
        }

        &:hover {
            gap: 0.6em;

            img {
                top: -0.1em;
            }
        }
    }
</style>

<svelte:head>
    <title>Projects | {projTitle}</title>
    <meta name="description" content={currentlySelectedProject.project.description} />
</svelte:head>
<br><br>
<div class="main">
    <h1>
        Projects&nbsp;&nbsp;>&nbsp;&nbsp;
        {#key projTitle}
            <span in:fade={{ duration: 500 }}>
                {projTitle}
            </span>
        {/key}
    </h1>
    {#if projTitle !== 'Home'}
        <a href='/projects' onclick={() => currentlySelectedProject.project = projects[0]}>
            Home <img src='/arrow.png' style="filter: var(--black-image-filter); width: 1em; height: 1em;">
        </a>
    {/if}

    {@render children()}
</div>