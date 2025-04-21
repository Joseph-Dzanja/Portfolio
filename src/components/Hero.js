"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-2xl text-white space-y-8 backdrop-blur-sm bg-black/30 p-8 rounded-xl shadow-xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg text-gray-300"
        >
          Hi There!
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight"
        >
          I&apos;m <span className="text-gray-400">Joseph Dzanja</span><br />
          A Passionate <span className="text-gray-500">Developer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300"
        >
          I build elegant, efficient, and user-focused digital experiences.
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="inline-block bg-gray-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-gray-600 transition"
        >
          Contact Me
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 text-sm text-gray-300"
        >
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
        </motion.div>
      </div>
    </section>
  );
}
