import React from "react";
import { useNavigate } from "react-router-dom";
import { FaReact, FaCss3Alt, FaJsSquare } from "react-icons/fa"; // Icons for tech stack
import { SiTailwindcss, SiFramer } from "react-icons/si"; // More icons
import { DiHtml5 } from "react-icons/di";

const PortfolioProject = () => {
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

            {/* ✅ Enlarged Project Details Box (ONLY) */}
            <div className="relative w-[1000px] h-[800px] p-10 text-center projects-box z-20 bg-black bg-opacity-0 border border-purple-400 shadow-lg flicker">
                
                {/* ✅ Project Title */}
                <h1 className="text-4xl font-bold skills-glow text-white neon-text mb-6">
                    Portfolio Website
                </h1>

                {/* ✅ Project Screenshot (SAME SIZE) */}
                <div className="flex justify-center">
                    <img 
                        src="/images/portfolio V1.png" 
                        alt="Portfolio Screenshot"
                        className="w-[550px] h-auto rounded-lg border border-purple-900 shadow-md mb-6 flicker"
                    />
                </div>

                {/* ✅ Project Description */}
                <p className="skills-glow text-white text-lg mb-6">
                    This is my first Portfolio it was made while i was learning and was made with simple JS, CSS, and HTML.
                </p>

                {/* ✅ Technologies Used */}
                <div className="flex justify-center space-x-6 text-4xl text-white mb-6">
                    <DiHtml5 className="text-orange-700" />
                    <FaJsSquare className="text-yellow-400" />
                    <FaCss3Alt className="text-blue-500" />
                </div>

                {/* ✅ Buttons (Properly Positioned) */}
                <div className="flex justify-center space-x-8 mt-6">
                    {/* 🔙 Back Button (Red Border & Glow) */}
                    <button 
                        onClick={() => navigate("/projects")}
                        className="px-6 py-3 glowing-text text-red-500 border border-red-500 rounded-md transition-all relative 
                        before:absolute before:inset-0 before:border-2 before:border-red-500 before:rounded-md 
                        before:opacity-50 before:transition-all hover:before:opacity-100 hover:before:shadow-red-500 flicker"
                    >
                        Back to Projects
                    </button>

                    {/* 🌍 View Project Button (Blue Border & Glow) */}
                    <a 
                        href="https://github.com/Sphifex/rylee-pritchard" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-3 skills-glow text-blue-200 border border-purple-500 rounded-md transition-all relative 
                        before:absolute before:inset-0 before:border-2 before:border-purple-500 before:rounded-md 
                        before:opacity-50 before:transition-all hover:before:opacity-100 hover:before:shadow-red-500 flicker"
                    >
                        View Project
                    </a>
                </div>

            </div>
        </div>
    );
};

export default PortfolioProject;
