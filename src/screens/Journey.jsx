import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants/index.js";

const Journey = () => {
  return (
    <div className="w-screen"> 
      <div className="h-screen over  md:flex">
        <div className="w-full flex flex-col justify-center items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold px-10 py-2 text-center md:text-left">
              Embark on My Journey
            </h1>
            <h3 className="text-lg md:text-xl px-10 py-2 text-center">
              Exploring the Chapters of My Life
            </h3>
          </div>
        </div>
      </div>
      <div>
      <div className='mt-20 flex flex-col text-start'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
      </div>
    </div>
  );
};

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}

      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full bg-[#1d1836] rounded-full'>
         
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.year}</h3>
        <p
          className='text-secondary text-[12px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.highlight}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
export default Journey;
