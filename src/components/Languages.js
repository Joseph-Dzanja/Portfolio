import { technologies } from "@/data/skills";

export default function Languages() {
  return (
    <div className="space-y-8">
      {technologies.map(({ group, items }) => (
        <div key={group}>
          <h3 className="mb-3 text-sm font-semibold tracking-wide text-gray-400 uppercase">{group}</h3>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {items.map(({ name, icon: Icon, color }) => (
              <li
                key={name}
                className="flex items-center gap-3 rounded bg-tile px-4 py-3 text-sm font-medium transition-colors hover:bg-[#2a2a2a] md:text-base"
              >
                <Icon aria-hidden="true" className="size-6 shrink-0" style={{ color: color ?? "#fff" }} />
                {name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
