import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#f8fafc",
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="flex flex-col items-center gap-4 py-16"
      id="speciality"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.h1 
        className="text-3xl font-medium"
        variants={headerVariants}
      >
        Find By Speciality
      </motion.h1>
      
      <motion.p 
        className="sm:w-1/3 text-center text-sm"
        variants={headerVariants}
      >
        Simply browse through our extensive list of trusted Doctors, <br />{" "}
        schedule your appointment
      </motion.p>

      <motion.div 
        className="flex sm:justify-center gap-4 pt-5 w-full overflow-x-scroll overflow-y-hidden scrollbar-hide"
        variants={containerVariants}
      >
        {specialityData.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover="hover"
            className="flex flex-col items-center p-4 rounded-xl cursor-pointer"
          >
            <Link to={`/doctors/${item.speciality}`} className="flex flex-col items-center">
              <motion.div whileHover={{ scale: 1.1 }}>
                <img 
                  src={item.image} 
                  alt={item.speciality}
                  className="w-20 h-20 object-contain"
                />
              </motion.div>
              <p className="mt-2 font-medium text-center">{item.speciality}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SpecialityMenu;