"use client";

import ProjectCard from "@/components/sections/projects";
import Layout from "@/components/layout/layout";

const ProjectsClient = ({ projects }) => {
  return (
    <Layout
      showHeader
      title="Projects"
      subtitle="A collection of things I've built."
    >
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <ProjectCard {...project} showLoading={false} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsClient; 