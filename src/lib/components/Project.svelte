<script lang="ts">
    import Technology from "./Technology.svelte";

    const { project, onclickFunction } = $props();
    console.log(project);
</script>

<style>
    .project {
        width: 100%;
        display: flex;
        flex-direction: column;
        border: 1px solid var(--border-color);
        border-radius: 0.5em;
        padding: 1em;
        background-color: var(--background-color-light);
        cursor: pointer;

        img {
            position: relative;
            top: 0;
            transition: top 0.2s ease-in-out;
        }
        
        &:hover {
            background-color: var(--background-color-light);

            h1 {
                gap: 0.7em;
            }

            img {
                top: -0.2em;
            }
        }
    }

    h1 {
        font-size: 1.5em;
        display: flex;
        align-items: center;
        gap: 0.5em;
        transition: gap 0.2s ease-in-out;
    }

    .techs {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5em;
        margin-top: 0.25em;
        margin-bottom: 0.25em;
    }
</style>

{#if project.title !== 'Home'}
    <div class="project" onclick={onclickFunction}>
        <h1>
            {project.title} <img src="/arrow.png" style="filter: var(--black-image-filter); width: 1em; height: 1em;">
        </h1>
        {#if project.technologies && project.technologies.length > 0}
            <div class="techs">
                {#each project.technologies as tech}
                    <Technology tech={tech} isSmall />
                {/each}
            </div>
        {/if}
        <p>
            {@html project.description}
        </p>
    </div>
{/if}