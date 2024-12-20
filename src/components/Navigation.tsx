// src/components/Navigation.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search } from './Search';
import { ThemeSwitch } from './ThemeSwitch';
import { BlogPostPreview } from '@/lib/blog';
import { useEffect, useState } from 'react';
import { cn } from '@//utils/cn';

export default function Navigation() {
    const pathname = usePathname();
    const [posts, setPosts] = useState<BlogPostPreview[]>([]);
    const [isScrolled, setIsScrolled] = useState(false);

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
                <div className="py-4 flex items-center justify-between">
                    <div className="flex items-center gap-6">
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

                    <div className="flex items-center gap-4">
                        <Search posts={posts} />
                        <ThemeSwitch />
                    </div>
                </div>
            </nav>
        </header>
    );
}