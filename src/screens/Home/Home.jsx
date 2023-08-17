import React from "react";
import Typed from "react-typed";
import mypicture from "../../assets/mypicture1.jpeg";
import { LinkedIn, GitHub, Instagram, Code } from "@mui/icons-material";
import { FirstCustomMotion } from "../../utils/CustomMotion";
import "./Home.css"
export default function Home() {
  return (
    <FirstCustomMotion>
      <div className="h-screen w-screen  md:flex mt-40 md:mt-0">
        <div className="  w-full md:w-7/12  md:py-48 md:px-16 flex flex-col justify-center items-center">
          <div>
            <p className="text-xl font-bold px-10 pb-4 text-[#fb923c]  text-center md:text-left ">
              Hello, I'm Naim Haziq.
            </p>
            <h1 className="text-3xl md:text-5xl font-bold px-10 py-2 text-center md:text-left">
              Passionate, Ambitious <br />
              <Typed
                strings={[
                  "Malaysian Developer",
                  "Tech Enthusiast",
                  "Problem Solver",
                  "Software Engineer",
                ]}
                typeSpeed={60}
                backSpeed={30}
                backDelay={1500}
                loop
                style={{ color: "#fb923c" }}
                className="font-handwriting"
              />
            </h1>
            <h3 className="text-lg md:text-xl px-10 py-2  text-center md:text-left">
              University of Malaya Computer Science Graduate
            </h3>
            <div className="flex px-10 py-2 mb-10 md:mb-0 justify-center md:justify-start ">
              <a
                href="https://www.linkedin.com/in/naim-haziq-412852233/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 hover:text-[#a3a3a3]"
              >
                <LinkedIn />
              </a>
              <a
                href="https://github.com/mnaimhaziq"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 hover:text-[#a3a3a3]"
              >
                <GitHub />
              </a>
              <a
                href="https://www.instagram.com/mnaimhaziq/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 hover:text-[#a3a3a3]"
              >
                <Instagram />
              </a>
              <a
                href="https://codepen.io/Naim-Haziq"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 hover:text-[#a3a3a3]"
              >
                <Code />
              </a>
            </div>
          </div>
        </div>
        <div className=" w-full md:w-5/12 flex justify-center items-center">
        <div className=" rounded-lg  overflow-hidden custom-shape">
  <img src={mypicture} alt="naimpicture" className="w-48 md:w-80 rounded-lg" />
</div>

        </div>
      </div>
    </FirstCustomMotion>
  );
}
