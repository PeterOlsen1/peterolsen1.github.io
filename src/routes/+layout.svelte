<script lang="ts">
	import theme, { toggleTheme, loadTheme } from "$lib/style.svelte";
    import { onMount } from "svelte";
	import '../app.css';
    import SocialMedia from "$lib/components/SocialMedia.svelte";
	import { page } from "$app/state";
    import { goto } from "$app/navigation";

	let { children } = $props();


	const pages = [
		{ name: 'Home', path: '/' },
		{ name: '|', path: '/'},
		{ name: 'Projects', path: '/projects' },
		{ name: '|', path: '/'},
		{ name: 'Experience', path: '/experience' },
		{ name: '|', path: '/'},
		{ name: 'Blog', path: '/blog' },
	];

	onMount(() => {
		loadTheme();
	});
</script>

<style>
	.main, .header-content {
		width: 60%;
	}

	.name-socials {
		flex: 1;
		align-items: center;
		display: flex;
		gap: 1em;
	}

	.pages-theme {
		display: flex;
		align-items: center;
		gap: 1em;
	}

	.header {
		width: 100%;
		display: flex;
		justify-content: center;
		padding-top: 1em;
		padding-bottom: 1em;
		z-index: 1000;
		position: sticky;
		top: 0;
		backdrop-filter: blur(0.5em);
	}

	.header-content {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
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
	}

	.pages {
		display: flex;
		gap: 0.5em;
		margin-left: auto;
		margin-right: 2em;
		align-items: center;
	}

	.separator {
		width: 1px;
		height: 1.5em;
		background-color: var(--border-color);
	}

	.page {
		font-weight: 500;
		text-decoration: none;
		padding: 0.5em 0.5em;
		border-radius: 0.25em;
		position: relative;
		top: 0;
		transition: background-color 0.2s, top 0.2s;

		&:hover {
			background-color: var(--button-background-color);
			top: -0.1em;
		}
	}

	.name {
		cursor: pointer;
		text-wrap: nowrap;
	}

	@media (width < 1600px) {
		.main, .header-content {
			width: 90%;
		}
	}

	@media (width < 1000px) {
		.header-content {
			align-items: center;
			display: block;
		}

		.name {
			flex: 1;
			text-wrap: none;
		}

		.pages {
			flex: 1;
			position: relative;
			left: -0.5em;
		}
	}
</style>

<svelte:head>
	<link rel="icon" href="/favicon.png" />
</svelte:head>
<div class="header">
	<div class="header-content">
		<div class="name-socials">
			<h1 class="name" onclick={() => goto('/')}>
				Peter Olsen
			</h1>

			<div class="socials">
				<SocialMedia link={"https://github.com/PeterOlsen1"} imageURL={"https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"}>Github</SocialMedia>
				<SocialMedia link={"https://www.linkedin.com/in/peterolsen2/"} imageURL={"https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-3mmtnow6.png"}>Linkedin</SocialMedia>
			</div>
		</div>
		<div class="pages-theme">
			<div class="pages">
				{#each pages as page}
					{#if page.name === '|'}
						<span class="separator"></span>
					{:else}
						<a href={page.path} class="page">
							{page.name}
						</a>
					{/if}
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
	</div>
</div>
<div class="main">
	{@render children()}
</div>
<!-- <div class="footer">
	<p>© 2025 Peter Olsen. All rights reserved.</p>
</div> -->
