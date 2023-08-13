import React from "react";
import { Link, Outlet } from "react-router-dom";
import { SecondCustomMotion } from "../../utils/CustomMotion";
const Projects = () => {
  const activeNavItem = "/" + location.pathname.substring(1); // Extract the active segment from the URL

  const NavItem = ({ to, children }) => {
    return (
      <Link to={to}>
        <li
          className={`p-4 cursor-pointer ${
            activeNavItem === to
              ? "text-[#f8fafc]"
              : "hover:text-[#fb923c] text-[#9ca3af]"
          }`}
        >
          {children}
        </li>
      </Link>
    );
  };

  return (
    // <div className=" w-screen h-screen  md:flex justify-center">
    //   <div className=" w-5/6 flex flex-col justify-center ">
    //     <div className=" flex justify-start ">
    //       <NavItem className="py-1 px-3 " to="/projects/small">
    //         Small Project
    //       </NavItem>
    //       <NavItem className="py-1 px-3" to="/projects/big">
    //         Big Project
    //       </NavItem>
    //     </div>
    //     <SecondCustomMotion>
    //       <Outlet />
    //     </SecondCustomMotion>
    //   </div>
    // </div>
    <div className=" w-screen h-screen">
      <div className="mt-36 0 text-center mb-10">
        <h1 className="text-3xl font-bold my-1 ">Projects</h1>
        <p>Here's some of my project's list!</p>
      </div>
      <div className="  w-5/6  mx-auto">
        <div className=" flex justify-center md:justify-start ">
          <NavItem className="py-1 px-3 " to="/projects/small">
            Small Project
          </NavItem>
          <NavItem className="py-1 px-3" to="/projects/big">
            Big Project
          </NavItem>
        </div>
       
      </div>
      <div className="w-5/6  mx-auto">
          <SecondCustomMotion>
            <Outlet />
          </SecondCustomMotion>
        </div>
    </div>
  );
};

export default Projects;
