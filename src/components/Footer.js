const links = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#111] py-14 text-sm">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:grid-cols-3">
        <div>
          <h2 className="font-semibold">Contact Information</h2>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>jhdzanja@gmail.com</li>
            <li>+265 887 365 579</li>
            <li>Lilongwe, Malawi</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold">Quick Links</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-gray-400">
            {links.map((text) => (
              <li key={text}>
                <a href={`#${text.toLowerCase()}`} className="transition-colors hover:text-accent">
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <a href="#home" className="text-2xl font-bold tracking-tight">
            Dzanja<span className="text-accent">.</span>
          </a>
          <p className="mt-4 text-gray-400">© {new Date().getFullYear()} Joseph Dzanja. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
