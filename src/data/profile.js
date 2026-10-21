// Single source of truth for personal and contact details.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.jdzanja.me";

export const profile = {
  name: "Joseph Dzanja",
  role: "Software Developer",
  location: "Lilongwe, Malawi",
  email: "jhdzanja@gmail.com",
  phone: { display: "+265 887 365 579", href: "tel:+265887365579" },
  github: "https://github.com/Joseph-Dzanja",
  linkedin: "https://www.linkedin.com/in/joseph-dzanja-47a93b293/",
  cv: "/Joseph_Dzanja_CV.pdf",
  tagline:
    "I build full-stack business software (help desks, HR apps and inventory systems) for organisations in Malawi.",
};

export const navLinks = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];
