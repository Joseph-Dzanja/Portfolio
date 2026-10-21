import { capabilities } from "@/data/skills";

export default function Skills() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {capabilities.map(({ name, icon: Icon, detail }) => (
        <li key={name} className="rounded bg-tile p-6 transition-colors hover:bg-[#2a2a2a]">
          <div className="flex items-center gap-3 font-medium md:text-lg">
            <Icon aria-hidden="true" className="size-5 shrink-0 text-accent" />
            {name}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-gray-400">{detail}</p>
        </li>
      ))}
    </ul>
  );
}
