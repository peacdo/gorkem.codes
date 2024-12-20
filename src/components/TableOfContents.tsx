'use client';

import React from 'react';

interface Heading {
    id: string;
    text: string;
    level: number;
}

const TableOfContents = () => {
    const [activeHeading, setActiveHeading] = React.useState('');
    const [headings, setHeadings] = React.useState<Heading[]>([]);

    React.useEffect(() => {
        const headingElements = document.querySelectorAll('article h2, article h3');
        const headingArray: Heading[] = [];

        headingElements.forEach((heading) => {
            const id = heading.id;
            const text = heading.textContent || '';
            const level = Number(heading.tagName.charAt(1));

            headingArray.push({ id, text, level });
        });

        setHeadings(headingArray);

        const handleScroll = () => {
            const headingElements = document.querySelectorAll('article h2, article h3');
            headingElements.forEach((heading) => {
                const { top } = heading.getBoundingClientRect();
                if (top >= 0 && top <= 150) {
                    setActiveHeading(heading.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    if (headings.length === 0) return null;

    return (
        <nav className="hidden lg:block">
            <div className="sticky top-8">
                <h2 className="text-lg font-bold mb-4">Table of Contents</h2>
                <ul className="space-y-2">
                    {headings.map((heading) => (
                        <li
                            key={heading.id}
                            style={{ paddingLeft: `${(heading.level - 2)}rem` }}
                        >
                            <a
                                href={`#${heading.id}`}
                                onClick={(e) => handleClick(e, heading.id)}
                                className={`block py-1 text-sm transition-colors ${
                                    activeHeading === heading.id
                                        ? 'text-primary'
                                        : 'text-muted-foreground hover:text-primary'
                                }`}
                            >
                                {heading.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default TableOfContents;