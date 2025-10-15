import { motion } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";
import { FaCoffee } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 80; // Approximate navbar height
      const sectionTop = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 w-full px-6 py-4 backdrop-blur-lg bg-black/10 shadow-lg z-50"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo and Brand */}
        <motion.a 
          href="/"
          className="flex items-center space-x-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaCoffee className="text-2xl text-yellow-400" />
          <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Café Delight
          </span>
        </motion.a>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="relative text-sm font-medium group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
            <motion.span
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-400 origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          <DarkModeToggle />
        </div>
      </div>
    </motion.nav>
  );
}