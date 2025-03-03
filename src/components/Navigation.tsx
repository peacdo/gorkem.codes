// src/components/Navigation.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search } from './Search';
import { ThemeSwitch } from './ThemeSwitch';
import { BlogPostPreview } from '@/lib/blog';
import { useEffect, useState } from 'react';
import { cn } from '@//utils/cn';
import { Menu, X, Github, Mail, Linkedin, Film, Music } from 'lucide-react';

export default function Navigation() {
    const pathname = usePathname();
    const [posts, setPosts] = useState<BlogPostPreview[]>([]);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        fetch('/api/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Blog', path: '/blog' },
        { label: 'Projects', path: '/projects' },
        { label: 'About', path: '/about' },
    ];

    return (
        <header className={cn(
            'sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500',
            isScrolled ? 'border-b border-border bg-background/75' : 'bg-transparent'
        )}>
            <nav className="max-w-2xl mx-auto px-4">
                <div className="h-16 flex items-center justify-between">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-muted-foreground hover:text-foreground"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X size={20} />
                        ) : (
                            <Menu size={20} />
                        )}
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center flex-1 gap-8">
                        {navItems.map(({ label, path }) => (
                            <Link
                                key={path}
                                href={path}
                                className={cn(
                                    'nav-link text-sm font-medium transition-colors',
                                    pathname === path ? 'active' : ''
                                )}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>

                    {/* Right Side Items */}
                    <div className="flex items-center gap-4">
                        <Search posts={posts} />
                        <ThemeSwitch />
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div
                    className={cn(
                        'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
                        isMenuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
                    )}
                >
                    <div className="py-6 space-y-6 border-t border-border">
                        <div className="md:hidden py-4 mb-6 text-center">
                            <p className="text-sm text-muted-foreground">
                                Student and developer learning through building projects
                            </p>
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

                        {/* Navigation Links */}
                        <div className="space-y-2">
                            {navItems.map(({ label, path }) => (
                                <Link
                                    key={path}
                                    href={path}
                                    className={cn(
                                        'block py-3 px-2 text-base font-medium rounded-lg transition-colors',
                                        pathname === path 
                                            ? 'bg-primary/10 text-primary' 
                                            : 'hover:bg-muted'
                                    )}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}