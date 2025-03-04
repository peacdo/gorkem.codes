"use client";

import { useState, useEffect } from "react";
import Layout from "@/components/layout/layout";
import Timeline from "@/components/layout/timeline";

const ExperienceClient = ({ experiences }) => {
  const [isTransitionVisible, setTransitionVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTransitionVisible(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout
      showHeader
      title="Experience"
      subtitle="My journey as a student developer."
    >
      <div className="flex flex-col">
        <Timeline experiences={experiences} isLoading={isTransitionVisible} />
      </div>
    </Layout>
  );
};

export default ExperienceClient; 