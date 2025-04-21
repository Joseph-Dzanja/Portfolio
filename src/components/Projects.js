"use client";

import { FadeInOnScroll } from './FadeInOnScroll';
import Link from 'next/link';

export const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    description: "A modern personal website to showcase my work, skills, and contact info. Features smooth scroll animations and responsive design.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "#",
  },
  {
    id: 2,
    name: "LUANAR official website",
    description: "Official website for the Lilongwe University of Agriculture and Natural Resources. I was part of the team in developing this website",
    stack: ["HTML", "BootStrap", "PHP"],
    link: "https://luanar.ac.mw",
  },
  {
    id: 3,
    name: "Job Search Site",
    description: "A simple crud application where visitors can view, add, delete and update developer jobs. Built for practice purposes to learn vue.js",
    stack: ["VueJs", "Express", "Json Server"],
    link: "https://joblookup.netlify.app",
  },
  {
    id: 4,
    name: "Sketch Pad App",
    description: "Simple sketchpad app where you can make basic pixel drawings, draw on multiple canvas sizes and use colors of your choice",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://jdzanja.netlify.app",
  },
  {
    id: 5,
    name: "Jumpha Poultry Management System (In Progress)",
    description: "A web application for performing feed calculations, tracking batch inventory and business planning in small-scale poultry farms. Built with role-based access and clean UI. (Still in Progress)",
    stack: ["Vue.js", "Node.js", "MySQL"],
    link: "",
  },
  {
    id: 6,
    name: "Tic Tac Toe",
    description: "A simple tic tac toe game, built for fun and practice",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://joseph-dzanja.github.io/Tic-Tac-Toe/",
  },
  {
    id: 7,
    name: "Old Portfolio Website",
    description: "My former portfolio website built with regular HTML, CSS and JavaScript",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://jhdzanja.netlify.app",
  },
];

export default function Projects() {
  return (
    <div id="projects" className="py-16 px-4 sm:px-8 md:px-16 bg-gray-900 text-white">
      <h1 className="pb-4 text-2xl">Projects</h1>
      <div className="w-full border-b border-gray-600 mb-8">
        <div className="-mb-[1px] inline-block border-b-2 border-blue-500 px-4 py-2 text-xl font-semibold">
          Featured
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <FadeInOnScroll key={project.id} delayOrder={index}>
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800 hover:bg-gray-700 transition rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-700 flex flex-col justify-between min-h-[250px] cursor-pointer transform hover:scale-105 focus:outline-none active:scale-95" // Added active scale for tap feedback
            >
              <div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700 text-sm text-gray-300 flex flex-wrap gap-2">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-xs px-2 py-1 rounded-full text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          </FadeInOnScroll>
        ))}
      </div>
    </div>
  );
}
