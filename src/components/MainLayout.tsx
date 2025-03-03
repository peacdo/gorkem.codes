import React from 'react';
import Link from 'next/link';
import { Github, Mail, Linkedin, Film, Music } from 'lucide-react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen">
            <div className="max-w-6xl mx-auto px-4 py-4 md:py-8">
                <div className="md:grid md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] md:gap-8">
                    {/* Mobile Info Banner */}
                    <div className="md:hidden py-4 mb-6 text-center">
                        <p className="text-sm text-muted-foreground">
                            Student and developer learning through building projects
                        </p>
                        {/* Mobile Social Links */}
                        <div className="flex justify-center gap-4 mt-4">
                            <Link
                                href="https://github.com/peacdo"
                                target="_blank"
                                className="p-2 hover:text-primary"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </Link>
                            <Link
                                href="https://linkedin.com/in/gorkemozyilmaz"
                                target="_blank"
                                className="p-2 hover:text-primary"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </Link>
                            <Link
                                href="mailto:gorkemozyilmaz@outlook.com"
                                className="p-2 hover:text-primary"
                                aria-label="Email"
                            >
                                <Mail size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Desktop Sidebar */}
                    <aside className="hidden md:block">
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
                                    href="https://letterboxd.com/peacdo"
                                    target="_blank"
                                    className="flex items-center gap-2 hover:text-primary"
                                >
                                    <Film size={18} />
                                    <span>Letterboxd</span>
                                </Link>
                                <Link
                                    href="https://open.spotify.com/user/9xxxd9buw9bpmbrojfhpb53me?si=f00c685bd92441eb"
                                    target="_blank"
                                    className="flex items-center gap-2 hover:text-primary"
                                >
                                    <Music size={18} />
                                    <span>Spotify</span>
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

                    {/* Main Content */}
                    <main className="md:pt-0">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;