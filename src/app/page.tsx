// src/app/page.tsx
import Link from 'next/link';
import { getAllPosts, formatDisplayDate } from '@/lib/blog';

export default async function Home() {
    const posts = await getAllPosts();
    const latestPosts = posts.slice(0, 5);

    return (
        <div className="homepage">
            <section className="hero mb-16">
                <h1 className="text-4xl font-bold text-[var(--primary)]">
                    Hey, I&#39;m Görkem
                </h1>
                <p className="text-lg text-[var(--primary)]">
                    I&#39;m a student learning software development and writing about the things I learn.
                    I focus on DevOps and full-stack development.
                </p>
            </section>

            <section className="latest-posts">
                <h2 className="text-2xl font-bold mb-6 text-[var(--primary)]">Latest Posts</h2>
                <ul className="space-y-3">
                    {latestPosts.map(post => (
                        <li key={post.slug} className="flex justify-between items-center py-2">
                            <Link
                                href={`/blog/${post.slug}`}
                                className="text-[var(--font-color)] hover:text-[var(--link-color)] transition-colors"
                            >
                                {post.title}
                            </Link>
                            <time className="text-[var(--secondary)] text-sm ml-4">
                                {formatDisplayDate(post.date)}
                            </time>
                        </li>
                    ))}
                </ul>
                <Link
                    href="/blog"
                    className="inline-block mt-8 text-[var(--link-color)] hover:text-[var(--link-hover)]"
                >
                    View all posts →
                </Link>
            </section>
        </div>
    );
}