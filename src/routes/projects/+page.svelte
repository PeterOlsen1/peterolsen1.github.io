<script lang="ts">
    import { goto } from "$app/navigation";
    import Project from "$lib/components/Project.svelte";
    import { currentlySelectedProject, projects } from "./projects.svelte";

    currentlySelectedProject.project = projects[0]; //reset to home project

</script>

<style>
    .projects {
        display: flex;
        flex-direction: column;
        gap: 1.5em;
    }
</style>

<div class="main">
    <p>
        I love to do my learning through my projects. In this page you will find a myriad of different projects
        that I have worked on across a spectrum of technologies and languages. I will only include those that I feel
        are <em>completed</em>, or at least pretty close to being classified as such. If you want to see all of my projects, completed
        or not, feel free to checkout my GitHub, linked up at the top of the page (there's a lot...)
    </p>

    <div class="projects">
        {#each projects as project}
            <Project title={project.title} article={project.article} onclickFunction={() => {
                currentlySelectedProject.project = project;
                goto(`/projects/${project.article}`);
            }}>
                {@html project.description}
            </Project>
        {/each}
    </div>
</div>