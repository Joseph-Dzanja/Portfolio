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
];

export default function Languages() {
  return (
    <div className="w-11/12 max-w-5xl mx-auto mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-black">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="py-2 px-4 bg-gray-50 rounded-lg flex items-center gap-4 hover:scale-105 transition-transform cursor-pointer shadow-sm animate-float"
        >
          <div className="relative w-12 h-12">
            <Image
              src={tech.src}
              alt={tech.name}
              layout="fill"
              objectFit="contain"
              unoptimized
            />
          </div>
          <h4 className="text-sm font-medium">{tech.name}</h4>
        </div>
      ))}
    </div>
  );
}

