<script lang="ts">
    const { children, link, imageURL } = $props();

    let linkRef = $state<HTMLDivElement | null>(null);
    let underlineRef = $state<HTMLDivElement | null>(null);

    function handleMouseOver() {
        if (!linkRef) { // link not mounted yet
            return;
        }

        const rect = linkRef.getBoundingClientRect();
        if (!underlineRef) { // underline not mounted yet
            return;
        }

        underlineRef.style.width = `${rect.width}px`;
    }

    function handleMouseOut() {
        if (underlineRef) {
            underlineRef.style.width = '0';
        }
    }
</script>

<style>
    .social-link {
        display: flex;
        flex-direction: column;
        font-weight: 400;
        letter-spacing: 0.1em;

        position: relative;
        top: 0.1em;
    }

    .social-underline {
        width: 0;
        height: 0.1em;
        background-color: var(--border-color, #000);
        transition: width 0.3s ease;
        position: relative;
        top: -0.2em;
        border-radius: 1em;
    }
    
    img {
        filter: var(--black-image-filter);
        width: 1.5em;
        height: 1.5em;
    }

    .social-container {
        display: flex;
        align-items: center;
        gap: 0.2em;
        padding: 0.2em 0.5em;
        border-radius: 0.3em;
        cursor: pointer;

        &:hover {
            background-color: var(--button-background-color);
        }
    }
</style>

<div class="social-container" onclick={() => window.open(link, '_blank')} onmouseover={handleMouseOver} onmouseout={handleMouseOut}>
    <img src={imageURL} alt="social media">
    <div class="social-link">
        <div bind:this={linkRef}>
            {@render children()}        
        </div>
        <div class="social-underline" bind:this={underlineRef}></div>
    </div>
</div>
