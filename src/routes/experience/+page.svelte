<script lang="ts">
    import { goto } from "$app/navigation";
    import Project from "$lib/components/Project.svelte";
    import { selectedExperience, experiences } from "./experience.svelte";

    Object.assign(selectedExperience, experiences[0]); //reset to home project

</script>

<style>
    .experiences {
        display: flex;
        flex-direction: column;
        gap: 1.5em;
    }
</style>

<div class="main">
    <br>
    <p>
        I love to do my learning through my experiences. In this page you will find a myriad of different experiences
        that I have worked on, across a spectrum of technologies and languages. I will only include those that I feel
        are <em>completed</em>, or at least pretty close to being classified as such. If you want to see all of my experiences, completed
        or not, feel free to checkout my GitHub, linked up at the top of the page (there's a lot...)
    </p>
    <br>
    <div class="experiences">
        {#each experiences as project}
            <Project 
                project={project} 
                onclickFunction={() => {
                    Object.assign(selectedExperience, project);
                    goto(`/experiences/${project.article}`);
                }}
            />
        {/each}
    </div>
    <br><br>
</div>