<script>
    import { page } from "$app/state";
    import '$lib/style/github-md.css';
    import '$lib/style/custom-md.css';

    const { text } = page.data;

</script>

<br><br>
<div class="markdown-body">
    {@html text}
</div>