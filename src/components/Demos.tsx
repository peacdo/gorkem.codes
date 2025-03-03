'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';

interface Demo {
    title: string;
    description: string;
    demoUrl: string;
    githubUrl: string;
    tags: string[];
}

const demos: Demo[] = [
    {
        title: "Demo Architect Website",
        description: "A modern, responsive architect portfolio website built with Next.js and Tailwind CSS",
        demoUrl: "https://demo.gorkem.codes",
        githubUrl: "",
        tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"]
    },
    {
        title: "HCI Portal",
        description: "Web portal for Human-Computer Interaction course materials",
        demoUrl: "https://hci-portal.vercel.app",
        githubUrl: "https://github.com/peacdo/hci-portal",
        tags: ["Next.js", "React", "Tailwind CSS"]
    }
];

export function Demos() {
    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-bold">Featured Projects</h2>
            <div className="grid gap-6 md:grid-cols-2">
                {demos.map((demo) => (
                    <motion.div
                        key={demo.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="group relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-secondary/30 to-secondary/10 backdrop-blur-sm"
                    >
                        {/* Hover Effect Overlay - moved to top */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Content Container - added z-index */}
                        <div className="relative z-10 p-6 space-y-4">
                            {/* Header */}
                            <h3 className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                                {demo.title}
                            </h3>

                            {/* Description */}
                            <p className="text-muted-foreground text-sm">
                                {demo.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {demo.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2.5 py-0.5 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-4 pt-2">
                                <Link
                                    href={demo.demoUrl}
                                    target="_blank"
                                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <ExternalLink size={16} />
                                    <span>Live Demo</span>
                                </Link>
                                {demo.githubUrl && (
                                    <Link
                                        href={demo.githubUrl}
                                        target="_blank"
                                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        <Github size={16} />
                                        <span>Source</span>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="text-center pt-4">
                <Link 
                    href="/projects"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                    <span>View all projects</span>
                    <span className="text-lg">→</span>
                </Link>
            </div>
        </div>
    );
} 