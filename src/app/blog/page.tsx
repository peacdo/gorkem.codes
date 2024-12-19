// src/app/blog/page.tsx
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export default async function BlogPage() {
    const posts = await getAllPosts();

    // Get unique categories from posts
    const categories = [...new Set(posts.flatMap(post => post.tags))].sort();

    return (
        <div className="blog-page">
            <h1 className="text-3xl font-bold mb-8">Blog</h1>

            <div className="categories mb-8">
                <h2 className="text-xl font-bold mb-4">Categories</h2>
                <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                        <Link
                            key={category}
                            href={`/blog/category/${category}`}
                            className="px-3 py-1 bg-[var(--code-background)] rounded-full hover:opacity-80"
                        >
                            {category}
                        </Link>
                    ))}
                </div>
            </div>

            <div className="posts grid gap-8">
                {posts.map(post => (
                    <article key={post.slug} className="post-preview">
                        <h2 className="text-2xl mb-2">
                            <Link href={`/blog/${post.slug}`} className="hover:text-[var(--link-color)]">
                                {post.title}
                            </Link>
                        </h2>
                        <div className="meta text-sm text-[var(--secondary)] mb-2">
                            {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                            {post.tags && post.tags.length > 0 && (
                                <span className="ml-4">
                  {post.tags.map(tag => `#${tag}`).join(', ')}
                </span>
                            )}
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