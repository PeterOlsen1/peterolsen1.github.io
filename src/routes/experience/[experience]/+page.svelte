<script>
    import { page } from "$app/state";
    import { onMount } from "svelte";
    import theme from "$lib/style.svelte";
    import '$lib/style/github-md.css';
    import '$lib/style/custom-md.css';

    const { text, proj } = page.data;

</script>

<br><br>
<div class="markdown-body">
    {@html text}
</div>