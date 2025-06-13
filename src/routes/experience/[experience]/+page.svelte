<script>
    import { page } from "$app/state";
    import '$lib/style/github-md.css';
    import '$lib/style/custom-md.css';
    import { addIdsToHTML } from "$lib/utils/markdown";

    const { text } = page.data;

</script>

<br>
<div class="markdown-body">
    {@html addIdsToHTML(text)}
</div>