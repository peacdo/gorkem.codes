export interface Post {
    slug: string;
    title: string;
    date: string;
    content: string;
    excerpt: string;
    tags: string[];
}

export interface Project {
    title: string;
    description: string;
    tags: string[];
    githubUrl: string;
    demoUrl?: string;
    image?: string;
}
