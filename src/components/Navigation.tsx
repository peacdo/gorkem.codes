'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Search } from './Search';
import { ThemeSwitch } from './ThemeSwitch';
import { BlogPostPreview } from '@/lib/blog';

export default function Navigation() {
    const pathname = usePathname();
    const [posts, setPosts] = useState<BlogPostPreview[]>([]);
    const [isScrolled, setIsScrolled] = useState(false);

    // Fetch posts for search
    useEffect(() => {
        fetch('/api/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    // Handle scroll effect
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
        <header className={`sticky top-0 z-40 w-full backdrop-blur flex-none transition-[background-colors,border-colors] duration-500 ${
            isScrolled
                ? 'bg-[var(--background)]/75 border-b border-[var(--border-color)]'
                : 'bg-transparent'
        }`}>
            <nav className="max-w-2xl mx-auto px-4">
                <div className="py-4 flex items-center justify-between">
                    {/* Main Navigation */}
                    <div className="flex items-center gap-6">
                        {navItems.map(({ label, path }) => (
                            <Link
                                key={path}
                                href={path}
                                className={`text-sm font-medium transition-colors hover:text-[var(--link-color)] ${
                                    pathname === path
                                        ? 'text-[var(--link-color)]'
                                        : 'text-[var(--font-color)]'
                                }`}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>

                    {/* Right side items */}
                    <div className="flex items-center gap-4">
                        <Search posts={posts} />
                        <ThemeSwitch />
                    </div>
                </div>
            </nav>
        </header>
    );
}