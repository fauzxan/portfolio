'use client';

import React, { useState, useEffect } from "react";
import Card from "./ProjectCard";
import CardProps from "./CardProps";


export default function Carousel() {
	const [projects, setProjects] = useState<CardProps[]>([])
	useEffect(() => {
        const fetchProjects = async () => {
            try {
                // Assuming projects.json is in the public folder
                const response = await fetch('/projects.json');
                const data: CardProps[] = await response.json();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

  return (
    <div className="box mb-20 mt-20 mx-auto lg:px-44">

      <div className="mb-4 md:mt-44 xs:mt-24 font-extrabold tracking-wide leading-none text-black dark:text-white text-center md:text-2xl lg:text-3xl">
							Project Highlights
			</div>
      <div 
        className="mb-4 font-extrabold tracking-wide leading-none text-black dark:text-white text-center dark:hover:bg-black hover:bg-white dark:hover:bg-gradient-to-l hover:bg-gradient-to-l dark:hover:from-sky-950 hover:from-sky-500 dark:hover:from-sky-500 hover:from-sky-950 md:text-sm lg:text-md"
      >
        <a href="./projects">View Project Gallery</a>
      </div>
      <div className="flex flex-row gap-x-2 flex-nowrap overflow-x-auto">
        {projects.map((project, index) => (
          <div key={index} className="flex-shrink-0 w-full sm:max-w-[100%] md:max-w-[25%] mb-4">
            <Card name={project.name} description={project.description} tags={project.tags} imageSrc={project.imageSrc} documentation={project.documentation}/>
          </div>
        ))}
      </div>
      
    </div>
  );
}
