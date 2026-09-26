import {
  Puzzle,
  Layers,
  GitBranch,
  Users,
  MonitorSmartphone,
  Cloud,
  PenTool,
  Database,
} from 'lucide-react';

const skills = [
  { name: 'Problem Solving', icon: Puzzle },
  { name: 'Full Stack Development', icon: Layers },
  { name: 'Version Control (Git)', icon: GitBranch },
  { name: 'Team Collaboration', icon: Users },
  { name: 'Responsive Design', icon: MonitorSmartphone },
  { name: 'Cloud Services', icon: Cloud },
  { name: 'UI/UX Design', icon: PenTool },
  { name: 'Database Management', icon: Database },
];

export default function Skills() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map(({ name, icon: Icon }) => (
        <li
          key={name}
          className="flex items-center gap-3 rounded bg-tile px-5 py-4 text-sm font-medium transition-colors hover:bg-[#2a2a2a] md:text-base"
        >
          <Icon aria-hidden="true" className="size-5 shrink-0 text-accent" />
          {name}
        </li>
      ))}
    </ul>
  );
}
