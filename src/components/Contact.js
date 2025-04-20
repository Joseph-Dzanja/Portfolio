"use client";

import { useState } from "react";

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
    <div className="flex justify-center flex-col md:flex-row w-4/5 m-auto py-16 gap-12">
      {/* Contact Info */}
      <div className="flex flex-col text-white max-w-md">
        <h1 className="text-3xl font-bold mb-4">CONTACT</h1>
        <p className="mb-8">
          Feel free to reach out through any of the methods below.
        </p>

        <h2 className="text-xl font-semibold mt-4">Address</h2>
        <p>PO Box 219, Lilongwe, Malawi</p>

        <h2 className="text-xl font-semibold mt-4">Phone</h2>
        <p>+265 887 365 579 / +265 999 342 166</p>

        <h2 className="text-xl font-semibold mt-4">Email</h2>
        <p>jhdzanja@gmail.com</p>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-lg md:shadow-2xl md:p-3"
      >
        <h1 className="text-center text-white font-semibold text-lg">
          CONTACT FORM
        </h1>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          type="text"
          required
          className="w-full p-3 border-b border-gray-300 focus:outline-none focus:border-blue-600"
          placeholder="Name*"
        />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          required
          className="w-full p-3 border-b border-gray-300 focus:outline-none focus:border-blue-600"
          placeholder="Email*"
        />

        <input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          type="text"
          className="p-3 border-b border-gray-300 focus:outline-none focus:border-blue-600"
          placeholder="Subject"
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows="6"
          required
          className="p-3 border-b border-gray-300 focus:outline-none focus:border-blue-600 resize-none"
          placeholder="Message"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>

        {status && (
          <p className="text-center text-sm text-white mt-2">{status}</p>
        )}
      </form>
    </div>
  );
}
