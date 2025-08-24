import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with React and Tailwind CSS showcasing my skills and projects.",
    image: "https://cdn.dribbble.com/users/1187278/screenshots/16759000/media/f9a9a0ac2f3ea3c3bbd09a9bca7e8e25.png",
    github: "https://github.com/harshverma-git-hub/portfolio",
    demo: "https://harshverma-git-hub.github.io/portfolio",
  },
  {
    title: "Crop Recommendation System",
    description: "AI-powered system using Explainable AI (SHAP + XLNet embeddings) to recommend crops.",
    image: "https://cdn-icons-png.flaticon.com/512/2909/2909763.png",
    github: "https://github.com/your-username/crop-recommendation",
    demo: "#",
  },
  {
    title: "E-Commerce Store",
    description: "A MERN stack e-commerce web app with authentication, cart, and payment integration.",
    image: "https://cdn.dribbble.com/userupload/9142150/file/original-67192db25e6e3a.png",
    github: "https://github.com/your-username/ecommerce",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-6">
          My <span className="text-indigo-500">Projects</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Here are some of my recent works. Each project reflects my ability to design and develop real-world applications.
        </p>

        {/* Project Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Buttons */}
                <div className="flex justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
