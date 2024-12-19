import React from 'react';
import Link from 'next/link';
import { Github, Mail, Linkedin } from 'lucide-react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-8">
                    {/* Left Sidebar */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-8 space-y-8">
                            {/* Profile Section */}
                            <div className="space-y-4">
                                <Link href="/" className="block font-bold text-xl hover:text-[var(--link-color)]">
                                    Görkem Özyılmaz
                                </Link>
                                <p className="text-[var(--secondary)]">
                                    Student and developer learning through building projects
                                </p>
                            </div>

                            {/* Navigation */}
                            <nav className="space-y-2">
                                <Link href="/blog" className="block hover:text-[var(--link-color)]">Blog</Link>
                                <Link href="/projects" className="block hover:text-[var(--link-color)]">Projects</Link>
                                <Link href="/about" className="block hover:text-[var(--link-color)]">About</Link>
                            </nav>

                            {/* Social Links */}
                            <div className="space-y-2">
                                <Link
                                    href="https://github.com/peacdo"
                                    target="_blank"
                                    className="flex items-center gap-2 hover:text-[var(--link-color)]"
                                >
                                    <Github size={18} />
                                    <span>GitHub</span>
                                </Link>
                                <Link
                                    href="https://linkedin.com/in/gorkemozyilmaz"
                                    target="_blank"
                                    className="flex items-center gap-2 hover:text-[var(--link-color)]"
                                >
                                    <Linkedin size={18} />
                                    <span>LinkedIn</span>
                                </Link>
                                <Link
                                    href="mailto:gorkemozyilmaz@outlook.com"
                                    className="flex items-center gap-2 hover:text-[var(--link-color)]"
                                >
                                    <Mail size={18} />
                                    <span>Email</span>
                                </Link>
                            </div>

                            {/* Additional Info */}
                            <div className="text-sm text-[var(--secondary)]">
                                <p>Currently learning DevOps and web development</p>
                                <p className="mt-2">Based in Ankara, Türkiye</p>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="pt-8 lg:pt-0">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;