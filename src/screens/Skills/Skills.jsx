import React, { useState } from "react";
import { FirstCustomMotion } from "../../utils/CustomMotion";
import { skills } from "../../constants/index";
import SkillCard from "../../components/SkillCard";
import { Link } from "react-router-dom";

const Skills = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredSkills = selectedFilter !== "All" ? skills.filter(skill => skill.type === selectedFilter) : skills;

  return (
    <FirstCustomMotion>
      <div className="w-screen">
        <div className="h-screen flex">
          <div className="w-full flex flex-col justify-center items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold px-10 py-2 text-center md:text-center">
                About My Skills
              </h1>
              <h3 className="text-lg md:text-xl px-10 py-2 text-center">
                As a software engineer, I learned a lot of skills anywhere and
                anytime.
                <br />
                More experience is needed to build better skills.
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
        selectedFilter === "Frontend" ? "text-[#fb923c] font-semibold" : ""
      }`}
      onClick={() => setSelectedFilter("Frontend")}
    >
      Frontend
    </div>
    <div
      className={`cursor-pointer list-item py-1 px-3 ${
        selectedFilter === "Backend" ? "text-[#fb923c] font-semibold" : ""
      }`}
      onClick={() => setSelectedFilter("Backend")}
    >
      Backend
    </div>
    <div
      className={`cursor-pointer list-item py-1 px-3 ${
        selectedFilter === "Database" ? "text-[#fb923c] font-semibold" : ""
      }`}
      onClick={() => setSelectedFilter("Database")}
    >
      Database
    </div>
    <div
      className={`cursor-pointer list-item py-1 px-3 ${
        selectedFilter === "Language" ? "text-[#fb923c] font-semibold" : ""
      }`}
      onClick={() => setSelectedFilter("Language")}
    >
      Languages
    </div>
    <div
      className={`cursor-pointer list-item py-1 px-3 ${
        selectedFilter === "DevOps" ? "text-[#fb923c] font-semibold" : ""
      }`}
      onClick={() => setSelectedFilter("DevOps")}
    >
      DevOps
    </div>
  </ul>
</div>

        <div className="w-11/12 mx-auto mb-80">
          <div className="grid md:grid-cols-3 gap-10">
            {filteredSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </FirstCustomMotion>
  );
};

export default Skills;
