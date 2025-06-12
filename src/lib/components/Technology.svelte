<script lang="ts">
    type TechProps = {
        tech: string;
        isSmall?: boolean;
    }

    type TechObject = {
        imageURL: string;
        name: string;
        background: string;
    }

    const ALL_TECH: Record<string, TechObject> = {
        rust: { 
            imageURL: "https://cdn.svgporn.com/logos/rust.svg",
            name: "Rust",
            background: "#222222"
        },
        tauri: { 
            imageURL: "https://cdn.svgporn.com/logos/tauri.svg",
            name: "Tauri",
            background: "#FFC131"
        },
        javascript: { 
            imageURL: "https://cdn.svgporn.com/logos/javascript.svg",
            name: "JavaScript",
            background: "#F7DF1E"
        },
        typescript: { 
            imageURL: "https://cdn.svgporn.com/logos/typescript.svg",
            name: "TypeScript",
            background: "#3178C6"
        },
        python: { 
            imageURL: "https://cdn.svgporn.com/logos/python.svg",
            name: "Python",
            background: "#3776AB"
        },
        java: { 
            imageURL: "https://cdn.svgporn.com/logos/java.svg",
            name: "Java",
            background: "#EA2D2E"
        },
        c: { 
            imageURL: "https://cdn.svgporn.com/logos/c.svg",
            name: "C",
            background: "#A8B9CC"
        },
        go: { 
            imageURL: "https://cdn.svgporn.com/logos/go.svg",
            name: "Go",
            background: "#00ADD8"
        },
        html: { 
            imageURL: "https://cdn.svgporn.com/logos/html-5.svg",
            name: "HTML",
            background: "#E44D26"
        },
        css: { 
            imageURL: "https://cdn.svgporn.com/logos/css-3.svg",
            name: "CSS",
            background: "#1572B6"
        },
        tailwind: { 
            imageURL: "https://cdn.svgporn.com/logos/tailwindcss-icon.svg",
            name: "Tailwind",
            background: "#38BDF8"
        },
        svelte: { 
            imageURL: "https://cdn.svgporn.com/logos/svelte-icon.svg",
            name: "Svelte",
            background: "#FF3E00"
        },
        ember: { 
            imageURL: "https://cdn.svgporn.com/logos/ember-tomster.svg",
            name: "Ember",
            background: "#E04E39"
        },
        flask: { 
            imageURL: "https://cdn.svgporn.com/logos/flask.svg",
            name: "Flask",
            background: "#000000"
        },
        postgres: { 
            imageURL: "https://cdn.svgporn.com/logos/postgresql.svg",
            name: "PostgreSQL",
            background: "#336791"
        },
        firebase: { 
            imageURL: "https://cdn.svgporn.com/logos/firebase.svg",
            name: "Firebase",
            background: "#FFCA28"
        },
        postgresql: {
            imageURL: "https://cdn.svgporn.com/logos/postgresql.svg",
            name: "PostgreSQL",
            background: "#336791"
        },
        azure: { 
            imageURL: "https://cdn.svgporn.com/logos/microsoft-azure.svg",
            name: "Azure",
            background: "#0078D4"
        },
        jinja: { 
            imageURL: "https://static-00.iconduck.com/assets.00/jinja-icon-512x484-4wmrxrqt.png",
            name: "Jinja",
            background: "#F7F7F7"
        },
        handlebars: {
            imageURL: "https://cdn.svgporn.com/logos/handlebars.svg",
            name: "Handlebars",
            background: "#F7931E"
        },
        latex: { 
            imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/LaTeX_logo.svg/2560px-LaTeX_logo.svg.png",
            name: "LaTeX",
            background: "#000000"
        },
    }

    const { tech, isSmall } : TechProps = $props();
    const techObject = ALL_TECH[tech];
    console.log(tech, techObject);
</script>

<style>
    .tech {
        display: flex;
        align-items: center;
        gap: 0.5em;
        padding: 0.3em 0.5em;
        border-radius: 0.5em;
        width: auto;
    }

    .tech-name {
        font-weight: 600;
        letter-spacing: 0.05em;
    }
</style>

<div class="tech" style="background-color: {techObject.background}22; border: 1px solid {techObject.background};">
    <img src={techObject.imageURL} alt={techObject.name} 
        style="width: {isSmall ? '1.5em' : '2em'}; height: {isSmall ? '1.5em' : '2em'};" />
    <span class="tech-name" style="font-size: {isSmall ? '0.8em' : '1em'};">{techObject.name}</span>
</div>