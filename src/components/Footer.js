import SocialLinks from "./SocialLinks";
import { profile, navLinks } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#111] py-14 text-sm">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:grid-cols-3">
        <div>
          <h2 className="font-semibold">Get in touch</h2>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>
              <a href={`mailto:${profile.email}`} className="transition-colors hover:text-accent">
                {profile.email}
              </a>
            </li>
            <li>{profile.location}</li>
          </ul>
          <SocialLinks className="mt-5" />
        </div>
        <div>
          <h2 className="font-semibold">Quick Links</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-gray-400">
            {navLinks.map((text) => (
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
          <p className="mt-4 text-gray-400">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
