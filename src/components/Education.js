'use client';
import { FadeInOnScroll } from './FadeInOnScroll';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const educationList = [
    {
      degree: 'BSc in Computer Systems and Security',
      institution: 'Malawi University of Science and Technology',
      year: 'Graduated: 2024',
      details:
        'Graduated with Distinction. Focused on software engineering, systems architecture, and database management.',
    },
    // {
    //   degree: 'Certification in Web Security & Backend Systems',
    //   institution: 'Online Specialization',
    //   year: 'Completed: 2023',
    //   details:
    //     'Completed advanced modules in Node.js, Express, web security best practices, and backend architecture.',
    // },
  ];

  return (
    <FadeInOnScroll>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {educationList.map((edu, idx) => (
          <div
            key={idx}
            className="bg-white/60 backdrop-blur-md border border-gray-300 shadow-md rounded-2xl p-6 transition hover:shadow-lg"
          >
            <div className="flex items-start gap-3 mb-3">
              <GraduationCap className="text-blue-600 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {edu.degree}
                </h3>
                <p className="text-sm text-gray-600">{edu.institution}</p>
                <p className="text-sm text-gray-500 italic">{edu.year}</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{edu.details}</p>
          </div>
        ))}
      </div>
    </FadeInOnScroll>
  );
};

export default Education;
