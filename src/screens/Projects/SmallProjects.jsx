import React from "react";
import Card from "../../components/Card";
import { projects } from "../../constants/index.js";

const SmallProjects = () => {
  return (
    <div className="min-h-min p-4">
      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-4 rounded shadow-none hover:shadow-2xl hover:ring-2 ring-[#fb923c] hover:ring-opacity-50 h-80 bg-black"
          >
            <Card project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallProjects;
