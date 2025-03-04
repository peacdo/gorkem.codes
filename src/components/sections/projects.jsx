import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Renamed from Projects to ProjectCard for clarity
const ProjectCard = ({ category, title, description, techstacks, link, showLoading = true }) => {
  const [isLoading, setIsLoading] = useState(showLoading);

  useEffect(() => {
    if (!showLoading) return;
    
    // Reduce loading time to 300ms since we're using local data
    // This gives just enough time for a smooth animation without being annoying
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [showLoading]);

  return (
    <Card className="flex h-full grow flex-col border-2 border-primary bg-main shadow-dark dark:shadow-light">
      <CardHeader className="pb-2">
        {isLoading ? (
          <>
            <Skeleton className="mb-2 h-4 w-1/4 rounded-lg" />
            <Skeleton className="h-6 w-1/2" />
          </>
        ) : (
          <>
            <p className="text-xs font-medium text-primary/60">{category}</p>
            <h1 className="text-xl font-bold text-primary">{title}</h1>
          </>
        )}
      </CardHeader>
      <CardContent className="flex-1 pb-10">
        {isLoading ? (
          <>
            <Skeleton className="mb-4 h-4 w-full" />
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
              {[...Array(3)].map((_, index) => (
                <Skeleton key={index} className="h-6 w-full" />
              ))}
            </div>
          </>
        ) : (
          <>
            <p className="mb-4 text-sm text-primary/80">{description}</p>
            <div className="flex flex-wrap gap-2">
              {techstacks.map((tech, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="rounded-full border-2 border-primary bg-transparent px-3 py-1 text-xs text-primary"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </>
        )}
      </CardContent>
      <CardFooter className="flex items-end justify-end">
        {isLoading ? (
          <Skeleton className="h-10 w-24" />
        ) : (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button className="group flex items-center gap-2 transition-all hover:gap-3">
              Learn More 
              <FaArrowRight className="transition-transform group-hover:translate-x-1" size="14px" />
            </Button>
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
