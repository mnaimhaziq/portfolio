import React from "react";
import { Outlet } from "react-router-dom";
import { FirstCustomMotion } from "../utils/CustomMotion";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="fixed top-0 w-full z-50">
    <Navbar />
    <Outlet />
  </div>
      
  );
};

export default Layout;
