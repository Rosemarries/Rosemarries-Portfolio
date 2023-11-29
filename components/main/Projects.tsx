import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 z-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/Portfolio_1.png"
          title="HTML/CSS Portfolio"
          description="A Project that I made for my HTML/CSS course at 42Bangkok. Using only HTML and CSS to create a responsive portfolio website. I also use a little bit of Javascript to make the website more interactive."
        />
        <ProjectCard
          src="/Autocorrect_1.png"
          title="Autocomplete / Autocorrect Word Suggestion"
          description="A Project that I made for my Linear Algebra course. Using Python and Math to create a program that can suggest the correct word based on the user's input."
        />
        <ProjectCard
          src="/TripInChon_1.png"
          title="Travel Forum Website"
          description="Using NextJS and NestJS to create a website that can be used as a forum for people who want to travel in Chonburi. The website also has a feature that can suggest the best place for the user to travel in Chonburi."
        />
      </div>
    </div>
  );
};

export default Projects;