import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left - Logo / Name */}
        <h2 className="text-xl font-bold text-white mb-4 md:mb-0">
          Harsh Verma
        </h2>

        {/* Middle - Navigation Links */}
        <ul className="flex space-x-6 mb-4 md:mb-0">
          <li><a href="#home" className="hover:text-white transition">Home</a></li>
          <li><a href="#about" className="hover:text-white transition">About</a></li>
          <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
        </ul>

        {/* Right - Social Icons */}
        <div className="flex space-x-4">
          <a href="https://github.com/harshverma-git-hub" target="_blank" rel="noreferrer">
            <Github className="w-5 h-5 hover:text-white transition" />
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer">
            <Linkedin className="w-5 h-5 hover:text-white transition" />
          </a>
          <a href="mailto:your-email@gmail.com">
            <Mail className="w-5 h-5 hover:text-white transition" />
          </a>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-gray-500 text-sm mt-4">
        © {new Date().getFullYear()} Harsh Verma. All rights reserved.
      </div>
    </footer>
  );
}
