import SectionTitle from "./SectionTitle";
import { FadeInOnScroll } from "./FadeInOnScroll";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="bg-ink py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle ghost="Resume">Experience</SectionTitle>

        <ol className="relative ml-3 border-l border-white/15 md:ml-4">
          {experience.map((item, i) => (
            <li key={`${item.role}-${item.org}`} className="relative pb-12 pl-8 last:pb-0 md:pl-12">
              <span
                aria-hidden="true"
                className="absolute top-1 -left-[9px] size-[17px] rounded-full border-4 border-ink bg-accent ring-1 ring-accent"
              />
              <FadeInOnScroll delayOrder={i % 2}>
                <span className="inline-block rounded-full border border-accent/60 px-3 py-0.5 text-xs font-medium text-accent">
                  {item.date}
                </span>
                <h3 className="mt-3 text-lg font-semibold md:text-xl">
                  {item.role}
                  <span className="font-normal text-gray-400"> · {item.org}</span>
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-300 md:text-base">
                  {item.summary}
                </p>
                <ul className="mt-3 max-w-3xl list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-gray-400 marker:text-accent">
                  {item.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                  {item.stack.map((tech) => (
                    <li key={tech} className="rounded bg-white/5 px-2.5 py-1 text-xs text-gray-300">
                      {tech}
                    </li>
                  ))}
                </ul>
              </FadeInOnScroll>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
