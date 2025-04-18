'use client'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />

      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-12 md:px-24 lg:justify-start lg:px-60"
        style={{ backgroundImage: `url('/flat-lay-workstation-with-copy-space-laptop-min.jpg')` }}
      >
        <Hero />
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <About/>
      </section>

      <section id="skills" className="min-h-screen flex items-center justify-center bg-gray-800 text-white">
        <h2 className="text-3xl">Skills</h2>
      </section>

      <section id="experience" className="min-h-screen flex items-center justify-center bg-gray-700 text-white">
        <h2 className="text-3xl">Experience</h2>
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center bg-gray-600 text-white">
        <h2 className="text-3xl">Projects</h2>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-500 text-white">
        <h2 className="text-3xl">Contact</h2>
      </section>
    </main>
  )
}
