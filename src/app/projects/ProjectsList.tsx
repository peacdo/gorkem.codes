'use client';

import { useState } from 'react';
import { Project } from '@/lib/projects';
import { ProjectCard } from './ProjectCard';

interface ProjectsListProps {
    initialProjects: Project[];
}

export default function ProjectsList({ initialProjects }: ProjectsListProps) {
    const [filter, setFilter] = useState<string | null>(null);

    // Get all unique tags from projects
    const allTags = Array.from(
        new Set(
            initialProjects.flatMap((project) => project.tags || [])
        )
    ).sort();

    // Filter projects based on selected tag
    const projects = filter
        ? initialProjects.filter((project) => project.tags?.includes(filter))
        : initialProjects;

    return (
        <div className="space-y-8">
            {/* Tags filter */}
            {allTags.length > 0 && (
                <div className="space-y-4 overflow-x-auto pb-2">
                    <div className="flex flex-nowrap gap-2 md:flex-wrap">
                        <button
                            onClick={() => setFilter(null)}
                            className={`rounded-full px-3 py-1 text-sm transition-colors
                ${!filter ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'}`}
                        >
                            All
                        </button>
                        {allTags.map((tag) => (
                            <button
                                key={tag}
                                onClick={() => setFilter(tag)}
                                className={`rounded-full px-3 py-1 text-sm transition-colors
                  ${filter === tag ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'}`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Featured Projects Section */}
            {projects.some((p) => p.featured) && (
                <section className="space-y-4">
                    <h2 className="text-xl md:text-2xl font-bold tracking-tight">
                        Featured Projects
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {projects
                            .filter((p) => p.featured)
                            .map((project) => (
                                <ProjectCard key={project.title} project={project} />
                            ))}
                    </div>
                </section>
            )}

            {/* Other Projects Section */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">
                    {filter ? `Projects tagged with "${filter}"` : 'All Projects'}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                    {projects
                        .filter((p) => !p.featured || filter)
                        .map((project) => (
                            <ProjectCard key={project.title} project={project} />
                        ))}
                </div>
            </section>

            {/* Empty State */}
            {projects.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-muted-foreground">No projects found with the selected tag.</p>
                </div>
            )}
        </div>
    );
}