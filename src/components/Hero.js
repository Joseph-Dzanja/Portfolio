"use client";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-2xl text-white space-y-8 lg:backdrop-blur-sm lg:bg-black/30 p-8 rounded-xl lg:shadow-xl">
        <p className="text-base md:text-lg text-gray-300">
          Hi There!
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          I&apos;m <span className="text-gray-400">Joseph Dzanja</span><br />
          A Passionate <span className="text-gray-500">Developer</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300">
          I build elegant, efficient, and user-focused digital experiences.
        </p>

        <a
          href="#contact"
          className="inline-block bg-gray-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-gray-600 transition"
        >
          Contact Me
        </a>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 text-sm text-gray-300">
          <div>
            <p className="font-semibold text-white mb-1">📧 Email</p>
            <p>jhdzanja@gmail.com</p>
          </div>
          <div>
            <p className="font-semibold text-white mb-1">📞 Phone</p>
            <p>+265-88-736-55-79</p>
          </div>
          <div>
            <p className="font-semibold text-white mb-1">📍 Location</p>
            <p>Lilongwe, Malawi</p>
          </div>
        </div>
      </div>
    </section>
  );
}
