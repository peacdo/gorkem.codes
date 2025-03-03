'use client';

import { motion } from 'framer-motion';

interface Technology {
    name: string;
    icon?: string;
    color?: string;
}

interface SkillCategory {
    name: string;
    technologies: Technology[];
}

const techStack: SkillCategory[] = [
    {
        name: 'Languages',
        technologies: [
            { name: 'Python' },
            { name: 'C++' },
            { name: 'JavaScript' },
            { name: 'Lua' },
            { name: 'Bash' },
        ],
    },
    {
        name: 'Web Development',
        technologies: [
            { name: 'React' },
            { name: 'Next.js' },
            { name: 'Tailwind CSS' },
            { name: 'REST APIs' },
        ],
    },
    {
        name: 'DevOps',
        technologies: [
            { name: 'Docker' },
            { name: 'Kubernetes' },
            { name: 'GitHub Actions' },
            { name: 'Self-hosted Runners' },
            { name: 'Ubuntu' },
        ],
    },
    {
        name: 'Database & Tools',
        technologies: [
            { name: 'PostgreSQL' },
            { name: 'MySQL' },
            { name: 'VS Code' },
            { name: 'PyCharm' },
            { name: 'Vim' },
        ],
    },
];

export function TechStack() {
    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-bold">Tech Stack</h2>
            <div className="grid gap-6 md:grid-cols-2">
                {techStack.map((category) => (
                    <motion.div
                        key={category.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="p-6 bg-secondary/30 rounded-lg space-y-4"
                    >
                        <h3 className="text-lg font-semibold text-primary">
                            {category.name}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.technologies.map((tech) => (
                                <span
                                    key={tech.name}
                                    className="px-3 py-1 bg-secondary rounded-full text-sm"
                                >
                                    {tech.name}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
} 