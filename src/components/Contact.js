"use client";

import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import SectionTitle from "./SectionTitle";
import SocialLinks from "./SocialLinks";
import { profile } from "@/data/profile";

const contactInfo = [
  { label: "E-mail", icon: Mail, value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", icon: Phone, value: profile.phone.display, href: profile.phone.href },
  { label: "Location", icon: MapPin, value: profile.location },
];

const field =
  "w-full border-0 border-b border-white/20 bg-transparent px-0 py-3 text-white placeholder:text-gray-500 transition-colors focus:border-accent focus:outline-none focus-visible:outline-none";

const emptyForm = { name: "", email: "", subject: "", message: "", website: "" };

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  // idle | sending | sent | error
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("sent");
        setForm(emptyForm);
      } else {
        setStatus("error");
        setError(data.error ?? "Failed to send. Please try again.");
      }
    } catch {
      setStatus("error");
      setError(`Something went wrong. You can email me directly at ${profile.email}.`);
    }
  };

  return (
    <section id="contact" className="bg-ink py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle ghost="Contact">Contact Me</SectionTitle>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* Contact Info */}
          <div>
            <p className="text-gray-400">
              Open to software developer roles and freelance projects. Send a message and I’ll get
              back to you.
            </p>
            <dl className="mt-10 space-y-8">
              {contactInfo.map(({ label, icon: Icon, value, href }) => (
                <div key={label} className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-tile">
                    <Icon aria-hidden="true" className="size-5 text-accent" />
                  </span>
                  <div>
                    <dt className="font-semibold">{label}</dt>
                    <dd className="mt-0.5 text-sm text-gray-400">
                      {href ? (
                        <a href={href} className="transition-colors hover:text-accent">
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
            <SocialLinks className="mt-10" />
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-band p-7 shadow-2xl md:p-10">
            <h3 className="text-xl font-semibold">Contact Form</h3>

            {/* Honeypot: hidden from people, bots tend to fill it in */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <label>
                Website
                <input name="website" value={form.website} onChange={handleChange} type="text" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="sr-only">Name</span>
                <input name="name" value={form.name} onChange={handleChange} type="text" autoComplete="name" required maxLength={100} className={field} placeholder="Name*" />
              </label>
              <label className="block">
                <span className="sr-only">Email</span>
                <input name="email" value={form.email} onChange={handleChange} type="email" autoComplete="email" required maxLength={200} className={field} placeholder="Email*" />
              </label>
            </div>

            <label className="mt-6 block">
              <span className="sr-only">Subject</span>
              <input name="subject" value={form.subject} onChange={handleChange} type="text" maxLength={150} className={field} placeholder="Subject" />
            </label>

            <label className="mt-6 block">
              <span className="sr-only">Message</span>
              <textarea name="message" value={form.message} onChange={handleChange} rows="5" required maxLength={5000} className={`${field} resize-none`} placeholder="Message*" />
            </label>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="cursor-pointer rounded bg-accent px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dark disabled:cursor-wait disabled:opacity-70"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              <p role="status" className={`text-sm ${status === "error" ? "text-red-400" : "text-gray-300"}`}>
                {status === "sent" && "Message sent. Thanks, I’ll be in touch soon!"}
                {status === "error" && error}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
