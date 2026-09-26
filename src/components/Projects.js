'use client';

import { FolderGit2, ArrowUpRight } from 'lucide-react';
import { FadeInOnScroll } from './FadeInOnScroll';
import SectionTitle from './SectionTitle';

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
  {
    id: 8,
    name: "Mitra Helpdesk System",
    description: "A helpdesk ticketing system for managing and tracking IT support requests within an organization. Features ticket creation, assignment, status updates, and reporting.",
    stack: ["Next.js", "Tailwind CSS", "FastAPI"],
    link: "https://helpdesk.mitra.mw",
  },
];

const hasLink = (link) => link && link !== '#';

function Card({ project }) {
  return (
    <>
      <FolderGit2 aria-hidden="true" className="size-8 text-accent" />
      <h3 className="mt-5 text-lg font-semibold transition-colors group-hover:text-accent">
        {project.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-400">{project.description}</p>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Built with">
        {project.stack.map((tech) => (
          <li key={tech} className="rounded bg-white/5 px-2.5 py-1 text-xs text-gray-300">
            {tech}
          </li>
        ))}
      </ul>
      {hasLink(project.link) && (
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent">
          View Project
          <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      )}
    </>
  );
}

export default function Projects() {
  const tile = 'group flex h-full flex-col rounded bg-tile p-7 transition-colors hover:bg-[#2a2a2a]';

  return (
    <section id="projects" className="bg-band py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle ghost="Portfolio">Projects</SectionTitle>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <li key={project.id} className="h-full">
              <FadeInOnScroll delayOrder={index % 3} className="h-full">
                {hasLink(project.link) ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className={tile}>
                    <Card project={project} />
                  </a>
                ) : (
                  <div className={tile}>
                    <Card project={project} />
                  </div>
                )}
              </FadeInOnScroll>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
