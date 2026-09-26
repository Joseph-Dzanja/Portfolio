"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const roles = ["Software Developer", "Full Stack Developer", "Web Developer"];

const details = [
  { label: "Email", value: "jhdzanja@gmail.com", href: "mailto:jhdzanja@gmail.com" },
  { label: "Phone", value: "+265-88-736-55-79", href: "tel:+265887365579" },
  { label: "Location", value: "Lilongwe, Malawi" },
];

// Types each role out, pauses, deletes it, then moves to the next.
function useTypedRole() {
  const [text, setText] = useState(roles[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let role = 0;
    let length = roles[0].length;
    let deleting = true;
    let timer;

    const step = () => {
      const word = roles[role];
      length += deleting ? -1 : 1;
      setText(word.slice(0, length));

      let delay = deleting ? 45 : 90;
      if (!deleting && length === word.length) {
        deleting = true;
        delay = 1800;
      } else if (deleting && length === 0) {
        deleting = false;
        role = (role + 1) % roles.length;
        delay = 350;
      }
      timer = setTimeout(step, delay);
    };

    timer = setTimeout(step, 2200);
    return () => clearTimeout(timer);
  }, []);

  return text;
}

export default function Hero() {
  const typed = useTypedRole();

  return (
    <section id="home" className="relative flex min-h-svh flex-col overflow-hidden bg-hero">
      {/* Portrait on the right, fading into the background */}
      {/* Extends past the right edge so the photographer watermark stays out of view */}
      <div className="absolute inset-0 md:-right-[14vw] md:left-auto md:w-[72vw]">
        <Image
          src="/k.jpg"
          alt=""
          fill
          priority
          sizes="(min-width: 768px) 72vw, 100vw"
          className="object-cover object-[50%_20%] grayscale contrast-110"
        />
        <div className="absolute inset-0 bg-hero/75 md:bg-transparent md:bg-linear-to-r md:from-hero md:via-hero/40 md:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-hero to-transparent" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 items-center px-6 pt-28 pb-10">
        <div className="max-w-xl">
          <p className="text-xl font-light text-gray-200 md:text-2xl">Hi There!</p>
          <h1 className="mt-2 text-4xl font-bold leading-tight md:text-6xl">I am Joseph Dzanja</h1>
          <p className="mt-3 h-9 text-xl font-light text-gray-200 md:h-10 md:text-3xl" aria-label={roles.join(", ")}>
            <span aria-hidden="true">
              A {typed}
              <span className="caret ml-0.5 text-accent">|</span>
            </span>
          </p>
          <p className="mt-5 max-w-md text-gray-300 md:text-gray-400">
            I build elegant, efficient, and user-focused digital experiences.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block rounded bg-accent px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Contact strip */}
      <div className="relative mx-auto w-full max-w-6xl px-6 pb-12">
        <dl className="flex flex-col gap-5 sm:flex-row sm:gap-0">
          {details.map((d, i) => (
            <div key={d.label} className={`sm:px-8 ${i === 0 ? "sm:pl-0" : "sm:border-l sm:border-white/25"}`}>
              <dt className="text-sm font-semibold">{d.label}</dt>
              <dd className="mt-1 text-sm text-gray-400">
                {d.href ? (
                  <a href={d.href} className="transition-colors hover:text-accent">
                    {d.value}
                  </a>
                ) : (
                  d.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Mouse scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute right-8 bottom-10 hidden flex-col items-center gap-3 md:flex"
      >
        <span className="flex h-9 w-6 justify-center rounded-full border-2 border-white/70 pt-1.5">
          <span className="mouse-dot size-1.5 rounded-full bg-white" />
        </span>
        <span className="h-12 w-px bg-white/50" />
      </a>
    </section>
  );
}
