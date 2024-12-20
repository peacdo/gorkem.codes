import { Metadata } from 'next';
import { getProjects } from '@/lib/projects';
import ProjectsList from './ProjectsList';

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Check out my projects and open source work',
};

export default async function ProjectsPage() {
    const projects = await getProjects();

    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
                <p className="mt-2 text-muted-foreground">
                    A collection of my projects, including open source libraries and applications.
                </p>
            </header>
            <ProjectsList initialProjects={projects} />
        </div>
    );
}