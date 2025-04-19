"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Languages from "./Languages";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  const tabs = [
    { id: "skills", label: "Skills" },
    { id: "languages", label: "Programming Languages" },
    { id: "education", label: "Education" },
  ];

  const tabContent = {
    skills: (
      <div className="flex flex-wrap justify-center gap-6">
        {[
          "Problem Solving",
          "Web Development",
          "Version Control (Git)",
          "Team Collaboration",
          "Responsive Design",
          "Debugging",
          "UI/UX Awareness",
          "Testing & QA",
        ].map((skill) => (
          <div
            key={skill}
            className="bg-white text-gray-800 px-6 py-4 shadow-md border border-gray-200 hover:shadow-lg transition duration-300 text-center text-base font-medium w-full sm:w-[45%] md:w-[30%] lg:w-[22%]"
          >
            {skill}
          </div>
        ))}
      </div>
    ),
    languages: <Languages />,
    education: (
      <ul className="list-disc list-inside text-lg space-y-2 text-black">
        <li>BSc in Computer Systems and Security, 2024</li>
        <li>Certified in Web Security and Backend Systems</li>
      </ul>
    ),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className="min-h-screen w-full sm:w-4/5 m-auto p-8">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h1
              className="text-center text-3xl font-semibold mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              What I Can Do
            </motion.h1>

            <motion.div
              className="flex mb-8 border-b border-gray-300 justify-center flex-wrap gap-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-6 py-3 text-lg font-medium transition-colors duration-300 ease-in-out focus:outline-none
                    ${
                      activeTab === tab.id
                        ? "text-blue-600"
                        : "text-gray-500 hover:text-blue-500"
                    }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <span className="absolute left-0 bottom-0 h-1 w-full bg-blue-600 rounded-full"></span>
                  )}
                </button>
              ))}
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              {tabContent[activeTab]}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TabSection;
