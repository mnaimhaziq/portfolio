import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

const Layout = () => {
  return (
    <motion.div
      className="container text-center"
      initial={{ y: 20, opacity: 0 }} // Initial position below with opacity 0
      animate={{ y: 0, opacity: 1 }} // Final position at its original place with opacity 1
      exit={{ y: -20, opacity: 0 }} // Exit animation, moving slightly up with opacity 0
      transition={{ duration: 0.35 }}
    >
      <Outlet />
    </motion.div>
  );
};

export default Layout;
