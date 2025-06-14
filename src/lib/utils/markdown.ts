export function addIdsToHTML(html: string): string {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const headings = doc.querySelectorAll<HTMLHeadingElement>('h1, h2, h3, h4, h5, h6');
    
    headings.forEach((heading: HTMLHeadingElement) => {
        const headingText = heading.textContent || '';
        const id = headingText
            .trim()
            .toLowerCase()
            .replace(/ /g, '-');
        heading.id = id;
        heading.innerText = '# ' + headingText;
        heading.setAttribute('onclick', `location.hash = '#${id}'`);
        heading.style.cursor = 'pointer';
    });

    return doc.body.innerHTML;
}