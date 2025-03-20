import React from "react";
import { useNavigate } from "react-router-dom";
import { FaWordpress, FaCss3Alt, FaJsSquare } from "react-icons/fa"; // Icons for tech stack

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

           {/* ✅ Enlarged Project Details Box (ACTUALLY TALLER NOW) */}
           <div className="relative w-[1000px] min-h-[950px] p-10 text-center projects-box z-20 bg-black bg-opacity-0 border border-purple-400 shadow-lg flicker flex flex-col justify-between">
    
  
                {/* ✅ Project Title */}
                <h1 className="text-4xl font-bold text-purple-400 neon-text mb-6">
                    Wellspring Website
                </h1>

                {/* ✅ Project Screenshot */}
                <div className="flex justify-center">
                    <img 
                        src="/images/well.png"  // Change this to the actual image path
                        alt="Wellspring Website Screenshot"
                        className="w-[550px] h-auto rounded-lg border border-purple-400 shadow-md mb-6"
                    />
                </div>

                {/* ✅ Project Description */}
                <p className="text-gray-300 text-lg mb-6">
                    A modern and responsive church website built using **WordPress, CSS, and JavaScript**. 
                    It features event management, donation integration, and a clean design for easy navigation.
                </p>

                {/* ✅ Technologies Used */}
                <div className="flex justify-center space-x-6 text-5xl text-gray-400 mb-6">
                    <FaWordpress className="text-blue-500" />
                    <FaJsSquare className="text-yellow-400" />
                    <FaCss3Alt className="text-blue-500" />
                </div>

                {/* ✅ Buttons */}
                <div className="flex justify-center space-x-8 mt-6">
                    {/* 🔙 Back Button (Red Glow) */}
                    <button 
                        onClick={() => navigate("/projects")}
                        className="px-6 py-3 glowing-text text-red-500 border border-red-500 rounded-md transition-all relative 
                        before:absolute before:inset-0 before:border-2 before:border-red-500 before:rounded-md 
                        before:opacity-50 before:transition-all hover:before:opacity-100 hover:before:shadow-red-500 flicker"
                    >
                        Back to Projects
                    </button>

                    {/* 🌍 View Project Button (Blue Glow) */}
                    <a 
                        href="https://wellspringfl.com/" 
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

export default WellspringProject;
