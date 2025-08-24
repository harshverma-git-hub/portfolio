import React from "react";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
        >
            {/* Left: Text Content */}
            <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                    Hi, I’m <span className="text-indigo-400">Harsh Verma</span>
                    <br />
                    A Passionate <span className="text-indigo-400">MERN Stack Developer</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 max-w-lg mb-8">
                    I love building modern, scalable, and user-friendly web applications
                    using React, Node.js, Express, and MongoDB. Currently pursuing
                    MSc in Computer Science, I aim to combine creativity with technology.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <a
                        href="#projects"
                        className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-full text-lg font-medium flex items-center gap-2 transition"
                    >
                        View Projects <ArrowRight className="w-5 h-5" />
                    </a>

                    <a
                        href={`${process.env.PUBLIC_URL}/Harsh_Verma_Resume.pdf`}
                        download="Harsh_Verma_Resume.pdf"
                        className="px-6 py-3 rounded-full border border-gray-400 text-gray-200 hover:bg-gray-800 transition flex items-center justify-center space-x-2"
                    >
                        <span>Download CV</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Right: Avatar / Image */}
            <div className="flex-1 mt-10 md:mt-0 flex justify-center">
                <img
                    src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
                    alt="Developer Avatar"
                    className="w-72 h-72 md:w-96 md:h-96 rounded-full shadow-2xl border-4 border-indigo-500 hover:scale-105 transition-transform"
                />
            </div>
        </section>
    );
}
