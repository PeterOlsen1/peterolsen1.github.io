<script lang="ts">
    import { goto } from "$app/navigation";

    //"children" just refers to the inner content of the component body
    const { children, title, article, onclickFunction } = $props();
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
</style>

{#if title !== 'Home'}
    <div class="project" onclick={onclickFunction}>
        <h1>
            {title} <img src="/arrow.png" style="filter: var(--black-image-filter); width: 1em; height: 1em;">
        </h1>
        <p>
            {@render children()}
        </p>
    </div>
{/if}