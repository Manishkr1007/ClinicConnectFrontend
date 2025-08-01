import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const Contact = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, type: "spring", stiffness: 100 }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      backgroundColor: "rgba(180, 50, 35, 255)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Animated Header */}
      <motion.div 
        style={{backgroundColor:'rgba(214,69,52,255)'}}
        className="text-white py-8 shadow-md"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl font-bold text-center"
          variants={headerVariants}
        >
          Contact Us
        </motion.h1>
      </motion.div>

      {/* Intro Text with animation */}
      <motion.div 
        className="max-w-3xl mx-auto mt-8 px-4 text-center"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <p className="text-gray-700 text-lg">
          Welcome to <span className="font-semibold" style={{color: 'rgba(214,69,52,255)'}}>ClinicConnect</span>, your trusted partner in managing your healthcare needs conveniently and efficiently. We understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records. Feel free to contact us using the form below.
        </p>
      </motion.div>

      {/* Contact Form with staggered animations */}
      <motion.div 
        className="max-w-3xl mx-auto mt-10 px-4 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.form 
          className="bg-white shadow-md rounded-lg p-8 space-y-6"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <motion.input
              whileFocus={{ 
                scale: 1.02,
                boxShadow: "0 0 0 2px rgba(214,69,52,0.5)"
              }}
              type="text"
              placeholder="Your full name"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <motion.input
              whileFocus={{ 
                scale: 1.02,
                boxShadow: "0 0 0 2px rgba(214,69,52,0.5)"
              }}
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-gray-700 font-semibold mb-2">Subject</label>
            <motion.input
              whileFocus={{ 
                scale: 1.02,
                boxShadow: "0 0 0 2px rgba(214,69,52,0.5)"
              }}
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <motion.textarea
              whileFocus={{ 
                scale: 1.02,
                boxShadow: "0 0 0 2px rgba(214,69,52,0.5)"
              }}
              placeholder="Write your message..."
              rows="5"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg resize-none focus:outline-none"
            ></motion.textarea>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-2">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              type="submit"
              style={{backgroundColor: 'rgba(214,69,52,255)'}}
              className="text-white px-6 py-3 rounded-lg transition w-full font-semibold text-lg"
            >
              Send Message
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>

      {/* Footer */}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;