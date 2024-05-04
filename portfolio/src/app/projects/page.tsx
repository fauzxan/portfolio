"use client";

import { useState, useEffect } from "react";
import CardProps from "../components/CardProps";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import Card from "../components/ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState<CardProps[]>([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Assuming projects.json is in the public folder
        const response = await fetch("/projectGallery.json");
        const data: CardProps[] = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);
  return (
    <div>
      <NavBar />
      <div className="mb-4 pt-20 font-extrabold tracking-wide leading-none text-black dark:text-white text-center text-3xl">
        Project Gallery
      </div>
      <div className="flex flex-row gap-1 flex-wrap justify-center px-2 mb-12 mt-12 sm:mt-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full sm:max-w-[100%] md:max-w-[20%] mb-4"
          >
            <Card
              name={project.name}
              description={project.description}
              tags={project.tags}
              imageSrc={project.imageSrc}
              documentation={project.documentation}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
