import { error } from '@sveltejs/kit';
import { marked } from 'marked';

export const prerender = 'auto';

export async function load({ params }) {
    const proj = params.project;
    if (!proj) {
        throw error(404, 'Unknown project requested!');
    }

    const projPath = `/markdown/projects/${proj}.md`;

    try {
        const data = await fetch(projPath);
        const raw = await data.text();

        if (raw[0] === '<') {
            throw new Error('404 project not found');
        }

        const text = await marked(raw);
        return { text };
    }
    catch {
        throw error(404, 'Project not found!');
    }
}