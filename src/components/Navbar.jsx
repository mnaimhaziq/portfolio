import React, { useState } from "react";
import { Close, Menu } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const location = useLocation(); // Get the current URL location
  const activeNavItem = location.pathname.substring(1); // Extract the active segment from the URL

  const handleNav = () => {
    setNav(!nav);
  };

  const NavItem = ({ to, children, handleNav }) => (
    <Link to={to} onClick={handleNav}>
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

  return (
    <nav className="flex justify-between items-center h-24 w-full mx-auto px-4 text-white font-bold bg-[#212324]">
      <ul className="hidden md:flex mx-auto ">
        <NavItem to="home">Home</NavItem>
        <NavItem to="journey">Journey</NavItem>
        <NavItem to="skills">Skills</NavItem>
        <NavItem to="projects">Projects</NavItem>
        <NavItem to="blog">Blog</NavItem>
      </ul>
      <div onClick={handleNav} className="block md:hidden ml-auto">
        {nav ? <Close size={20} /> : <Menu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 p-6 font-bold"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <NavItem handleNav={handleNav} to="home">
          Home
        </NavItem>
        <NavItem handleNav={handleNav} to="journey">
          Journey
        </NavItem>
        <NavItem handleNav={handleNav} to="skills">
          Skills
        </NavItem>
        <NavItem handleNav={handleNav} to="projects">
          Projects
        </NavItem>
        <NavItem handleNav={handleNav} to="blog">
          Blog
        </NavItem>
      </ul>
    </nav>
  );
}
