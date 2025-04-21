"use client";

export default function Hero() {
  return (
    <div className="max-w-2xl space-y-6 lg:p-6 lg:py-8 lg:backdrop-blur-sm lg:bg-black/30 rounded-xl">
      <p className="text-lg text-gray-300">Hi There!</p>

      <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
        I am <span className="text-gray-500">Joseph Dzanja</span><br />
        A Passionate <span className="text-gray-400">Developer!</span>
      </h1>

      <p className="text-xl text-gray-300">
        I build elegant, efficient, and user-focused digital experiences.
      </p>

      <a
        href="#contact"
        className="inline-block bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition font-medium"
      >
        Contact Me
      </a>

      <div className="flex flex-col sm:flex-row sm:space-x-8 pt-10 text-sm text-gray-300 space-y-4 sm:space-y-0">
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
  );
}

