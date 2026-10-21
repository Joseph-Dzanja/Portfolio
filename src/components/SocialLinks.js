import { SiGithub, SiLinkedin } from "react-icons/si";
import { Mail } from "lucide-react";
import { profile } from "@/data/profile";

const socials = [
  { label: "GitHub", href: profile.github, icon: SiGithub },
  { label: "LinkedIn", href: profile.linkedin, icon: SiLinkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export default function SocialLinks({ className = "" }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {socials.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
            aria-label={label}
            className="flex size-10 items-center justify-center rounded-full border border-white/20 text-gray-300 transition-colors hover:border-accent hover:text-accent"
          >
            <Icon aria-hidden="true" className="size-4" />
          </a>
        </li>
      ))}
    </ul>
  );
}
