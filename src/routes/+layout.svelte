<script lang="ts">
	import theme, { toggleTheme, loadTheme } from "$lib/style.svelte";
    import { onMount } from "svelte";
	import '../app.css';
    import SocialMedia from "$lib/components/SocialMedia.svelte";
	import { page } from "$app/state";

	console.log(page.route.id);
	let { children } = $props();


	const pages = [
		{ name: 'Home', path: '/' },
		{ name: 'Projects', path: '/projects' },
		{ name: 'Experience', path: '/experience' }
	]
	
	onMount(() => {
		loadTheme();
	});
</script>

<style>
	.main {
		width: 60%;
	}

	.header {
		width: 100%;
		display: flex;
		align-items: center;
		padding: 0 20px;
		/* border-bottom: 1px solid var(--border-color); */
		padding-top: 1em;
		padding-bottom: 1em;
		z-index: 1000;
		position: sticky;
		top: 0;
		backdrop-filter: blur(0.5em);
	}

	img {
		filter: var(--black-image-filter);
	}

	.theme-toggle {
		display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-right: 1em;
        padding: 0.5em;
        border-radius: 0.25em;
        cursor: pointer;
		user-select: none;

        background-color: transparent;
        transition: background-color 0.2s;

        &:hover {
			background-color: var(--button-background-color);
        }
	}

	.socials {
		display: flex;
		gap: 1em;
		margin-left: 2em;
	}

	.pages {
		display: flex;
		gap: 1em;
		margin-left: auto;
		margin-right: 2em;
	}
</style>

<div class="main">
	<div class="header">
		<div class="flex-1 flex items-center">
			<div class="font-[600] text-4xl tracking-wide">
				Peter Olsen
			</div>

			<div class="socials">
				<SocialMedia link={"https://github.com/PeterOlsen1"} imageURL={"https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"}>Github</SocialMedia>
				<SocialMedia link={"https://www.linkedin.com/in/peterolsen2/"} imageURL={"https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-3mmtnow6.png"}>Linkedin</SocialMedia>
			</div>
		</div>
		<div class="pages">
			{#each pages as page}
				<a href={page.path}>
					{page.name}
				</a>
			{/each}
		</div>
		<div class="theme-toggle" onclick={toggleTheme}> 
			{#if theme.theme === 'dark'}
				<img src='/sun.svg' alt='sun' style="width: 1.5em; height: 1.5em;">
			{:else}
				<img src='/moon.svg' alt='moon' style="width: 1.5em; height: 1.5em;">
			{/if}
		</div>
	</div>
	{@render children()}
</div>
