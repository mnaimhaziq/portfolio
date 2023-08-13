import React from "react";
import { Language, GitHub } from "@mui/icons-material";

const Card = ({ project }) => {
  const displayedTechnologies = project.technologiesUsed.slice(0, 3); // Get the first three technologies

  return (
    <div className="w-full h-full">
      <h3 className="text-xl my-3">{project.title}</h3>
      <p className="text-justify px-6 pt-2 ">{project.shortDescription}</p>
      <div className="text-start px-6 py-4 flex">
        {displayedTechnologies.map((technology) => (
          <div
            key={technology}
            className="w-fit py-1 mx-2 px-3 ring-1 ring-[#fb923c] rounded-3xl hover:bg-[#fb923c] hover:text-black"
          >
            {technology}
          </div>
        ))}
      </div>
      <div className="text-start px-6">
        <a
          href={project.websiteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3 hover:text-[#a3a3a3]"
        >
          <Language />
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3 hover:text-[#a3a3a3]"
        >
          <GitHub />
        </a>
      </div>
    </div>
  );
};

export default Card;
