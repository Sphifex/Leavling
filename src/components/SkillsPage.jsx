import React from "react";
import { motion } from "framer-motion";

const skills = [
    { name: "HTML", years: 8 },
    { name: "CSS", years: 8 },
    { name: "JavaScript", years: 6 },
    { name: "React", years: 5 },
    { name: "Tailwind CSS", years: 4 },
    { name: "PostCSS", years: 3 },
    { name: "WordPress", years: 5 },
    { name: "UI/UX Design", years: 4 }
];

const SkillsPage = () => {
    return (
        <div className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
                style={{ filter: "hue-rotate(335deg)" }}
            >
                <source src="/videos/space.mp4" type="video/mp4" />
            </video>

            {/* Overlay (Darkens Background) */}
            <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

            {/* Skills Container */}
            <div className="relative z-20 p-10 w-[800px] bg-black bg-opacity-40 rounded-lg border border-purple-500 shadow-lg">
                {/* Header */}
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1 }} 
                    className="text-4xl font-bold text-purple-500 glow-glow text-center mb-6"
                >
                    Skills Overview
                </motion.h1>

                {/* Skills List */}
                <div className="space-y-6">
                    {skills.map((skill, index) => (
                        <div key={index} className="w-full">
                            <div className="flex justify-between">
                                <span className="text-blue-400 text-lg skills-glow">{skill.name}</span>
                                <span className="text-blue-400 text-sm skills-glow">{skill.years} years</span>
                            </div>

                            {/* Progress Bar (Minecraft XP-Style) */}
                            <div className="w-full h-5 bg-gray-800 rounded-full border border-purple-900 mt-1 relative overflow-hidden">
                                <motion.div
                                    className="h-full bg-purple-600"
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${(skill.years / 10) * 100}%` }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    style={{
                                        boxShadow: "0px 0px 20px #a855f7, 0px 0px 30px #a855f7"
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsPage;
