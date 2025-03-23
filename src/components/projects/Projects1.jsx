import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Projects1 = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* 🌌 Cyberpunk Background (reuse space.mp4 or dark backdrop) */}
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

            {/* Overlay to darken it */}
            <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

            {/* 🌀 Glowing Project Box */}
            <div className="relative w-[1000px] h-[850px] p-10 text-center system-message z-20 border border-purple-500 bg-black bg-opacity-50 rounded-lg shadow-lg">
                {/* Top Bezel */}
                <div className="absolute top-[-40px] left-[-30px] w-[1100px] h-12 bg-[#400167] opacity-80 shadow-lg transform skew-x-[10deg] flicker z-30"></div>

                {/* Project Title */}
                <h1 className="text-4xl font-bold text-purple-400 neon-text mb-6 z-30">Cyberpunk System Project</h1>

                {/* Project Screenshot */}
                <img
                    src="/images/sample.png"
                    alt="Cyberpunk Project Screenshot"
                    className="w-[550px] mx-auto rounded-lg border border-purple-400 shadow-md mb-6"
                />

                {/* Project Description */}
                <p className="text-gray-300 text-lg mb-6 z-30">
                    This is a holographic, Solo Leveling-inspired UI project featuring neon layers, glowing panels,
                    and cyberpunk animation effects.
                </p>

                {/* Tech Icons Placeholder */}
                <div className="flex justify-center space-x-6 text-4xl text-purple-300 mb-8 z-30">
                    <i className="devicon-react-original colored"></i>
                    <i className="devicon-tailwindcss-plain colored"></i>
                    <i className="devicon-javascript-plain colored"></i>
                </div>

                {/* Buttons */}
                <div className="flex justify-center space-x-8 mt-6 z-30">
                    <button
                        onClick={() => navigate("/projects")}
                        className="px-6 py-3 text-white border border-red-500 rounded-md glow-btn-red hover:shadow-red-500 transition-all"
                    >
                        Back to Projects
                    </button>

                    <a
                        href="https://github.com/your/project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 text-white border border-blue-400 rounded-md glow-btn-blue hover:shadow-blue-500 transition-all"
                    >
                        View Project
                    </a>
                </div>

                {/* Bottom Bezel */}
                <div className="absolute bottom-[-40px] left-[-30px] w-[1100px] h-12 bg-[#400167] opacity-80 shadow-lg transform skew-x-[-10deg] flicker z-30"></div>
            </div>
        </div>
    );
};

export default Projects1;
