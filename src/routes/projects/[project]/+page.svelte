<script>
    import { page } from "$app/state";
    import '$lib/style/github-md.css';
    import '$lib/style/custom-md.css';

    const { text, proj } = page.data;

</script>

<div class="markdown-body">
    {@html text}
</div>