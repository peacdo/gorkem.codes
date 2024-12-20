import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Project {
    title: string;
    description: string;
    github: string;
    year?: number;
    featured?: boolean;
    tags?: string[];
    links?: Array<{
        label: string;
        url: string;
        isExternal: boolean;
    }>;
}

export async function getProjects(): Promise<Project[]> {
    const projectsFile = path.join(process.cwd(), 'content/projects.md');
    const fileContents = fs.readFileSync(projectsFile, 'utf8');
    const { data } = matter(fileContents);

    return data.projects.map((project: any) => ({
        ...project,
        featured: project.featured ?? false,
        tags: project.tags ?? [],
    }));
}