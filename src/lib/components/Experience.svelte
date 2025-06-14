<script lang="ts">
    import type { ExperienceProps } from "$lib/types/experience";

    type ExperienceComponentProps = {
        experience: ExperienceProps;
        onclickFunction: () => void;
    };

    const { experience, onclickFunction }: ExperienceComponentProps = $props();
</script>

<style>
    .experience {
        width: 100%;
        display: flex;
        border: 1px solid var(--border-color);
        border-radius: 0.5em;
        padding: 1em;
        background-color: var(--background-color-secondary);
        cursor: pointer;

        img {
            position: relative;
            top: 0;
            transition: top 0.2s ease-in-out;
        }
        
        &:hover {
            background-color: var(--background-color-secondary);

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

    .title-container {
        display: flex;
        align-items: start;
        width: 100%;
    }

    .experience-right {
        flex: 1;
        text-align: right;

        h1 {
            display: block;
        }
    }

    .experience-left {
        flex: 1;
        text-align: left;
    }

    @media (width < 1000px) {
        .title-container {
            flex-direction: column;
            align-items: flex-start;
        }

        .experience-right {
            display: none;
        }
    }
</style>

<!-- don't return anything if it is the home component -->
{#if experience.title !== 'Home'}
    <div class="experience" onclick={onclickFunction}>
        <div class="experience-left">
            <div class="title-container">
                <h1>
                    {experience.title} <img src="/arrow.png" style="filter: var(--black-image-filter); width: 1em; height: 1em;">
                </h1>
            </div>

            <p>
                {@html experience.description}
            </p>
        </div>

        <div class="experience-right">
            <h1 style="font-size: 1.2em;">
                {experience.startDate} - {experience.endDate}
            </h1>
            <div>
                {experience.location}
            </div>
        </div>
    </div>
{/if} 