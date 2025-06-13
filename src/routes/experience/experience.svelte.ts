import type { ExperienceProps } from "$lib/types/experience";

export const experiences: ExperienceProps[] = [
    {
        title: "Home",
        employer: "Home",
        article: "home",
        description: "A place where you can find all of my experience",
        startDate: "2020-01-01",
        endDate: "2023-10-01",
        location: "Online",
    },
    {
        title: "Software Engineer Intern",
        employer: "Thrivent",
        article: "thrivent",
        description: "Software Engineer Intern at Thrivent",
        startDate: "May 2025",
        endDate: "Present",
        location: "Minneapolis, MN"
    },
    {
        title: "CSCI 4131 - Teaching Assistant",
        employer: "University of Minnesota",
        article: "csci4131",
        description: "Teaching assistant for the CSCI 4131 course at U of M",
        startDate: "September 2024",
        endDate: "Present",
        location: "Minneapolis, MN"
    },
    {
        title: "Software Engineer Intern",
        employer: "RAO Manufacturing",
        article: "rao",
        description: "Software Engineer Intern at RAO",
        startDate: "May 2024",
        endDate: "August 2024",
        location: "Fridley, MN"
    },
    {
        title: "CSCI 1133 - Teaching Assistant",
        employer: "University of Minnesota",
        article: "csci1133",
        description: "Teaching assistant for the CSCI 1133 course at U of M",
        startDate: "January 2024",
        endDate: "May 2024",
        location: "University of Minnesota, Minneapolis, MN"
    }
];

export const selectedExperience: ExperienceProps = $state(experiences[0]);

export const setExperience = (experience: ExperienceProps): void => {
    Object.assign(selectedExperience, experience);
}