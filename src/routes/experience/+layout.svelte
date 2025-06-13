<script lang="ts">
    import { selectedExperience, experiences, setExperience } from "./experience.svelte";
    import { fade } from 'svelte/transition';
    const { children } = $props();

    const experienceTitle = $derived(selectedExperience.title);
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

    .experience-meta {
        display: flex;
        flex-direction: column;
        font-size: 1.2em;
        position: relative;
        top: -0.3em;
        color: var(--text-color-secondary);
    }
</style>

<svelte:head>
    <title>Experience | {experienceTitle}</title>
    <meta name="description" content={selectedExperience.description} />
</svelte:head>
<br><br>
<div class="main">
    <h1>
        Experiences&nbsp;&nbsp;>&nbsp;&nbsp;
        {#key experienceTitle}
            <span in:fade={{ duration: 500 }}>
                {experienceTitle}
            </span>
        {/key}
    </h1>    
    {#if experienceTitle !== 'Home'}
        <div class="experience-meta">
            <div>
                {selectedExperience.employer} - {selectedExperience.location}
            </div>
            <div>
                {selectedExperience.startDate} - {selectedExperience.endDate}
            </div>
        </div>    
        <a href='/experience' onclick={() => setExperience(experiences[0])}>
            Back to experience <img src='/arrow.png' style="filter: var(--black-image-filter); width: 1em; height: 1em;">
        </a>
    {/if}

    {@render children()}
</div>