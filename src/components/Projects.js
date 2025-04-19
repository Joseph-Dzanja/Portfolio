'use client'

import Link from 'next/link'

const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://example.com/portfolio"
  },
  {
    id: 2,
    name: "Inventory Manager",
    stack: ["Vue.js", "Node.js", "MySQL"],
    link: "https://example.com/inventory"
  },
  {
    id: 3,
    name: "Blog Platform",
    stack: ["React", "Express", "MongoDB"],
    link: "https://example.com/blog"
  },
  // Add more projects here
]

export default function Projects() {
  return (
    <div id="projects" className="py-16 px-4 sm:px-8 md:px-16 bg-gray-900 text-white">
      <h1 className='pb-4 text-2xl'>Projects</h1>
      <div className="w-full border-b border-gray-600 mb-8">
        <div className="-mb-[1px] inline-block border-b-2 border-blue-500 px-4 py-2 text-xl font-semibold">
          Featured
        </div>
      </div>

      
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gray-800 hover:bg-gray-700 transition rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-700"
          >
            <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition">
              {project.name}
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              {project.stack.join(" • ")}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
