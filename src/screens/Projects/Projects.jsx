import React, { useState } from "react";
import { FirstCustomMotion } from "../../utils/CustomMotion";
import { projects } from "../../constants";
import ProjectCard from "../../components/ProjectCard";

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredProjects =
    selectedFilter !== "All"
      ? projects.filter((project) => project.type === selectedFilter)
      : projects;

  return (
    <FirstCustomMotion>
      <div className="w-screen">
        <div className="h-screen flex">
          <div className="w-full flex flex-col justify-center items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold px-10 py-2 text-center md:text-center">
                Curious to See What I've Accomplished?
              </h1>
              <h3 className="text-lg md:text-xl px-10 py-2 text-center">
                Explore a Showcase of My Notable Projects
              </h3>
            </div>
          </div>
        </div>
        <div className="w-5/6 mx-auto my-6">
          <ul className="grid grid-cols-3 md:flex md:justify-start  list-none">
            <div
              className={`cursor-pointer list-item py-1 px-3 ${
                selectedFilter === "All" ? "text-[#fb923c] font-semibold" : ""
              }`}
              onClick={() => setSelectedFilter("All")}
            >
              All
            </div>
            <div
              className={`cursor-pointer list-item py-1 px-3 ${
                selectedFilter === "big" ? "text-[#fb923c] font-semibold" : ""
              }`}
              onClick={() => setSelectedFilter("big")}
            >
              Big Projects
            </div>
            <div
              className={`cursor-pointer list-item py-1 px-3 ${
                selectedFilter === "smalld"
                  ? "text-[#fb923c] font-semibold"
                  : ""
              }`}
              onClick={() => setSelectedFilter("small")}
            >
              Small Projects
            </div>
          </ul>
        </div>

        <div className="w-11/12 mx-auto mb-80">
          <div className="grid md:grid-cols-3 gap-10">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </FirstCustomMotion>
  );
};

export default Projects;
