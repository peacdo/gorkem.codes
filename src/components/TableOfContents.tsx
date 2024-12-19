// src/components/TableOfContents.tsx
'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface TocHeading {
    id: string;
    text: string;
    level: number;
}

export default function TableOfContents() {
    const [headings, setHeadings] = useState<TocHeading[]>([]);
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        const articleHeadings = document.querySelectorAll<HTMLHeadingElement>('article h2, article h3');
        const headingItems: TocHeading[] = Array.from(articleHeadings).map(heading => ({
            id: heading.id,
            text: heading.textContent || '',
            level: parseInt(heading.tagName[1])
        }));

        setHeadings(headingItems);

        // Set up intersection observer
        const callback: IntersectionObserverCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(callback, {
            rootMargin: '-100px 0% -66% 0%'
        });

        articleHeadings.forEach(heading => observer.observe(heading));

        return () => observer.disconnect();
    }, []);

    if (headings.length === 0) {
        return null;
    }

    return (
        <nav className="toc hidden lg:block">
            <div className="sticky top-8">
                <h2 className="text-lg font-bold mb-4">Table of Contents</h2>
                <ul className="space-y-2">
                    {headings.map(heading => (
                        <li
                            key={heading.id}
                            style={{ paddingLeft: `${(heading.level - 2) * 1}rem` }}
                        >
                            <a
                                href={`#${heading.id}`}
                                className={`block py-1 text-sm transition-colors ${
                                    activeId === heading.id
                                        ? 'text-[var(--link-color)]'
                                        : 'text-[var(--secondary)] hover:text-[var(--link-color)]'
                                }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector(`#${heading.id}`)?.scrollIntoView({
                                        behavior: 'smooth'
                                    });
                                }}
                            >
                                {heading.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}