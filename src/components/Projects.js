import Image from "next/image";
import { FolderGit2, ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FadeInOnScroll } from "./FadeInOnScroll";
import SectionTitle from "./SectionTitle";
import { featuredProjects, otherProjects } from "@/data/projects";

function StackList({ stack }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Built with">
      {stack.map((tech) => (
        <li key={tech} className="rounded bg-white/5 px-2.5 py-1 text-xs text-gray-300">
          {tech}
        </li>
      ))}
    </ul>
  );
}

function ProjectLinks({ project, name }) {
  if (!project.link && !project.source) return null;
  return (
    <div className="flex flex-wrap gap-5 text-sm font-medium">
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${name} (opens in a new tab)`}
          className="group/link inline-flex items-center gap-1 text-accent hover:text-white"
        >
          Live site
          <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>
      )}
      {project.source && (
        <a
          href={project.source}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Source code for ${name} on GitHub (opens in a new tab)`}
          className="inline-flex items-center gap-1.5 text-gray-300 hover:text-accent"
        >
          <SiGithub aria-hidden="true" className="size-4" />
          Source
        </a>
      )}
    </div>
  );
}

function FeaturedCard({ project }) {
  return (
    <article className="grid overflow-hidden rounded bg-tile md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
      <div className="relative flex min-h-48 items-center justify-center bg-linear-to-br from-accent/25 via-tile to-ink">
        {project.image ? (
          <Image
            src={project.image}
            alt={`Screenshot of ${project.name}`}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover object-top"
          />
        ) : (
          <FolderGit2 aria-hidden="true" className="size-14 text-accent/80" />
        )}
      </div>
      <div className="flex flex-col gap-4 p-7 md:p-9">
        <div>
          <p className="text-xs font-medium tracking-wide text-accent uppercase">{project.context}</p>
          <h3 className="mt-2 text-xl font-semibold md:text-2xl">{project.name}</h3>
        </div>
        <p className="text-sm leading-relaxed text-gray-300 md:text-base">{project.about}</p>
        <p className="text-sm leading-relaxed text-gray-400">
          <span className="font-semibold text-gray-200">My role: </span>
          {project.role}
        </p>
        <StackList stack={project.stack} />
        <ProjectLinks project={project} name={project.name} />
      </div>
    </article>
  );
}

function SmallCard({ project }) {
  return (
    <article className="flex h-full flex-col gap-4 rounded bg-tile p-6">
      <h4 className="font-semibold">{project.name}</h4>
      <p className="flex-1 text-sm leading-relaxed text-gray-400">{project.description}</p>
      <StackList stack={project.stack} />
      <ProjectLinks project={project} name={project.name} />
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-band py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle ghost="Portfolio">Projects</SectionTitle>

        <ul className="space-y-6">
          {featuredProjects.map((project) => (
            <li key={project.name}>
              <FadeInOnScroll>
                <FeaturedCard project={project} />
              </FadeInOnScroll>
            </li>
          ))}
        </ul>

        <h3 className="mt-16 mb-6 text-lg font-semibold text-gray-300">Smaller projects &amp; experiments</h3>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {otherProjects.map((project, index) => (
            <li key={project.name} className="h-full">
              <FadeInOnScroll delayOrder={index % 4} className="h-full">
                <SmallCard project={project} />
              </FadeInOnScroll>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
