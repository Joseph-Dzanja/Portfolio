

'use client';

export default function Contact() {
  return (
    <div className="flex justify-center flex-col md:flex-row w-4/5 m-auto py-16 gap-12">
      {/* Contact Info */}
      <div className="flex flex-col text-white max-w-md">
        <h1 className="text-3xl font-bold mb-4">CONTACT</h1>
        <p className="mb-8">Feel free to reach out through any of the methods below.</p>

        <h2 className="text-xl font-semibold mt-4">Address</h2>
        <p>PO Box 219, Lilongwe, Malawi</p>

        <h2 className="text-xl font-semibold mt-4">Phone</h2>
        <p>+265 887 365 579 / +265 999 342 166</p>

        <h2 className="text-xl font-semibold mt-4">Email</h2>
        <p>jhdzanja@gmail.com</p>
      </div>

      {/* Contact Form */}
      <form className="flex flex-col gap-4 w-full max-w-lg" action="#">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded"
            placeholder="Name*"
          />
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded"
            placeholder="Email*"
          />
        </div>
        <input
          type="text"
          className="p-3 border border-gray-300 rounded"
          placeholder="Subject"
        />
        <textarea
          name="message"
          cols="30"
          rows="6"
          className="p-3 border border-gray-300 rounded"
          placeholder="Message"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}