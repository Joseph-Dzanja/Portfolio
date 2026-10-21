import { GraduationCap } from "lucide-react";
import { education } from "@/data/experience";

export default function Education() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {education.map((edu) => (
        <article key={edu.degree} className="rounded bg-tile p-7">
          <GraduationCap aria-hidden="true" className="size-8 text-accent" />
          <h3 className="mt-4 text-lg font-semibold">{edu.degree}</h3>
          <p className="mt-1 text-sm text-gray-400">{edu.institution}</p>
          <p className="mt-1 text-sm text-accent">{edu.year}</p>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">{edu.details}</p>
        </article>
      ))}
    </div>
  );
}
