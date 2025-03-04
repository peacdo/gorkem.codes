// This is a server component that can export metadata
import ProjectsClient from "./projects-client";
import projectsData from "@/data/projects.json";

export const metadata = {
  title: "Projects",
  description: "Projects by Görkem Özyılmaz - Learning through building",
};

const Projects = () => {
  return <ProjectsClient projects={projectsData} />;
};

export default Projects;
