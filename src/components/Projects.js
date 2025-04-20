'use client';

import { FadeInOnScroll } from './FadeInOnScroll';
import Link from 'next/link';

export const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    description: "A modern personal website to showcase my work, skills, and contact info. Features smooth scroll animations and responsive design.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://example.com/portfolio",
  },
  {
    id: 2,
    name: "Inventory Manager",
    description: "A web app for tracking batch inventory and business planning in small-scale poultry farms. Built with role-based access and clean UI.",
    stack: ["Vue.js", "Node.js", "MySQL"],
    link: "https://example.com/inventory",
  },
  {
    id: 3,
    name: "Blog Platform",
    description: "A full-featured blogging platform with markdown support, user authentication, and real-time comments.",
    stack: ["React", "Express", "MongoDB"],
    link: "https://example.com/blog",
  },
  {
    id: 4,
    name: "Task Tracker",
    description: "Simple but powerful to-do app with deadline reminders, project tagging, and light/dark themes.",
    stack: ["Vue 3", "Pinia", "Firebase"],
    link: "https://example.com/task-tracker",
  },
  {
    id: 5,
    name: "Weather App",
    description: "Minimal weather dashboard fetching real-time data with dynamic icons and location-based forecasts.",
    stack: ["React", "OpenWeatherMap API", "Tailwind"],
    link: "https://example.com/weather",
  },
  {
    id: 6,
    name: "Finance Tracker",
    description: "An expense tracker to help users manage income, categorize spending, and visualize trends over time.",
    stack: ["Next.js", "Supabase", "Chart.js"],
    link: "https://example.com/finance",
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
              className="group bg-gray-800 hover:bg-gray-700 transition rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-700 flex flex-col justify-between min-h-[250px]"
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
