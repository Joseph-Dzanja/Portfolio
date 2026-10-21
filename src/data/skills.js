import {
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPhp,
  SiTailwindcss,
  SiGit,
  SiPostman,
  SiCplusplus,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { Layout, Server, Database, Smartphone, ClipboardCheck, ShieldCheck } from "lucide-react";

export const capabilities = [
  {
    name: "Frontend Development",
    icon: Layout,
    detail: "Responsive, accessible interfaces in React, Next.js and Vue.",
  },
  {
    name: "Backend & APIs",
    icon: Server,
    detail: "REST APIs and business logic with FastAPI, Node.js/Express and C#.",
  },
  {
    name: "Databases",
    icon: Database,
    detail: "Schema design and queries in PostgreSQL and MySQL.",
  },
  {
    name: "Mobile",
    icon: Smartphone,
    detail: "Maintaining a cross-platform HR app for attendance, tasks and leave requests.",
  },
  {
    name: "Testing & UAT",
    icon: ClipboardCheck,
    detail: "Software testing and user acceptance testing before release.",
  },
  {
    name: "Security Foundations",
    icon: ShieldCheck,
    detail: "Degree in Computer Systems and Security; auth and role-based access in practice.",
  },
];

// Brand colours are used for the icons; dark marks (Express, Next.js) fall back to white.
export const technologies = [
  { group: "Languages", items: [
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "C#", icon: TbBrandCSharp, color: "#9B4F96" },
    { name: "PHP", icon: SiPhp, color: "#777BB4" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
  ] },
  { group: "Frameworks", items: [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Vue", icon: SiVuedotjs, color: "#4FC08D" },
    { name: "FastAPI", icon: SiFastapi, color: "#009688" },
    { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
    { name: "Express", icon: SiExpress },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  ] },
  { group: "Data & Tools", items: [
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  ] },
];
