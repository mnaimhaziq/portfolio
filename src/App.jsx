import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Journey from "./screens/Journey";
import Home from "./screens/Home";
import Layout from "./screens/Layout";
import Projects from "./screens/Projects/Projects";
import SmallProject from "./screens/Projects/SmallProjects";
import BigProjects from "./screens/Projects/BigProjects";
function App() {
  // const location = useLocation();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   window.scrollTo(0, 0); // Scroll to the top when location changes
  // }, [location]);

  return (
    <BrowserRouter>
      <div className="min-h-screen min-w-screen bg-[#171718] text-white font-sans">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/projects" element={<Projects />}>
              <Route path="small" element={<SmallProject />} />
              <Route path="big" element={<BigProjects />} />
            </Route>
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
