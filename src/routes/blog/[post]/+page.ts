import { error } from '@sveltejs/kit';
import { marked } from 'marked';

export async function load({ params }) {
    const proj = params.post;
    if (!proj) {
        throw error(404, 'Unknown post requested!');
    }

    const projPath = `/markdown/blog/${proj}.md`;

    try {
        const data = await fetch(projPath);
        const raw = await data.text();

        if (raw[0] === '<') {
            throw new Error('404 post not found');
        }

        const text = await marked(raw);
        return { text, proj };
    }
    catch {
        throw error(404, 'Post not found!');
    }
}