import React from "react";
import { Language, GitHub } from "@mui/icons-material";

const ProjectCard = ({ project, index }) => {
  const displayedTechnologies = project.technologiesUsed.slice(0, 3); // Get the first three technologies

  return (
    <div  className="md:p-4 rounded shadow-none hover:shadow-2xl hover:ring-2 ring-[#fb923c] hover:ring-opacity-50 h-[32rem] bg-black"
    >
    <div className="w-full h-full">
      <h3 className="text-xl h-[3rem]">{project.title}</h3>
      <div className="rounded-2xl h-[10rem]">
        <img src={project.image} alt=""  className="w-full h-[10rem]"/>
      </div>
      <p className="text-justify h-[10rem] p-4">{project.shortDescription}</p>
      <div className="flex m-[1rem] justify-center">
        {displayedTechnologies.map((technology, index) => (
          <div
            key={technology}
            className={`text-center px-3 mx-2 ring-1 ring-[#fb923c] rounded-3xl hover:bg-[#fb923c] hover:text-black ${
              index >= 2 && "hidden md:block" // Hide the third technology on xs screens
            }`}
          >
            {technology}
          </div>
        ))}
      </div>
      <div className="text-center m-[1.5rem]">
        {project.websiteLink && <a
          href={project.websiteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3 hover:text-[#a3a3a3]"
        >
          <Language />
        </a>}
        {project.githubLink &&<a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3 hover:text-[#a3a3a3]"
        >
          <GitHub />
        </a>}
      </div>
    </div>
    </div>
  );
};

export default ProjectCard;
