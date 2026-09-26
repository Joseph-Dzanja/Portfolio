"use client";
import { useState, useEffect, useRef } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const links = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Highlight the link for the section in view.
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.toLowerCase());
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !buttonRef.current?.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    const handleKey = (e) => e.key === "Escape" && setIsOpen(false);

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const linkClass = (id) =>
    `transition-colors ${active === id ? "text-accent" : "text-gray-200 hover:text-accent"}`;

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-300 ${
        scrolled || isOpen ? "bg-ink/95 shadow-lg shadow-black/30 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="text-2xl font-bold tracking-tight">
          Dzanja<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map((text) => {
            const id = text.toLowerCase();
            return (
              <li key={text}>
                <a href={`#${id}`} className={linkClass(id)} aria-current={active === id ? "true" : undefined}>
                  {text}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          ref={buttonRef}
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="cursor-pointer text-3xl text-white md:hidden"
        >
          {isOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-white/10 bg-ink md:hidden"
          >
            <ul className="px-6 py-4">
              {links.map((text) => {
                const id = text.toLowerCase();
                return (
                  <li key={text}>
                    <a href={`#${id}`} onClick={() => setIsOpen(false)} className={`block py-3 font-medium ${linkClass(id)}`}>
                      {text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
