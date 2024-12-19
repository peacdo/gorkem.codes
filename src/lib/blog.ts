// src/lib/blog.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import rehypePrismPlus from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    content: string;
    excerpt: string;
    tags: string[];
    featured?: boolean;
    series?: string;
}

export type BlogPostPreview = Omit<BlogPost, 'content'>;

// Helper function to format dates consistently
function formatDate(date: string | Date): string {
    const d = new Date(date);
    if (isNaN(d.getTime())) {
        // If invalid date, return today's date
        return new Date().toISOString().split('T')[0];
    }
    return d.toISOString().split('T')[0]; // Returns YYYY-MM-DD format
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const processedContent = await unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings, {
            behavior: 'append',
            properties: { className: ['anchor'], ariaHidden: true },
            content: {
                type: 'text',
                value: '#'
            }
        })
        .use(rehypePrismPlus, { ignoreMissing: true })
        .use(rehypeStringify)
        .process(content);

    return {
        slug,
        title: data.title,
        date: formatDate(data.date),
        content: processedContent.toString(),
        excerpt: data.excerpt || '',
        tags: data.tags || [],
        featured: data.featured || false,
        series: data.series || undefined
    };
}

export async function getAllPosts(): Promise<BlogPostPreview[]> {
    if (!fs.existsSync(postsDirectory)) {
        console.warn('Posts directory does not exist:', postsDirectory);
        return [];
    }

    const files = fs.readdirSync(postsDirectory);
    const posts = await Promise.all(
        files
            .filter((filename) => filename.endsWith('.md'))
            .map(async (filename) => {
                const slug = filename.replace(/\.md$/, '');
                const fullPath = path.join(postsDirectory, filename);
                const fileContents = fs.readFileSync(fullPath, 'utf8');
                const { data } = matter(fileContents);

                return {
                    slug,
                    title: data.title,
                    date: formatDate(data.date),
                    excerpt: data.excerpt || '',
                    tags: data.tags || [],
                    featured: data.featured || false,
                    series: data.series || undefined
                };
            })
    );

    // Sort posts by date in descending order
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostsByTag(tag: string): Promise<BlogPostPreview[]> {
    const allPosts = await getAllPosts();
    return allPosts.filter(post => post.tags.includes(tag));
}

export async function getPostsBySeries(series: string): Promise<BlogPostPreview[]> {
    const allPosts = await getAllPosts();
    return allPosts.filter(post => post.series === series);
}

export async function getFeaturedPosts(): Promise<BlogPostPreview[]> {
    const allPosts = await getAllPosts();
    return allPosts.filter(post => post.featured);
}

export async function getAllTags(): Promise<string[]> {
    const posts = await getAllPosts();
    const tags = new Set(posts.flatMap(post => post.tags));
    return Array.from(tags).sort();
}

export async function getAllSeries(): Promise<string[]> {
    const posts = await getAllPosts();
    const series = new Set(posts.map(post => post.series).filter(Boolean) as string[]);
    return Array.from(series).sort();
}

// Utility function to format display date
export function formatDisplayDate(date: string): string {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Helper function to estimate reading time
export function estimateReadTime(content: string): number {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
}