<script lang="ts">
    import Project from "$lib/components/Project.svelte";
    import type { ArticleLinkProps } from "$lib/types/articleLink";

    const projects: ArticleLinkProps[] = [

    ]
</script>

<style>
    .main {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    h1 {
        font-size: 2em;
        font-weight: 600;
    }
    
    .projects {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }
</style>

<br><br>
<div class="main">
    <h1>
        Projects
    </h1>

    <p>
        I love to do my learning through my projects. In this page you will find a myriad of different projects
        that I have worked on across a spectrum of technologies and languages. I will only include those that I feel
        are <em>completed</em>, or at least pretty close to being classified as such. If you want to see all of my projects, completed
        or not, feel free to checkout my GitHub, linked up at the top of the page (there's a lot...)
    </p>

    <div class="projects">
        {#each projects as project}
            <Project title={project.title} article={project.article}>
                {@html project.description}
            </Project>
        {/each}
    </div>
</div>