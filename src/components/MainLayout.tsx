// src/components/MainLayout.tsx
import React from 'react';
import Link from 'next/link';
import { Github, Mail, Linkedin } from 'lucide-react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-8">
                    <aside className="hidden lg:block">
                        <div className="sticky top-8 space-y-8">
                            <div className="space-y-4">
                                <Link href="/" className="block font-bold text-xl hover:text-primary">
                                    Görkem Özyılmaz
                                </Link>
                                <p className="text-muted-foreground">
                                    Student and developer learning through building projects
                                </p>
                            </div>

                            <nav className="space-y-2">
                                <Link href="/blog" className="block hover:text-primary">Blog</Link>
                                <Link href="/projects" className="block hover:text-primary">Projects</Link>
                                <Link href="/about" className="block hover:text-primary">About</Link>
                            </nav>

                            <div className="space-y-2">
                                <Link
                                    href="https://github.com/peacdo"
                                    target="_blank"
                                    className="flex items-center gap-2 hover:text-primary"
                                >
                                    <Github size={18} />
                                    <span>GitHub</span>
                                </Link>
                                <Link
                                    href="https://linkedin.com/in/gorkemozyilmaz"
                                    target="_blank"
                                    className="flex items-center gap-2 hover:text-primary"
                                >
                                    <Linkedin size={18} />
                                    <span>LinkedIn</span>
                                </Link>
                                <Link
                                    href="mailto:gorkemozyilmaz@outlook.com"
                                    className="flex items-center gap-2 hover:text-primary"
                                >
                                    <Mail size={18} />
                                    <span>Email</span>
                                </Link>
                            </div>

                            <div className="text-sm text-muted-foreground">
                                <p>Currently learning DevOps and web development</p>
                                <p className="mt-2">Based in Ankara, Türkiye</p>
                            </div>
                        </div>
                    </aside>

                    <main className="pt-8 lg:pt-0">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;