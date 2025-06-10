<script lang="ts">
    import { goto } from "$app/navigation";

    //"children" just refers to the inner content of the component body
    const { children, title, article } = $props();
</script>

<style>
    .project {
        width: 100%;
        display: flex;
        flex-direction: column;
        border: 1px solid var(--border-color);
        border-radius: 0.5em;
        padding: 1em;
        background-color: var(--code-color);
    }

    h1 {
        font-weight: 600;
        font-size: 1.5em;
    }
</style>

<div class="project" onclick={() => goto(`/projects/${article}`)}>
    <h1>
        {title}
    </h1>
    <p>
        {@render children()}
    </p>
</div>