import type { ArticleProps } from "$lib/types/articleLink";

export type ProjectProps = ArticleProps & {
    technologies: string[];
};

export const projects: ProjectProps[] = [
    {
        title: "Home",
        article: "home",
        description: "A place where you can find all of my 'completed' projects",
        technologies: []
    },
    {
        title: "Student Server Manager",
        article: "studentServerManager",
        description: "A desktop app to manage student servers nested within gradescope assignment submissions.",
        technologies: ["tauri", "rust", "svelte"]
    },
    {
        title: "GopherHours",
        article: "gopherHours",
        description: "A web app to connect students with TAs through simple scheduling of office hours.",
        technologies: ["svelte", "firebase", "tailwind"]
    },
    {
        title: "HolySheet",
        article: "holySheet",
        description: "A web app for musicians to save and edit their sheet music.",
        technologies: ["ember", "handlebars", "firebase", "azure"]
    },
    {
        title: "Pathfinding Comparison",
        article: "pathfindingComparison",
        description: "A research paper comparing the performance of various pathfinding algorithms.",
        technologies: ["python", "latex"]
    },
    {
        title: "GopherTransit",
        article: "gopherTransit",
        description: "A simple but effective web page to help students easily check transit schedules.",
        technologies: ["html", "css", "javascript"]
    },
    {
        title: "Plantiful",
        article: "plantiful",
        description: "A social media for plant lovers to share pictures and care tips for their plants.",
        technologies: ["jinja", "flask", "postgresql"]
    }
];

export const selectedProject: ProjectProps = $state(projects[0]);