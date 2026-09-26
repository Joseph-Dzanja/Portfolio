"use client";

import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import SectionTitle from "./SectionTitle";

const contactInfo = [
  { label: "Address", icon: MapPin, lines: ["PO Box 219, Lilongwe, Malawi"] },
  { label: "Phone", icon: Phone, lines: ["+265 887 365 579", "+265 999 342 166"] },
  { label: "E-mail", icon: Mail, lines: ["jhdzanja@gmail.com"] },
];

const field =
  "w-full border-0 border-b border-white/20 bg-transparent px-0 py-3 text-white placeholder:text-gray-500 transition-colors focus:border-accent focus:outline-none focus-visible:outline-none";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: `Subject: ${form.subject}\n\n${form.message}`,
        }),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Failed to send. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong.");
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
              Feel free to reach out through any of the methods below.
            </p>
            <dl className="mt-10 space-y-8">
              {contactInfo.map(({ label, icon: Icon, lines }) => (
                <div key={label} className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-tile">
                    <Icon aria-hidden="true" className="size-5 text-accent" />
                  </span>
                  <div>
                    <dt className="font-semibold">{label}</dt>
                    {lines.map((line) => (
                      <dd key={line} className="mt-0.5 text-sm text-gray-400">
                        {line}
                      </dd>
                    ))}
                  </div>
                </div>
              ))}
            </dl>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-band p-7 shadow-2xl md:p-10">
            <h3 className="text-xl font-semibold">Contact Form</h3>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="sr-only">Name</span>
                <input name="name" value={form.name} onChange={handleChange} type="text" autoComplete="name" required className={field} placeholder="Name*" />
              </label>
              <label className="block">
                <span className="sr-only">Email</span>
                <input name="email" value={form.email} onChange={handleChange} type="email" autoComplete="email" required className={field} placeholder="Email*" />
              </label>
            </div>

            <label className="mt-6 block">
              <span className="sr-only">Subject</span>
              <input name="subject" value={form.subject} onChange={handleChange} type="text" className={field} placeholder="Subject" />
            </label>

            <label className="mt-6 block">
              <span className="sr-only">Message</span>
              <textarea name="message" value={form.message} onChange={handleChange} rows="5" required className={`${field} resize-none`} placeholder="Message*" />
            </label>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "Sending..."}
                className="cursor-pointer rounded bg-accent px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-dark disabled:cursor-wait disabled:opacity-70"
              >
                Send Message
              </button>
              {status && (
                <p role="status" className="text-sm text-gray-300">
                  {status}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
