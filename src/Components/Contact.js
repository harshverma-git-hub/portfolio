import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-16 bg-gray-100 text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-6">
          Get in <span className="text-indigo-500">Touch</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Interested in working together or have any questions? Feel free to reach out!  
        </p>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          {/* Left Side - Contact Info */}
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-600 mb-4">
              I’m open to freelance projects, collaborations, or just a friendly chat.
            </p>
            <ul className="space-y-3">
              <li>
                📍 <span className="ml-2">Agra, India</span>
              </li>
              <li>
                📧 <a href="mailto:your.email@example.com" className="ml-2 text-indigo-500 hover:underline">
                  your.email@example.com
                </a>
              </li>
              <li>
                💼 <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noreferrer"
                  className="ml-2 text-indigo-500 hover:underline">
                  LinkedIn
                </a>
              </li>
              <li>
                🖥️ <a href="https://github.com/harshverma-git-hub" target="_blank" rel="noreferrer"
                  className="ml-2 text-indigo-500 hover:underline">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Right Side - Contact Form */}
          <form className="bg-white shadow-lg rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">Send me a Message</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
