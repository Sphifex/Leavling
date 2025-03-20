import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ProjectsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("personal");
    const navigate = useNavigate(); // Navigation hook

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Full-Screen Video Background */}
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

            {/* Overlay to Darken Background */}
            <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>

            {/* 🔥 Main Container for Projects */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative w-[900px] max-w-5xl p-10 text-center projects-box z-20 flicker "
            >
                {/* Title */}
                <h1 className="text-4xl font-bold text-purple-400 neon-text mb-6">
                    My Projects
                </h1>

                {/* 🔥 Category Selection Buttons */}
                <div className="flex justify-center space-x-6 mb-6">
                <button 
    className={`px-6 py-3 skills-glow text-white border border-purple-500 rounded-md transition-all relative 
                before:absolute before:inset-0 before:border-2 before:border-purple-500 before:rounded-md 
                before:opacity-50 before:transition-all hover:before:opacity-100 hover:before:shadow-red-500 flicker 
                ${selectedCategory === "personal" ? "active-tab" : ""}`}
    onClick={() => setSelectedCategory("personal")}
>
    Personal Projects
</button>

                    <button 
    className={`px-6 py-3 skills-glow text-white border border-purple-500 rounded-md transition-all relative 
                before:absolute before:inset-0 before:border-2 before:border-purple-500 before:rounded-md 
                before:opacity-50 before:transition-all hover:before:opacity-100 hover:before:shadow-green-500 flicker 
                ${selectedCategory === "client" ? "active-tab" : ""}`}
    onClick={() => setSelectedCategory("client")}
>
    Client Projects
</button>

                </div>

                {/* 🔥 Projects Section */}
                <div className="grid grid-cols-1 gap-6">
                    
                    {/* 🔹 Personal Projects */}
                    {selectedCategory === "personal" && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.div 
                                whileHover={{ scale: 1.05 }} 
                                className="project-box cursor-pointer"
                                onClick={() => navigate("/projects/portfolio")}
                            >
                                <h3 className="text-lg font-bold text-purple-300">Portfolio Website</h3>
                                <p className="text-gray-300 text-sm mt-2">My Solo Leveling-inspired portfolio.</p>
                            </motion.div>
                        </motion.div>
                    )}

                    {/* 🔹 Client Projects */}
                    {selectedCategory === "client" && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.div 
                                whileHover={{ scale: 1.05 }} 
                                className="project-box cursor-pointer"
                                onClick={() => navigate("/projects/wellspring")}
                            >
                                <h3 className="text-lg font-bold text-purple-300">WellspringFL.com</h3>
                                <p className="text-gray-300 text-sm mt-2">Website for my local church.</p>
                            </motion.div>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectsPage;
