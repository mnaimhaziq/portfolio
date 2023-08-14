import React from "react";
import { Outlet } from "react-router-dom";
import { FirstCustomMotion } from "../utils/CustomMotion";

const Layout = () => {
  return (
      <Outlet />
  );
};

export default Layout;
