<script>
    import { selectedProject } from "./projects.svelte";

    Object.assign(selectedProject, {
        title: "????????",
        article: "error",
        description: "An error has occurred. Please try again later.",
        technologies: []
    });
</script>

<style>
    .main {
        display: grid;
        place-items: center;
        height: 30vh;
    }
</style>
<div class="main">
    <div class="text-center">
        <h1>
            Uh oh!
        </h1>
        <br>
        <div>
            This project doesn't exist, go back to the projects page and try again!
        </div>
    </div>    
</div>