import React from 'react'
import { motion } from 'framer-motion';

function GlassBorder({children,sx={}}) {
    
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
   
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...sx
      }}
    >
      <motion.div
        variants={fadeInUp}
        // className="feature-card"
        whileHover={{ y: -10 }}
        style={{
          backgroundColor: "rgba(31, 41, 55, 0.6)",
          backdropFilter: "blur(5px)",
          padding: "2rem",
          borderRadius: "0.75rem",
          border: "1px solid #374151",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease",
          width: "100%", // Ensures the card takes the width of the container
          // maxWidth: "450px", // Adjust max width for better responsiveness
        }}
      >
       {children}
      </motion.div>
    </div>
  
  )
}

export default GlassBorder
