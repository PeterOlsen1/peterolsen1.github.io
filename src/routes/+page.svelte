<script>
    import IndexText from "$lib/components/IndexText.svelte";
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
    <IndexText title="who am i?">
        My name is <b>Peter Olsen</b>, software engineer interested in all things new and exciting in the world of technology.
        I have a passion for building software that is not only functional but also elegant and user-friendly.
        <br><br>
        Coming from a background in classical music, I approach technology with a creative mindset, meshing together
        STUFF
    </IndexText>

    <IndexText title="where am i?">
        As an undergraduate student at the University of Minnesota - Twin Cities, I've taken courses in eveyrthing from
        machine learning, computer architecture, operating systems, and web development. I plan to pursue a master's degree
        in computer science following my graduation next semester, hopefully increasing my knowledge and appreciation for
        these great thinking rocks we call computers.
    </IndexText>
</div>

