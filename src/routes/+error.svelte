<style>
    .main {
        width: 60%;
        margin: 0 auto;
        text-align: center;
        padding: 2em;
    }

    .title {
        font-size: 2em;
        font-weight: bold;
        margin-bottom: 1em;
    }

    a {
        text-decoration: underline;
    }

    @media (max-width: 800px) {
        .main {
            width: 90%;
        }

        .title {
            font-size: 1.5em;
        }
    }
</style>


<svelte:head>
    <title>oops!</title>
</svelte:head>
<div class="main">
    <div class="title">
        uh oh!
    </div>
    <div>
        looks like you tried to access a page that doesn't exist.
        <br>
        maybe you can find what you're looking for in the <a href="/">home page</a>?
    </div>
</div>