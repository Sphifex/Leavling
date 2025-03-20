import React from "react";
import { useNavigate } from "react-router-dom";

const WellspringProject = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center relative">
            {/* ✅ Full-Screen Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
                style={{ filter: `hue-rotate(335deg)` }}
            >
                <source src="/videos/space.mp4" type="video/mp4" />
            </video>

            {/* ✅ Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

            {/* ✅ Project Details Box */}
            <div className="relative w-[850px]  p-8 text-center projects-box z-20 bg-black bg-opacity-50 border border-purple-400 shadow-lg flicker">
                <h1 className="text-4xl font-bold text-purple-400 neon-text mb-4">
                    Portfolio Website
                </h1>
                <p className="text-gray-300 text-lg">
                    A Solo Leveling-inspired portfolio built with React, Tailwind CSS, and Framer Motion.
                </p>
                <h3 className="text-xl text-purple-300 mt-6">Technologies Used:</h3>
                <ul className="text-gray-300 mt-2">
                    <li>⚡ React</li>
                    <li>🎨 Tailwind CSS</li>
                    <li>🎭 Framer Motion</li>
                    <li>🚀 Vite</li>
                </ul>
                <a 
                    href="https://your-portfolio-link.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 underline mt-4 inline-block"
                >
                    View Live Demo
                </a>

                {/* 🔙 Back Button */}
                <button 
                    onClick={() => navigate("/projects")}
                    className="mt-6 px-6 py-3 text-white border border-purple-400 rounded-md hover:bg-purple-600 transition-all"
                >
                    Back to Projects
                </button>
            </div>
        </div>
    );
};
export default WellspringProject; // ✅ This must be included!
