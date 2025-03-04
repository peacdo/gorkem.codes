import ExperienceClient from "./experience-client";
import { experiences } from "@/constants/index.jsx";

export const metadata = {
  title: "Experience",
  description: "Görkem Özyılmaz's journey as a student and DevOps engineer",
};

const Experience = () => {
  return <ExperienceClient experiences={experiences} />;
};

export default Experience;
