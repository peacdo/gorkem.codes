// src/app/projects/page.tsx
import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function ProjectsPage() {
    const projects = [
        {
            date: '2024',
            slug: 'personal-site',
            name: 'Personal Website',
            description: 'The source of this website.',
            writeup: '/blog/building-my-site',
            demo: 'https://demo.com',
            github: 'https://github.com/peacdo/personal-site'
        },
        {
            date: '2023',
            slug: 'note-app',
            name: 'TakeNote',
            description: 'A free, open source notes app for the web.',
            writeup: '/blog/building-note-app',
            demo: 'https://demo.com/note-app',
            github: 'https://github.com/peacdo/note-app'
        },
        {
            date: '2023',
            slug: 'task-app',
            name: 'Task Manager',
            description: 'A minimal task management application.',
            demo: 'https://demo.com/tasks',
            github: 'https://github.com/peacdo/task-app'
        }
    ];

    return (
        <div>
            <header className="space-y-4 mb-8">
                <h1 className="text-4xl font-bold">Projects</h1>
                <p className="text-[var(--secondary)]">
                    Open-source projects I've made over the years, including this website,
                    apps, and various experiments.
                </p>
            </header>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <div
                        key={project.slug}
                        className="bg-[var(--background-secondary)] rounded-lg p-4 flex flex-col min-h-[180px]"
                    >
                        <div className="flex-grow">
                            <time className="text-sm text-[var(--secondary)] mb-2 block">
                                {project.date}
                            </time>

                            <Link
                                href={project.github}
                                target="_blank"
                                className="text-[var(--link-color)] hover:text-[var(--link-hover)] font-semibold block mb-2"
                            >
                                {project.name}
                            </Link>

                            <p className="text-[var(--secondary)] mb-4">
                                {project.description}
                            </p>
                        </div>

                        <div className="flex items-center gap-3 mt-2 h-8">
                            {project.writeup && (
                                <Link
                                    href={project.writeup}
                                    className="text-sm text-[var(--font-color)] hover:text-[var(--link-color)] transition-colors"
                                >
                                    Article
                                </Link>
                            )}
                            {project.demo && (
                                <Link
                                    href={project.demo}
                                    target="_blank"
                                    className="text-sm text-[var(--font-color)] hover:text-[var(--link-color)] transition-colors inline-flex items-center gap-1"
                                >
                                    Demo
                                    <ExternalLink size={14} className="opacity-70" />
                                </Link>
                            )}
                            {project.github && (
                                <Link
                                    href={project.github}
                                    target="_blank"
                                    className="text-sm text-[var(--font-color)] hover:text-[var(--link-color)] transition-colors inline-flex items-center gap-1"
                                >
                                    Source
                                    <ExternalLink size={14} className="opacity-70" />
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}