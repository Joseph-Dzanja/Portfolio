import Image from "next/image";
import { FadeInOnScroll } from "./FadeInOnScroll";
import { profile } from "@/data/profile";

const info = [
  { label: "Name", value: profile.name },
  { label: "Based in", value: profile.location },
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone.display, href: profile.phone.href },
];

export default function About() {
  return (
    <section id="about" className="bg-ink py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <FadeInOnScroll>
          <Image
            src="/k.jpg"
            alt="Portrait of Joseph Dzanja"
            width={560}
            height={560}
            sizes="(min-width: 768px) 40vw, 100vw"
            className="aspect-square w-full object-cover object-top"
          />
        </FadeInOnScroll>

        <FadeInOnScroll delayOrder={1}>
          <p className="font-semibold text-accent">Who am I?</p>
          <h2 className="mt-2 text-2xl font-bold leading-snug md:text-3xl">
            I’m Joseph Dzanja, a full-stack Software Developer
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-gray-400 md:text-base">
            <p>
              I work at Mitra Systems in Malawi, building enterprise software end to end: Next.js
              frontends, FastAPI and C# backends, and PostgreSQL databases. Most recently I led the
              frontend of a help desk platform and maintain a cross-platform HR app for attendance
              and leave.
            </p>
            <p>
              Outside work I build software for small businesses, like a poultry farm management
              system that handles feed calculations, batch inventory and business planning. I have a
              BSc in Computer Systems and Security (with Distinction) from MUST, so I care about
              getting authentication and access control right, not just the UI.
            </p>
          </div>

          <hr className="my-6 border-white/15" />

          <dl className="grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
            {info.map((item) => (
              <div key={item.label} className="flex gap-3">
                <dt className="w-20 shrink-0 font-semibold">{item.label}:</dt>
                <dd className="min-w-0 break-words text-gray-400">
                  {item.href ? (
                    <a href={item.href} className="transition-colors hover:text-accent">
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href={profile.cv}
            download
            className="mt-8 inline-block rounded bg-accent px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
          >
            Download CV
          </a>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
