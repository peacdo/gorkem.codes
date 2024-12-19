// src/app/blog/[slug]/page.tsx
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Clock, Calendar, Tag } from 'lucide-react';

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: Props) {
    const resolvedParams = await params;

    if (!resolvedParams?.slug) {
        notFound();
    }

    try {
        const post = await getPostBySlug(resolvedParams.slug);
        const readingTime = Math.ceil(post.content.trim().split(/\s+/).length / 200); // words per minute: 200

        return (
            <article className="blog-post max-w-none prose dark:prose-invert">
                <header className="mb-8 not-prose">
                    <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                    <div className="flex flex-wrap gap-4 text-sm text-[var(--secondary)]">
                        <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <time dateTime={post.date}>
                                {new Date(post.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </time>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock size={16} />
                            <span>{readingTime} min read</span>
                        </div>
                        {post.tags && post.tags.length > 0 && (
                            <div className="flex items-center gap-2 flex-wrap">
                                <Tag size={16} />
                                {post.tags.map(tag => (
                                    <Link
                                        key={tag}
                                        href={`/blog/category/${tag}`}
                                        className="hover:text-[var(--link-color)]"
                                    >
                                        #{tag}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </header>

                <div
                    dangerouslySetInnerHTML={{ __html: post.content }}
                    className="blog-content"
                />

                <footer className="mt-16 pt-8 border-t border-[var(--border-color)] not-prose">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg font-bold">Share this post</h3>
                        <div className="flex gap-4">
                            <a
                                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://yourdomain.com/blog/${resolvedParams.slug}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--secondary)] hover:text-[var(--link-color)]"
                            >
                                Twitter
                            </a>
                            <a
                                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://yourdomain.com/blog/${resolvedParams.slug}`)}&title=${encodeURIComponent(post.title)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--secondary)] hover:text-[var(--link-color)]"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </footer>
            </article>
        );
    } catch (error) {
        console.error('Error loading blog post:', error);
        notFound();
    }
}