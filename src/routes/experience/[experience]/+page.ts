import { error } from '@sveltejs/kit';
import { marked } from 'marked';
import { experiences } from '../experience.svelte.js';

export async function load({ params }) {
    const exp = params.experience;

    if (!exp || !experiences.some(expIter => expIter.article == exp)) {
        throw error(404, 'Unknown experience requested!');
    }

    const expPath = `/markdown/experience/${exp}.md`;

    try {
        const data = await fetch(expPath);
        const raw = await data.text();

        if (raw[0] === '<') {
            throw new Error('404 experience not found');
        }

        const text = await marked(raw);
        return { text };
    }
    catch {
        throw error(404, 'Experience not found!');
    }
}