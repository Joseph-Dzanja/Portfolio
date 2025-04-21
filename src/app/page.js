"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="relative bg-gray-900">
      <Navbar />

      <section
        id="home"
        className="pt-[80px] min-h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-12 md:px-24 lg:justify-start lg:px-60"
        style={{
          backgroundImage: `url('/flat-lay-workstation-with-copy-space-laptop-min.jpg')`,
        }}
      >
        <Hero />
      </section>

      <section
        id="about"
        className="py-20 flex items-center justify-center bg-gray-900 text-white"
      >
        <About />
      </section>

      <section id="skills" className="py-20 bg-gray-900 text-white">
        <Expertise />
      </section>

      <section
        id="experience"
        className="py-20 bg-gray-900 text-white flex justify-center"
      >
        <div className="w-full max-w-4xl px-4">
          <Experience />
        </div>
      </section>

      <section
        id="projects"
        className="flex items-center justify-center bg-gray-900 text-white"
      >
        <Projects />
      </section>

      <section
        id="contact"
        className="min-h-screen flex items-center bg-gray-800 text-white"
      >
        <Contact />
      </section>
    </main>
  );
}
