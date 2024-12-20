'use client';

import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '@/lib/projects';

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-lg">
            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                </h3>
                {project.year && (
                    <span className="text-sm text-muted-foreground">
            {project.year}
          </span>
                )}
            </div>

            {/* Description */}
            <p className="mb-6 text-muted-foreground">
                {project.description}
            </p>

            {/* Footer */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                    <Github className="h-4 w-4" />
                    <span>Source</span>
                </Link>

                {project.links?.map((link) => (
                    <Link
                        key={link.url}
                        href={link.url}
                        target={link.isExternal ? "_blank" : undefined}
                        rel={link.isExternal ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                    >
                        {link.isExternal && <ExternalLink className="h-4 w-4" />}
                        <span>{link.label}</span>
                    </Link>
                ))}
            </div>

            {/* Hover gradient effect */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
    );
}