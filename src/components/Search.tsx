// src/components/Search.tsx
'use client';

import { useCallback, useEffect, useState } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import Link from 'next/link';
import { BlogPostPreview } from '@/lib/blog';
import { useRouter } from 'next/navigation';

interface SearchProps {
    posts: BlogPostPreview[];
}

export function Search({ posts }: SearchProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<BlogPostPreview[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const router = useRouter();

    // Search logic
    const performSearch = useCallback((searchQuery: string) => {
        if (!searchQuery.trim()) {
            setResults([]);
            return;
        }

        const searchWords = searchQuery.toLowerCase().split(' ');
        const filtered = posts.filter(post => {
            const searchContent = `${post.title} ${post.excerpt} ${post.tags.join(' ')}`.toLowerCase();
            return searchWords.every(word => searchContent.includes(word));
        });

        setResults(filtered.slice(0, 5));
    }, [posts]);

    useEffect(() => {
        performSearch(query);
    }, [query, performSearch]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Open search with Cmd/Ctrl + K
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setIsOpen(true);
            }

            // Close with Escape
            if (e.key === 'Escape') {
                setIsOpen(false);
                setQuery('');
                setSelectedIndex(-1);
            }

            if (isOpen) {
                // Arrow key navigation
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    setSelectedIndex(prev =>
                        prev < results.length - 1 ? prev + 1 : prev
                    );
                }
                if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
                }
                // Enter to select
                if (e.key === 'Enter' && selectedIndex >= 0) {
                    e.preventDefault();
                    const selectedPost = results[selectedIndex];
                    if (selectedPost) {
                        router.push(`/blog/${selectedPost.slug}`);
                        setIsOpen(false);
                        setQuery('');
                        setSelectedIndex(-1);
                    }
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, results, selectedIndex, router]);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 text-sm text-[var(--secondary)] border border-[var(--border-color)] rounded-md hover:border-[var(--link-color)] transition-colors"
                aria-label="Search posts"
            >
                <SearchIcon size={16} />
                <span>Search</span>
                <kbd className="hidden md:inline-block text-xs border border-[var(--border-color)] rounded px-1.5">
                    ⌘K
                </kbd>
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 overflow-y-auto px-4 py-4 sm:py-20">
                    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-black/50"
                         onClick={() => setIsOpen(false)} />

                    <div className="relative mx-auto max-w-xl rounded-xl bg-[var(--background)] shadow-2xl ring-1 ring-[var(--border-color)]">
                        <div className="flex items-center border-b border-[var(--border-color)] px-4">
                            <SearchIcon size={20} className="text-[var(--secondary)]" />
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search posts..."
                                className="flex-1 bg-transparent px-4 py-4 text-[var(--font-color)] placeholder-[var(--secondary)] outline-none"
                                autoFocus
                            />
                            {query && (
                                <button
                                    onClick={() => setQuery('')}
                                    className="text-[var(--secondary)] hover:text-[var(--font-color)]"
                                >
                                    <X size={20} />
                                </button>
                            )}
                        </div>

                        {results.length > 0 && (
                            <ul className="max-h-[40vh] overflow-y-auto py-2">
                                {results.map((post, index) => (
                                    <li key={post.slug}>
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            onClick={() => {
                                                setIsOpen(false);
                                                setQuery('');
                                            }}
                                            className={`block px-4 py-3 hover:bg-[var(--background-secondary)] ${
                                                index === selectedIndex ? 'bg-[var(--background-secondary)]' : ''
                                            }`}
                                        >
                                            <h3 className="text-base font-medium text-[var(--font-color)]">
                                                {post.title}
                                            </h3>
                                            {post.excerpt && (
                                                <p className="mt-1 text-sm text-[var(--secondary)] line-clamp-2">
                                                    {post.excerpt}
                                                </p>
                                            )}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {query && results.length === 0 && (
                            <div className="p-6 text-center text-[var(--secondary)]">
                                No results found for "{query}"
                            </div>
                        )}

                        <div className="border-t border-[var(--border-color)] px-4 py-3 text-xs text-[var(--secondary)]">
                            <kbd className="mr-1 rounded border border-[var(--border-color)] px-1.5">↑</kbd>
                            <kbd className="mr-3 rounded border border-[var(--border-color)] px-1.5">↓</kbd>
                            to navigate
                            <kbd className="mx-3 rounded border border-[var(--border-color)] px-1.5">Enter</kbd>
                            to select
                            <kbd className="mx-3 rounded border border-[var(--border-color)] px-1.5">Esc</kbd>
                            to close
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}