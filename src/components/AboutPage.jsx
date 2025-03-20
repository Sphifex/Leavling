import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload, FaReact, FaCss3Alt, FaHtml5, FaJsSquare, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiFirebase } from "react-icons/si"; // More icons

const AboutPage = () => {
    const techLogos = [
        { icon: <FaReact className="text-blue-400" />, name: "React" },
        // { icon: <SiTailwindcss className="text-blue-300" />, name: "Tailwind CSS" },
        { icon: <FaJsSquare className="text-yellow-400" />, name: "JavaScript" },
        // { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
        { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
        { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
        // { icon: <FaGitAlt className="text-red-500" />, name: "Git" },
        
    ];

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center text-white">
            {/* Background Video */}
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

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>

            {/* Holographic Status Box */}
            <div className="relative z-20 p-8 w-[850px] h-[500px] text-center system-message holographic-box">
                {/* Top Bezel */}
                <div className="absolute top-[-30px] left-[-50px] w-[900px] h-12 bg-[#400167] opacity-80 shadow-lg transform skew-x-[10deg] flicker"></div>

                {/* Profile + Contact Section */}
                <div className="flex items-center justify-between px-6">
                    {/* Profile Picture & Info */}
                    <div className="flex flex-col items-center w-1/2">
                        <img
                            src="/images/profile.jpg" // Replace with actual profile pic
                            alt="Profile"
                            className="w-28 h-28 rounded-full border-4 border-purple-500 shadow-lg"
                        />
                        <h1 className="text-3xl font-bold mt-3 neon-text">Rylee Pritchard</h1>
                        <p className="text-purple-300 text-lg mt-1">Class: Front-End Developer</p>
                    </div>

                    {/* Contact & Social Links */}
                    <div className="w-1/2 text-left">
                        <h2 className="text-xl font-bold text-purple-400">Contact Info</h2>
                        <p className="mt-2 flex items-center text-gray-300">
                            <FaEnvelope className="mr-2 text-purple-400" /> rylee@example.com
                        </p>
                        <p className="mt-2 flex items-center text-gray-300">
                            <FaLinkedin className="mr-2 text-blue-400" /> 
                            <a href="https://linkedin.com/in/rylee" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                LinkedIn Profile
                            </a>
                        </p>
                        <p className="mt-2 flex items-center text-gray-300">
                            <FaGithub className="mr-2 text-gray-400" /> 
                            <a href="https://github.com/rylee" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                GitHub
                            </a>
                        </p>
                        <p className="mt-4 flex items-center text-gray-300">
                            <FaFileDownload className="mr-2 text-green-400" /> 
                            <a href="/resume.pdf" download className="hover:underline">
                                Download Resume
                            </a>
                        </p>
                    </div>
                </div>

                {/* Technology Skills Display */}
                <div className="mt-5 text-center">
                    <h2 className="text-xl font-bold text-purple-400">Most Used Technologies</h2>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 mt-3">
                        {techLogos.map((tech, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.1 }}
                                className="flex flex-col items-center p-4 bg-black bg-opacity-0 rounded-lg border border-purple-500 shadow-lg"
                            >
                                <div className="text-4xl">{tech.icon}</div> {/* Icon */}
                                <p className="mt-2 text-sm text-purple-300">{tech.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Personal Interests Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="mt-6 px-6 py-3 border-2 border-purple-500 text-purple-400 rounded-lg transition-all hover:bg-purple-500 hover:text-white"
                    onClick={() => alert("Personal Interests Section Coming Soon!")}
                >
                    View Personal Interests
                </motion.button>

                {/* Bottom Bezel */}
                <div className="absolute bottom-[-30px] left-[-50px] w-[900px] h-12 bg-[#400167] opacity-80 shadow-lg transform skew-x-[-10deg] flicker"></div>
            </div>
        </div>
    );
};

export default AboutPage;
