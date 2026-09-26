"use client";

import Image from "next/image";

const technologies = [
  {
    name: "TypeScript",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
  {
    name: "Express",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
  },
  {
    name: "NodeJS",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    name: "Postman",
    src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
  {
    name: "React Native",
    src: "https://pagepro.co/blog/wp-content/uploads/2020/03/react-native-logo-884x1024.png",
  },
  {
    name: "HTML",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
  },
  {
    name: "Bootstrap",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
  },
  {
    name: "Javascript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Tailwind CSS",
    src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "React",
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  },
  {
    name: "MySQL",
    src: "/mysql-logo-svgrepo-com.svg",
  },
  {
    name: "VueJs",
    src: "/vue-svgrepo-com.svg",
  },
  {
    name: "C++",
    src: "/c.svg",
  },
  {
    name: "PHP",
    src: "/php-svgrepo-com.svg",
  },
  {
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
  },
  {
    name: "Next.js",
    src: "/nextjs-icon-svgrepo-com.svg",
  },
];

export default function Languages() {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {technologies.map((tech) => (
        <li
          key={tech.name}
          className="flex items-center gap-4 rounded bg-tile px-5 py-3 text-sm font-medium transition-colors hover:bg-[#2a2a2a] md:text-base"
        >
          {/* Light chip so dark logos (Express, Next.js) stay visible */}
          <span className="relative size-10 shrink-0 rounded-full bg-white p-2">
            <span className="relative block size-full">
              <Image src={tech.src} alt="" fill className="object-contain" unoptimized />
            </span>
          </span>
          {tech.name}
        </li>
      ))}
    </ul>
  );
}
