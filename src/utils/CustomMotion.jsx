import React from 'react'
import { motion } from 'framer-motion';
const FirstCustomMotion = ({children}) => {
  return (
    <motion.div
      className="container text-center"
      initial={{ y: 20, opacity: 0 }} // Initial position below with opacity 0
      animate={{ y: 0, opacity: 1 }} // Final position at its original place with opacity 1
      exit={{ y: -20, opacity: 0 }} // Exit animation, moving slightly up with opacity 0
      transition={{ duration: 0.35 }}
    >
      {children}
      </motion.div>
  )
}

const SecondCustomMotion = ({children}) => {
  return (
    <motion.div
      className="container text-center"
      initial={{  opacity: 0 }} // Initial position below with opacity 0
      animate={{ opacity: 1 }} // Final position at its original place with opacity 1
      exit={{  opacity: 0 }} // Exit animation, moving slightly up with opacity 0
      transition={{ duration: 0.35 }}
    >
      {children}
      </motion.div>
  )
}


export {FirstCustomMotion,SecondCustomMotion};