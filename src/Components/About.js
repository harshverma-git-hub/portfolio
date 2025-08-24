import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-16 bg-gray-100 text-gray-800"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-6">
          About <span className="text-indigo-500">Me</span>
        </h2>

        {/* Intro Paragraph */}
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 mb-12">
          I’m <span className="font-semibold">Harsh Verma</span>, an aspiring
          <span className="text-indigo-500"> MERN Stack Developer</span> currently
          pursuing MSc in Computer Science.  
          I enjoy building full-stack applications that are not only functional
          but also provide a great user experience.
        </p>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <div className="flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="About me"
              className="w-64 h-64 md:w-80 md:h-80 rounded-2xl shadow-lg hover:scale-105 transition-transform"
            />
          </div>

          {/* Right: Skills */}
          <div className="text-left">
            <h3 className="text-2xl font-semibold mb-4">My Skills 🚀</h3>
            <ul className="space-y-3 text-lg">
              <li>✅ HTML, CSS, JavaScript</li>
              <li>✅ React.js & Tailwind CSS</li>
              <li>✅ Node.js & Express.js</li>
              <li>✅ MongoDB & SQL</li>
              <li>✅ Git & GitHub</li>
              <li>✅ Problem Solving & Data Structures</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
