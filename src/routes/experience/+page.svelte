<script lang="ts">
    import { goto } from "$app/navigation";
    import Experience from "$lib/components/Experience.svelte";
    import { selectedExperience, experiences, setExperience } from "./experience.svelte";

    setExperience(experiences[0]); // reset to home experience
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
        I personally believe that any experience working in computer science is valuable, whether it be a job, internship, or personal project.
        On this page, I have compiled a list of my professional experiences, including TA positions and internships.
        Every experience has shaped my understanding in some special way, shape, or form. Not only my understanding
        of computer science, but also my understanding of myself and the world around me.
    </p>
    <br>
    <div class="experiences">
        {#each experiences as experience}
            <Experience 
                experience={experience} 
                onclickFunction={() => {
                    setExperience(experience);
                    goto(`/experience/${experience.article}`);
                }}
            />
        {/each}
    </div>
    <br><br>
</div>