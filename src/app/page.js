'use client'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />

      <section id="home" className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('/flat-lay-workstation-with-copy-space-laptop-min.jpg')` }}>
        <h1 className="text-4xl text-white font-bold">Welcome to My Portfolio</h1>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <h2 className="text-3xl">About Me</h2>
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
