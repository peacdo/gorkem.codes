"use client";

import React, { useState, useEffect, useMemo } from "react";
import _ from "lodash";

import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaSpotify,
  FaEnvelope,
} from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import Avatar from "@/components/avatar";
import AnimatedIcon from "@/components/floating-icon";
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
import LetterboxdIcon from "@/components/icons/letterboxd";

const Hero = () => {
  const [randomIcons, setRandomIcons] = useState([null, null, null]);
  
  // Memoize the icons array so it doesn't change on every render
  const icons = useMemo(() => [
    ReactIcon,
    NodeIcon,
    NextIcon,
    TailwindIcon,
    JavaScriptIcon,
    TypeScriptIcon,
    PythonIcon,
    LuaIcon,
    SQLIcon,
    GitIcon,
    KubernetesIcon,
    DockerIcon,
    LinuxIcon,
  ], []);

  // Only run once on component mount
  useEffect(() => {
    const selectedIcons = _.sampleSize(icons, 3);
    setRandomIcons(selectedIcons);
  }, [icons]);

  if (randomIcons.includes(null)) {
    return null;
  }

  return (
    <div className="mx-auto flex flex-col gap-10 md:w-[800px]">
      <div className="flex flex-col justify-center gap-10 md:flex-row md:justify-between">
        <div className="order-last md:order-1 md:w-[500px]">
          <div className="mb-6 flex flex-col gap-y-2 text-center md:text-start">
            <h1 className="text-4xl font-bold">Görkem Özyılmaz</h1>
            <h2 className="text-lg font-medium">Student and Developer</h2>
            <p>
              Learning through building projects. Passionate about DevOps, Kubernetes, and cloud infrastructure.
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <a href="mailto:gorkemozyilmaz@outlook.com">
              <Button size="lg">
                Contact Me <FaEnvelope className="ml-2" size="14px" />
              </Button>
            </a>
          </div>
          <div className="mt-10 flex justify-center space-x-5 md:justify-start">
            <a href="https://github.com/peacdo" target="_blank">
              <FaGithub size="24px" className="opacity-60 hover:opacity-100" />
            </a>
            <a href="https://letterboxd.com/peacdo" target="_blank">
              <LetterboxdIcon size="24px" className="opacity-60 hover:opacity-100" />
            </a>
            <a href="https://www.linkedin.com/in/gorkemozyilmaz/" target="_blank">
              <FaLinkedin
                size="24px"
                className="opacity-60 hover:opacity-100"
              />
            </a>
            <a href="https://open.spotify.com/user/9xxxd9buw9bpmbrojfhpb53me?si=f00c685bd92441eb" target="_blank">
              <FaSpotify
                size="24px"
                className="opacity-60 hover:opacity-100"
              />
            </a>
          </div>
        </div>
        <div className="relative order-1 mx-auto md:order-last">
          <Avatar />
          <AnimatedIcon
            IconComponent={randomIcons[0]}
            className="-right-6 -top-4 h-8 w-8"
            animateProps={{ y: [0, -10, 0] }}
            transitionProps={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
          <AnimatedIcon
            IconComponent={randomIcons[1]}
            className="-left-5 top-12 h-10 w-10"
            animateProps={{ y: [0, 10, 0] }}
            transitionProps={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
          <AnimatedIcon
            IconComponent={randomIcons[2]}
            className="-right-8 bottom-8 h-12 w-12"
            animateProps={{ y: [0, -8, 0] }}
            transitionProps={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </div>
      </div>
      <div className="space-y-6">
        <div>
          <h5 className="mb-4 font-cera text-lg font-medium">About Me</h5>
          <p className="mb-4">
            Hi, I&apos;m Görkem. I build projects to learn about stuff. I&apos;m passionate about exploring different areas of software development and expanding my knowledge through hands-on experience.
          </p>
          <p className="mb-4">
            I started programming in middle school as a coding hobbyist in 2018 and later moved into game modding. Since 2023, I&apos;ve been studying computer science with a focus on DevOps. I recently completed an internship where I built and deployed applications using Kubernetes, Docker, and CI/CD pipelines. I enjoy solving complex problems and sharing knowledge with the developer community.
          </p>
          <p className="mb-4">
            Outside of work, I enjoy reading, or watching TV series and documentaries. Traveling is another one of my passions, and I&apos;m always looking for new adventures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
