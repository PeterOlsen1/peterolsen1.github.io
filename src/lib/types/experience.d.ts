import type { ArticleProps } from './article';

export type ExperienceProps = ArticleProps & {
    employer: string;
    startDate: string;
    endDate: string;
    location: string;
};