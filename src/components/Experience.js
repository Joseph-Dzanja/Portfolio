import SectionTitle from "./SectionTitle";
import { FadeInOnScroll } from "./FadeInOnScroll";

const experience = [
  {
    date: "2024 – Present",
    title: "Freelance Web Developer",
    description:
      "Built a professional web application for a client in collaboration with a friend. Handled both frontend and backend development using Vue 3, Node.js, Express, and MySQL. Implemented features like role-based access, batch inventory management, and business planning.",
  },
  {
    date: "2024",
    title: "ICT Volunteer – LUANAR",
    description:
      "Volunteered at the Lilongwe University of Agriculture and Natural Resources, providing support in ICT operations. Assisted with software development, software installations, hardware troubleshooting, and general tech support for staff and students.",
  },
  {
    date: "2021 – 2024",
    title: "BSc in Computer Systems and Security",
    description:
      "Graduated with distinction from the Malawi University of Science and Technology. Gained a strong foundation in programming, information systems, cybersecurity, and database management. Completed various personal projects ranging from simple games to complex systems.",
  },
  {
    date: "Ongoing",
    title: "Personal Projects & Learning",
    description:
      "Continuously learning and building tools and websites using technologies like Next.js, Vue, Tailwind CSS, Node.js, and PHP. Exploring artificial intelligence, mobile development, and security best practices.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-ink py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle ghost="Resume">Experience</SectionTitle>

        <ol className="relative ml-3 border-l border-white/15 md:ml-4">
          {experience.map((item, i) => (
            <li key={item.title} className="relative pb-12 pl-8 last:pb-0 md:pl-12">
              <span
                aria-hidden="true"
                className="absolute top-1 -left-[9px] size-[17px] rounded-full border-4 border-ink bg-accent ring-1 ring-accent"
              />
              <FadeInOnScroll delayOrder={i % 2}>
                <span className="inline-block rounded-full border border-accent/60 px-3 py-0.5 text-xs font-medium text-accent">
                  {item.date}
                </span>
                <h3 className="mt-3 text-lg font-semibold md:text-xl">{item.title}</h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-400 md:text-base">
                  {item.description}
                </p>
              </FadeInOnScroll>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
