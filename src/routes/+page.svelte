<script>
    import IndexText from "$lib/components/IndexText.svelte";
    import Project from "$lib/components/Project.svelte";
    import { projects } from "./projects/projects.svelte";

    let projectsShort = projects.slice(0, 3); // Display only the first 3 projects
</script>

<style>
    .header {
        width: 100%;
        text-align: center;
        font-size: 2em;
        font-weight: 600;
        margin-top: 2em;
        margin-bottom: 2em;
    }

    .main {
        gap: 2em;
    }

    .project-container {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        justify-content: center;
        width: 80%;
        margin: 0 auto;
    }

    .images {
        display: flex;
        justify-content: center;
        gap: 1em;
        margin-bottom: 2em;

        & img {
            width: 20em;
            border-radius: 0.5em;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            max-width: 30vw;
        }
    }
</style>

<svelte:head>
	<title>Peter Olsen</title>
	<meta name="description" content="Portfolio of Peter Olsen, a software engineer specializing in web development and design. Explore projects, experience, and blog posts." />
	<link rel="icon" href="/favicon.ico" />
</svelte:head>

<div class="main">
    <div class="header">
        Welcome!
    </div>
    <div class="images">
        <img src="/images/me.jpg" alt="Peter Olsen">
        <img src="/images/me_bathroom.jpg" alt="Peter Olsen">
        <img src="/images/me_pizza.JPEG" alt="Peter Olsen">
    </div>
 
    <IndexText title="who am i?">
        My name is <b>Peter Olsen</b>, software engineer interested in all things new and exciting in the world of technology.
        I have a passion for building software that is not only functional but also elegant and user-friendly.
        <br><br>
        Coming from a background in classical music, I approach technology with a creative mindset, meshing together
        my love for art and design with my technical skills. I believe that creating software is not just about solving problems,
        but also enjoying the process.
    </IndexText>

    <IndexText title="where am i?">
        As an undergraduate student at the University of Minnesota - Twin Cities, I've taken courses in everything from
        machine learning, computer architecture, operating systems, and web development. I plan to pursue a master's degree
        in computer science following my graduation next semester, hopefully increasing my knowledge and appreciation for
        these great thinking rocks we call computers.
        <br><br>
        In the process of obtaining my degree, I have worked on a numerous amount of projects, but more importantly,
        I have spent four semesters as a teaching assistant. Being a TA has taught me countless lessons in communication
        that I would not have learned otherwise, and has improved my ability to explain complex concepts in a clear and concise manner.
    </IndexText>

    <IndexText title="what have i done?">
        Below you will find a list of a few of my projects, which I believe have been the most impactful on my learning
        as a software engineer. For the most part, every project I have done has pushed me to learn something new, whether
        it be a new language, framework, or API. Check out my github to see all of what I am / have worked on!
        <br><br>
        <div class="project-container">
            {#each projectsShort as project}
                <Project
                    project={project}
                    onclickFunction={() => {
                    window.location.href = `/projects/${project.article}`;
                }}
                isSmall
            />
            {/each}
        </div>
    </IndexText>
    <br><br><br><br>
</div>

