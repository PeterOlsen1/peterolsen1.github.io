import type { ArticleProps } from "$lib/types/articleLink";

export type ExperienceProps = ArticleProps & {
    startDate: string;
    endDate: string;
    location: string;
};

export const experiences: ExperienceProps[] = [
    {
        title: "Home",
        article: "home",
        description: "A place where you can find all of my experience",
        startDate: "2020-01-01",
        endDate: "2023-10-01",
        location: "Online",
    }
];

export const selectedExperience: ExperienceProps = $state(experiences[0]);