import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsFile = path.join(process.cwd(), 'content/projects.md');

export interface Project {
    title: string;
    description: string;
    github: string;
    demo?: string;
    tags: string[];
    featured: boolean;
}

export function getProjects(): Project[] {
    const fileContents = fs.readFileSync(projectsFile, 'utf8');
    const { data } = matter(fileContents);
    return data.projects;
}
