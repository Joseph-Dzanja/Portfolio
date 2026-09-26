import Image from "next/image";
import { FadeInOnScroll } from "./FadeInOnScroll";

const info = [
  { label: "Name", value: "Joseph Dzanja" },
  { label: "From", value: "Lilongwe, Malawi" },
  { label: "Email", value: "jhdzanja@gmail.com" },
  { label: "Website", value: "jhdzanja.com" },
  { label: "Phone", value: "+265 999-34-21-66" },
  { label: "Phone", value: "+265 887-36-55-79" },
];

export default function About() {
  return (
    <section id="about" className="bg-ink py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <FadeInOnScroll>
          <Image
            src="/k.jpg"
            alt="Joseph Dzanja"
            width={560}
            height={560}
            sizes="(min-width: 768px) 40vw, 100vw"
            className="aspect-square w-full object-cover object-top"
          />
        </FadeInOnScroll>

        <FadeInOnScroll delayOrder={1}>
          <p className="font-semibold text-accent">Who am I?</p>
          <h2 className="mt-2 text-2xl font-bold leading-snug md:text-3xl">
            I’m Joseph Dzanja, a Software Developer
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-gray-400 md:text-base">
            <p>
              I’m a Software Developer with a passion for building seamless digital experiences. I
              specialize in both front-end and back-end development, working with technologies like
              JavaScript, React, Next.js, Vue, Node.js, and SQL to create dynamic and user-friendly
              applications.
            </p>
            <p>
              I enjoy writing clean, efficient code and designing intuitive interfaces that make
              technology more accessible. From web apps to management platforms, I focus on blending
              functionality with aesthetics to deliver impactful solutions. I’m always learning and
              pushing my skills to stay ahead in the ever-evolving tech landscape, turning ideas into
              reality with every project.
            </p>
          </div>

          <hr className="my-6 border-white/15" />

          <dl className="grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
            {info.map((item, i) => (
              <div key={i} className="flex gap-3">
                <dt className="w-16 shrink-0 font-semibold">{item.label}:</dt>
                <dd className="min-w-0 break-words text-gray-400">{item.value}</dd>
              </div>
            ))}
          </dl>

          <a
            href="/Joseph_Dzanja_CV.pdf"
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
