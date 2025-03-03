// src/components/Search.tsx
'use client';

import { useCallback, useEffect, useState } from 'react';
import { Search as SearchIcon, Calendar, Tag } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { BlogPostPreview } from '@/lib/blog';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { cn } from '@/utils/cn';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from 'cmdk';

interface SearchProps {
    posts: BlogPostPreview[];
}

export function Search({ posts }: SearchProps) {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    const runCommand = useCallback((command: () => unknown) => {
        setOpen(false);
        command();
    }, []);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-1.5 text-muted-foreground bg-secondary/30 hover:bg-secondary/50 rounded-full transition-colors w-40 font-mono"
                aria-label="Search posts"
            >
                <SearchIcon size={18} />
                <span className="text-sm">Search</span>
                <kbd className="ml-auto text-xs bg-secondary/50 px-1.5 rounded font-mono">
                    ⌘K
                </kbd>
            </button>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="overflow-hidden p-0 sm:max-w-2xl sm:rounded-xl">
                    <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
                        <div className="flex items-center border-b px-4" cmdk-input-wrapper="">
                            <SearchIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                            <CommandInput
                                placeholder="Search posts..."
                                className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>
                        <CommandList className="max-h-[300px] overflow-y-auto overflow-x-hidden">
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup heading="Posts">
                                {posts.map((post) => (
                                    <CommandItem
                                        key={post.slug}
                                        value={post.title}
                                        onSelect={() => {
                                            runCommand(() => router.push(`/blog/${post.slug}`));
                                        }}
                                        className={cn(
                                            "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
                                            "aria-selected:bg-accent aria-selected:text-accent-foreground",
                                            "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                                            "flex flex-col items-start gap-1"
                                        )}
                                    >
                                        <div className="flex items-center gap-2 w-full">
                                            <span className="font-medium flex-1">{post.title}</span>
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                <Calendar size={12} />
                                                <span>
                          {new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                          })}
                        </span>
                                            </div>
                                        </div>
                                        {post.excerpt && (
                                            <p className="text-sm text-muted-foreground line-clamp-1 w-full">
                                                {post.excerpt}
                                            </p>
                                        )}
                                        {post.tags && post.tags.length > 0 && (
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                <Tag size={12} />
                                                {post.tags.map((tag) => (
                                                    <span key={tag} className="bg-secondary/50 px-1.5 py-0.5 rounded">
                            {tag}
                          </span>
                                                ))}
                                            </div>
                                        )}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </DialogContent>
            </Dialog>
        </>
    );
}