"use client";
import { useState } from "react";
import Image from "next/image";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-black/20 shadow-none sm:px-18 px-6 py-4 flex items-center justify-between h-[80px]">
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

      {/* Right Side Buttons */}
      <div className="flex items-center gap-4">
        <a
          href="/Joseph Dzanja Curriculum Vitae.pdf"
          download
          className="border border-white text-white px-4 py-2 rounded-md text-sm hover:bg-white hover:text-black transition"
        >
          Curriculum Vitae | CV
        </a>

        {/* Menu Icon */}
        <button
          className="text-white text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          <HiOutlineMenuAlt3 />
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full right-4 mt-2 w-48 bg-black/80 text-white p-4 rounded-lg shadow-lg">
          <ul className="space-y-2">
            <li>
              <a href="#home" className="block hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="block hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="block hover:underline">
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className="block hover:underline">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="block hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="block hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
