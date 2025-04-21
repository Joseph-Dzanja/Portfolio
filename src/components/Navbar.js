"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = e => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !buttonRef.current?.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-black/20 sm:px-18 px-6 py-4 flex items-center justify-between h-[80px]">
      {/* Profile Picture */}
      <div className="flex items-center gap-3">
        <Image
          src="/passport.jpg"
          alt="Profile"
          width={50}
          height={50}
          className="rounded-full object-cover"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <a
          href="/Joseph Dzanja Curriculum Vitae.pdf"
          download
          className="border border-white text-white px-4 py-2 rounded-md text-sm hover:bg-white hover:text-black transition"
        >
          Curriculum Vitae | CV
        </a>

        {/* Menu Icon */}
        <motion.button
          ref={buttonRef}
          onClick={toggleMenu}
          animate={{ rotate: isOpen ? 90 : 0, scale: isOpen ? 1.2 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="text-white text-2xl focus:outline-none sm:text-3xl md:text-4xl" // Increase size for larger screens
        >
          <HiOutlineMenuAlt3 />
        </motion.button>
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-4 mt-2 w-56 bg-black/90 text-white p-5 rounded-xl shadow-xl z-40"
          >
            <ul className="space-y-3 text-sm font-medium sm:text-base md:text-lg"> {/* Increase font size */}
              {["Home", "About", "Skills", "Experience", "Projects", "Contact"].map(
                text => (
                  <li key={text}>
                    <a
                      href={`#${text.toLowerCase()}`}
                      className="block hover:text-sky-400 transition-colors"
                    >
                      {text}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
