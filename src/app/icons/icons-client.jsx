"use client";

import React from "react";
import Layout from "@/components/layout/layout";

// Import all tech icons
import ReactIcon from "@/components/icons/react";
import NodeIcon from "@/components/icons/node";
import NextIcon from "@/components/icons/next";
import TailwindIcon from "@/components/icons/tailwind";
import JavaScriptIcon from "@/components/icons/javascript";
import TypeScriptIcon from "@/components/icons/typescript";
import PythonIcon from "@/components/icons/python";
import LuaIcon from "@/components/icons/lua";
import SQLIcon from "@/components/icons/sql";
import GitIcon from "@/components/icons/git";
import KubernetesIcon from "@/components/icons/kubernetes";
import DockerIcon from "@/components/icons/docker";
import LinuxIcon from "@/components/icons/linux";

const IconDisplay = ({ Icon, name }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 border-2 border-primary rounded-lg bg-main">
      <Icon size="64px" className="mb-4" />
      <span className="text-lg font-medium">{name}</span>
    </div>
  );
};

const IconsClient = () => {
  const icons = [
    { Icon: ReactIcon, name: "React" },
    { Icon: NodeIcon, name: "Node.js" },
    { Icon: NextIcon, name: "Next.js" },
    { Icon: TailwindIcon, name: "Tailwind CSS" },
    { Icon: JavaScriptIcon, name: "JavaScript" },
    { Icon: TypeScriptIcon, name: "TypeScript" },
    { Icon: PythonIcon, name: "Python" },
    { Icon: LuaIcon, name: "Lua" },
    { Icon: SQLIcon, name: "SQL" },
    { Icon: GitIcon, name: "Git" },
    { Icon: KubernetesIcon, name: "Kubernetes" },
    { Icon: DockerIcon, name: "Docker" },
    { Icon: LinuxIcon, name: "Linux" },
  ];

  return (
    <Layout
      showHeader
      title="Tech Icons"
      subtitle="All the tech icons used around my avatar"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {icons.map((icon, index) => (
          <IconDisplay key={index} Icon={icon.Icon} name={icon.name} />
        ))}
      </div>
    </Layout>
  );
};

export default IconsClient; 