// src/app/about/page.tsx
import Link from 'next/link';
import { Github, Mail, Linkedin } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="max-w-2xl">
            <h1 className="text-3xl font-bold mb-8">About Me</h1>

            <div className="prose dark:prose-invert">
                <p className="text-lg mb-6">
                    Hi, I&#39;m Görkem. I built projects to learn about stuff.
                </p>

                <h2 className="text-2xl font-bold mt-12 mb-4">Background</h2>
                <p className="mb-6">
                    I started programming in [year] and have been working professionally as a developer since [year].
                    My focus is on web technologies, particularly React, Node.js, and TypeScript.
                    I enjoy solving complex problems and sharing knowledge with the developer community.
                </p>

                <h2 className="text-2xl font-bold mt-12 mb-4">Skills</h2>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3">Languages</h3>
                    <ul className="list-disc pl-4 mb-6 space-y-1">
                        <li>JavaScript (ES6+)</li>
                        <li>TypeScript</li>
                        <li>HTML & CSS</li>
                        <li>SQL</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3">Frameworks & Libraries</h3>
                    <ul className="list-disc pl-4 mb-6 space-y-1">
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>Tailwind CSS</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3">Tools & Platforms</h3>
                    <ul className="list-disc pl-4 mb-6 space-y-1">
                        <li>Git</li>
                        <li>VS Code</li>
                        <li>Docker</li>
                        <li>AWS</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold mt-12 mb-4">Current Focus</h2>
                <p className="mb-6">
                    I&#39;m currently working on [current project or learning focus].
                    My primary interests include [your interests, e.g., web performance, accessibility, etc.].
                </p>

                <h2 className="text-2xl font-bold mt-12 mb-4">Connect</h2>
                <div className="flex space-x-4">
                    <Link
                        href="https://github.com/peacdo"
                        target="_blank"
                        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                        <Github size={20} />
                        <span>GitHub</span>
                    </Link>
                    <Link
                        href="https://linkedin.com/in/gorkemozyilmaz"
                        target="_blank"
                        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                        <Linkedin size={20} />
                        <span>LinkedIn</span>
                    </Link>
                    <Link
                        href="mailto:gorkemozyilmaz@outlook.com"
                        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                        <Mail size={20} />
                        <span>Email</span>
                    </Link>
                </div>

                <h2 className="text-2xl font-bold mt-12 mb-4">Site</h2>
                <p className="mb-6">
                    This website is built with Next.js and Tailwind CSS, deployed on Vercel.
                    The content is written in Markdown and the source code is available on{' '}
                    <Link
                        href="https://github.com/yourusername/website"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        GitHub
                    </Link>.
                </p>
            </div>
        </div>
    );
}