// Section heading with a large outlined word behind it.
export default function SectionTitle({ ghost, children }) {
  return (
    <div className="relative mb-12">
      <span
        aria-hidden="true"
        className="ghost-word pointer-events-none absolute -top-8 left-0 select-none whitespace-nowrap text-[clamp(3rem,11vw,6rem)] font-extrabold uppercase leading-none tracking-wide md:-top-10"
      >
        {ghost}
      </span>
      <h2 className="relative pt-4 text-3xl font-bold md:text-4xl">{children}</h2>
    </div>
  );
}
