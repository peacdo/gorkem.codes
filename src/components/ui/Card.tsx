import Link from 'next/link';
import { Github, ExternalLink, Star } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    github: string;
    stars?: number;
    year?: number;
    links?: Array<{
        label: string;
        url: string;
        isExternal: boolean;
    }>;
    className?: string;
}

export function ProjectCard({
                                title,
                                description,
                                github,
                                stars,
                                year,
                                links = [],
                                className = ""
                            }: ProjectCardProps) {
    return (
        <div className={`group relative overflow-hidden rounded-lg border border-border bg-background p-6 transition-all hover:border-primary/50 hover:shadow-lg ${className}`}>
            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {title}
                </h3>
                {year && (
                    <span className="text-sm text-muted-foreground">
                        {year}
                    </span>
                )}
            </div>

            {/* Description */}
            <p className="mb-6 text-muted-foreground">
                {description}
            </p>

            {/* Footer with links */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                {/* GitHub link with stars */}
                <Link
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                    <Github size={16} />
                    <span>Source</span>
                    {stars && (
                        <span className="flex items-center gap-1 text-xs">
                            <Star size={12} fill="currentColor" />
                            {stars}
                        </span>
                    )}
                </Link>

                {/* Other links */}
                {links.map((link) => (
                    <Link
                        key={link.url}
                        href={link.url}
                        target={link.isExternal ? "_blank" : undefined}
                        rel={link.isExternal ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                    >
                        {link.isExternal ? <ExternalLink size={16} /> : null}
                        <span>{link.label}</span>
                    </Link>
                ))}
            </div>

            {/* Hover effect gradient overlay */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
    );
}