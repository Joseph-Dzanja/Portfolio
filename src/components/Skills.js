'use client';
import { FadeInOnScroll } from './FadeInOnScroll';
import { CheckCircle } from 'lucide-react';

const Skills = () => {
  const skills = [
    'Problem Solving',
    'Web Development',
    'Version Control (Git)',
    'Team Collaboration',
    'Responsive Design',
    'Debugging',
    'UI/UX Awareness',
    'Testing & QA',
  ];

  return (
    <FadeInOnScroll>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-white/60 backdrop-blur-md text-gray-800 px-6 py-5 shadow-md border border-gray-300 rounded-2xl hover:shadow-lg hover:scale-[1.03] transition-all duration-300 text-center text-base font-medium w-full sm:w-[45%] md:w-[30%] lg:w-[22%] flex items-center justify-center gap-2"
          >
            <CheckCircle className="text-blue-600 w-5 h-5" />
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </FadeInOnScroll>
  );
};

export default Skills;
