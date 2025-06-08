import { error } from '@sveltejs/kit';
import { marked } from 'marked';

export async function load({ params }) {
    const proj = params.experience;
    if (!proj) {
        throw error(404, 'Unknown experience requested!');
    }

    const projPath = `/markdown/experience/${proj}.md`;

    try {
        const data = await fetch(projPath);
        const raw = await data.text();

        if (raw[0] === '<') {
            throw new Error('404 experience not found');
        }

        const text = await marked(raw);
        return { text, proj };
    }
    catch {
        throw error(404, 'Experience not found!');
    }
}