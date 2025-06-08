<script>
    import { page } from "$app/state";
    import { onMount } from "svelte";
    import theme from "$lib/style.svelte";
    import '$lib/style/github-md.css';

    const { text, proj } = page.data;

</script>

<style>
    .markdown-body {
        background-color: transparent;
        color: var(--text-color);
        
        &:h1 {
            border-bottom: 1px solid white !important;
        } 
    }
</style>

<br><br>
<div class="markdown-body">
    {@html text}
</div>