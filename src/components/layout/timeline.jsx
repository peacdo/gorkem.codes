import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const TimelineItem = ({ role, company, year, responsibility, techstacks }) => {
  const technologies = techstacks.join(" • ");

  return (
    <li className="ms-6 p-5">
      <span className="absolute mt-1.5 -start-2 rounded-full w-3 h-3 bg-primary" />
      <div className="mb-4 space-y-1">
        <h2 className="text-xl font-bold font-cera">{role}</h2>
        <p className="text-sm">{company}</p>
        <p className="text-sm">{year}</p>
      </div>
      <div className="mb-4 space-y-1">
        <p className="font-semibold text-base mb-3">Key Responsibilities</p>
        <p>{responsibility}</p>
      </div>
      <div className="space-y-1">
        <p className="font-semibold text-base mb-1">Technology Used:</p>
        <span className="text-sm">{technologies}</span>
      </div>
    </li>
  );
};

const TimelineSkeleton = () => (
  <li className="ms-6 p-5">
    <span className="absolute mt-1.5 -start-2 rounded-full w-3 h-3 bg-primary" />
    <div className="mb-4 space-y-2">
      <Skeleton className="h-6 w-1/3" />
      <Skeleton className="h-4 w-1/4" />
      <Skeleton className="h-4 w-1/5" />
    </div>
    <div className="mb-4 space-y-2">
      <Skeleton className="h-5 w-1/4 mb-2" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-4/5" />
    </div>
    <div className="space-y-2">
      <Skeleton className="h-5 w-1/4 mb-1" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  </li>
);

const Timeline = ({ experiences, isLoading }) => {
  if (isLoading) {
    return (
      <ol className="relative border-s-2 border-primary">
        {[...Array(3)].map((_, index) => (
          <TimelineSkeleton key={index} />
        ))}
      </ol>
    );
  }

  return (
    <ol className="relative border-s-2 border-primary">
      {experiences.map((experience, index) => (
        <TimelineItem key={index} {...experience} />
      ))}
    </ol>
  );
};

export default Timeline;
