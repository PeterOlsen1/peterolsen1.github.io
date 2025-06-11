import type { ArticleLinkProps } from "$lib/types/articleLink"

export const projects: ArticleLinkProps[] = [
    {
        title: "Home",
        article: "home",
        description: "A place where you can find all of my 'completed' projects"
    },
    {
        title: "Student Server Manager",
        article: "studentServerManager",
        description: "A desktop app to manage student servers nested within gradescope assignment submissions."
    },
    {
        title: "GopherHours",
        article: "gopherHours",
        description: "A web app to connect students with TAs through simple scheduling of office hours."
    },
    {
        title: "HolySheet",
        article: "holySheet",
        description: "A web app for musicians to save and edit their sheet music."
    },
    {
        title: "GopherTransit",
        article: "gopherTransit",
        description: "A simple but effective web page to help students easily check transit schedules."
    },
    {
        title: "Plantiful",
        article: "plantiful",
        description: "A social media for plant lovers to share pictures and care tips for their plants."
    }
]

export const currentlySelectedProject: { project: ArticleLinkProps } = $state({
    project: projects[0]
});