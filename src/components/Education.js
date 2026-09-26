import { GraduationCap } from 'lucide-react';

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

export default function Education() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {educationList.map((edu) => (
        <article key={edu.degree} className="rounded bg-tile p-7">
          <GraduationCap aria-hidden="true" className="size-8 text-accent" />
          <h3 className="mt-4 text-lg font-semibold">{edu.degree}</h3>
          <p className="mt-1 text-sm text-gray-400">{edu.institution}</p>
          <p className="mt-1 text-sm text-accent">{edu.year}</p>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">{edu.details}</p>
        </article>
      ))}
    </div>
  );
}
