
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Header = () => {
  // Mock assets - replace with your actual assets
  const assets = {
    group_profiles: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='112' height='40' viewBox='0 0 112 40'%3E%3Ccircle cx='20' cy='20' r='18' fill='%23e0f2fe' stroke='%23fff' stroke-width='2'/%3E%3Ccircle cx='40' cy='20' r='18' fill='%23bbdefb' stroke='%23fff' stroke-width='2'/%3E%3Ccircle cx='60' cy='20' r='18' fill='%2390caf9' stroke='%23fff' stroke-width='2'/%3E%3Ccircle cx='80' cy='20' r='18' fill='%2364b5f6' stroke='%23fff' stroke-width='2'/%3E%3C/svg%3E",
    arrow_icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%234f46e5' d='M8 0l8 8-8 8V0z'/%3E%3C/svg%3E",
    header_img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Crect width='400' height='500' fill='%23f8fafc'/%3E%3Ccircle cx='200' cy='150' r='60' fill='%234f46e5'/%3E%3Crect x='170' y='220' width='60' height='80' fill='%236366f1' rx='5'/%3E%3Crect x='160' y='320' width='80' height='100' fill='%237c3aed' rx='10'/%3E%3Ctext x='200' y='450' text-anchor='middle' fill='%234f46e5' font-size='16' font-family='Arial'%3EDoctor%3C/text%3E%3C/svg%3E"
  };

  return (
    <div className="relative z-10 bg-gradient-to-br from-emerald-400 via-green-400 to-teal-500 flex flex-col md:flex-row rounded-xl overflow-hidden px-6 md:px-10 lg:px-20 shadow-2xl">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-36 -translate-y-36"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-30 translate-y-30"></div>
      </div>
             
      {/* Left side */}
      <motion.div
        className="md:w-1/2 flex flex-col items-start justify-center gap-6 py-12 md:py-[8vw] m-auto relative z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Book Appointment <br /> 
          <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            With Trusted Doctors
          </span>
        </motion.h1>

        <motion.div 
          className="flex flex-col md:flex-row items-center gap-4 text-white text-sm font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative">
            <img 
              className="w-28 drop-shadow-lg" 
              src={assets.group_profiles} 
              alt="Profiles" 
            />
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-xs font-bold text-white">✓</span>
            </div>
          </div>
          <p className="text-center md:text-left text-white/90 leading-relaxed backdrop-blur-sm bg-white/10 p-4 rounded-xl border border-white/20">
            Simply browse through our extensive list of trusted doctors,<br />
            schedule your appointment easily.
          </p>
        </motion.div>

        <motion.a
          href="#speciality"
          className="group mt-3 flex items-center gap-3 bg-white text-emerald-600 font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          Book Appointment 
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </motion.a>

        {/* Trust indicators */}
        <motion.div 
          className="flex items-center gap-2 text-white/80 text-sm mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex">
            {[1,2,3,4,5].map((star) => (
              <span key={star} className="text-yellow-300 text-lg">★</span>
            ))}
          </div>
          <span className="ml-2">Trusted by 10,000+ patients</span>
        </motion.div>
      </motion.div>

      {/* Right side */}
      <motion.div
        className="md:w-1/2 relative"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="relative"
          animate={{ 
            y: [-5, 5, -5],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* <img
            className="w-full md:absolute bottom-0 h-auto rounded-xl shadow-2xl border-4 border-white/20"
            src={assets.header_img}
            alt="Header"
          /> */}
          
          {/* Floating badge */}
          <motion.div 
            className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/30"
            animate={{ 
              y: [0, -8, 0],
              rotate: [-1, 1, -1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="text-sm font-semibold text-emerald-600">Available Now</div>
            <div className="text-xs text-gray-600">Book instantly</div>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-6 w-16 h-16 bg-yellow-300/30 rounded-full blur-xl"></div>
        <div className="absolute top-20 right-10 w-12 h-12 bg-pink-300/30 rounded-full blur-lg"></div>
      </motion.div>
    </div>
  );
};

export default Header;