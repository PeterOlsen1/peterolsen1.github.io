<script>
    let { children, title } = $props();
</script>

<style>
    .container {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    .title {
        font-size: 1.5em;
        font-weight: 600;
        margin-bottom: 0.5em;
        letter-spacing: 0.02em;
    }

    .content {
        font-size: 1.2em;
        line-height: 155%;
    }
</style>
<div class="container">
    <div class="title">
        {title}
    </div>
    <div class="content">
        {@render children()}
    </div>
</div>