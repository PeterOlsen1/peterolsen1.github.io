import type { ArticleProps } from './article';

export type ProjectProps = ArticleProps & {
    technologies: string[];
};