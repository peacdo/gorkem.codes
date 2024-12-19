// src/app/blog/category/[tag]/page.tsx
import { getAllTags, getPostsByTag } from '@/lib/blog';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const tags = await getAllTags();
    return tags.map((tag) => ({
        tag: tag,
    }));
}

export default async function CategoryPage({
                                               params: { tag },
                                           }: {
    params: { tag: string };
}) {
    const decodedTag = decodeURIComponent(tag);
    const posts = await getPostsByTag(decodedTag);

    if (!posts.length) {
        notFound();
    }

    return (
        <div className="max-w-2xl">
            <header className="mb-8">
                <h1 className="text-3xl font-bold mb-2">#{decodedTag}</h1>
                <p className="text-[var(--secondary)]">
                    {posts.length} post{posts.length === 1 ? '' : 's'}
                </p>
            </header>

            <div className="space-y-8">
                {posts.map((post) => (
                    <article key={post.slug} className="post-preview">
                        <h2 className="text-xl mb-2">
                            <Link
                                href={`/blog/${post.slug}`}
                                className="hover:text-[var(--link-color)]"
                            >
                                {post.title}
                            </Link>
                        </h2>
                        <div className="text-sm text-[var(--secondary)] mb-2">
                            {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </div>
                        {post.excerpt && (
                            <p className="text-[var(--secondary)]">{post.excerpt}</p>
                        )}
                    </article>
                ))}
            </div>
        </div>
    );
}