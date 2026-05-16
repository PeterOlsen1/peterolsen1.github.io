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
        endDate: "August 2025",
        location: "Minneapolis, MN"
    },
    {
        title: "Software Engineer Intern",
        employer: "RAO Manufacturing",
        article: "rao",
        description: "Software Engineer Intern at RAO manufacturing",
        startDate: "May 2024",
        endDate: "August 2024",
        location: "Fridley, MN"
    },
    {
        title: "Teaching Assistant",
        employer: "University of Minnesota",
        article: "ta",
        description: "Teaching assistant for numerous courses at the U of M",
        startDate: "September 2023",
        endDate: "Present",
        location: "University of Minnesota, Minneapolis, MN"
    }
];

export const selectedExperience: ExperienceProps = $state(experiences[0]);

export const setExperience = (experience: ExperienceProps): void => {
    Object.assign(selectedExperience, experience);
}