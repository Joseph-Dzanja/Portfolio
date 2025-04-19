export default function Experience() {
  return (
    <div>
      <h1 className="text-2xl pb-1">Experience</h1>
      <ol className="relative border-l-2 border-white ml-6">
        <li className="mb-10 pl-8">
          <div className="absolute w-4 h-4 bg-white rounded-full -left-2 mt-1.5 border border-gray-700"></div>
          <time className="text-sm font-normal text-gray-400">
            2024 – Present
          </time>
          <h3 className="text-lg font-semibold text-white">
            Freelance Web Developer
          </h3>
          <p className="text-base text-gray-300">
            Built a professional web application for a client in collaboration
            with a friend. Handled both frontend and backend development using
            Vue 3, Node.js, Express, and MySQL. Implemented features like
            role-based access, batch inventory management, and business
            planning.
          </p>
        </li>

        <li className="mb-10 pl-8">
          <div className="absolute w-4 h-4 bg-white rounded-full -left-2 mt-1.5 border border-gray-700"></div>
          <time className="text-sm font-normal text-gray-400">2024</time>
          <h3 className="text-lg font-semibold text-white">
            ICT Volunteer – LUANAR
          </h3>
          <p className="text-base text-gray-300">
            Volunteered at the Lilongwe University of Agriculture and Natural
            Resources, providing support in ICT operations. Assisted with
            software installations, hardware troubleshooting, and general tech
            support for staff and students.
          </p>
        </li>

        <li className="mb-10 pl-8">
          <div className="absolute w-4 h-4 bg-white rounded-full -left-2 mt-1.5 border border-gray-700"></div>
          <time className="text-sm font-normal text-gray-400">2021 – 2024</time>
          <h3 className="text-lg font-semibold text-white">
            BSc in Computer Systems and Security
          </h3>
          <p className="text-base text-gray-300">
            Graduated with distinction from the Malawi University of Science and
            Technology. Gained a strong foundation in programming, information
            systems, cybersecurity, and database management. Completed various
            personal projects ranging from games to management systems.
          </p>
        </li>

        <li className="pl-8">
          <div className="absolute w-4 h-4 bg-white rounded-full -left-2 mt-1.5 border border-gray-700"></div>
          <time className="text-sm font-normal text-gray-400">Ongoing</time>
          <h3 className="text-lg font-semibold text-white">
            Personal Projects & Learning
          </h3>
          <p className="text-base text-gray-300">
            Continuously learning and building tools and websites using
            technologies like React, Vue, Tailwind CSS, Node.js, and Python.
            Exploring data analysis, mobile development, and security best
            practices.
          </p>
        </li>
      </ol>
    </div>
  );
}
