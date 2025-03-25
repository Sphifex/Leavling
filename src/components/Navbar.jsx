import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SoundFXPlayer from "./SoundFXPlayer";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* 🌐 Desktop Navbar */}
            <div className="hidden md:flex fixed left-0 w-1/4 h-screen flex-col items-center justify-center p-7 z-30">
                {/* 🎵 SoundFX Player (iPod Style) */}
                <div className="w-full mb-8 pl-1">
                    <SoundFXPlayer />
                </div>

                {/* 🔘 Navigation Buttons */}
                <div className="flex flex-col space-y-6 w-full">
                    <motion.button whileHover={{ x: 15, scale: 1.1 }} className="nav-btn" onClick={() => navigate("/home")}>
                        Back
                    </motion.button>
                    <motion.button whileHover={{ x: 15, scale: 1.1 }} className="nav-btn" onClick={() => navigate("/about")}>
                        About
                    </motion.button>
                    <motion.button whileHover={{ x: 15, scale: 1.1 }} className="nav-btn" onClick={() => navigate("/skills")}>
                        Skills
                    </motion.button>
                    <motion.button whileHover={{ x: 15, scale: 1.1 }} className="nav-btn" onClick={() => navigate("/projects")}>
                        Projects
                    </motion.button>
                    <motion.button whileHover={{ x: 15, scale: 1.1 }} className="nav-btn" onClick={() => navigate("/quests")}>
                        Quests
                    </motion.button>
                </div>
            </div>

            {/* 📱 Mobile Navbar */}
            <div className="md:hidden fixed top-0 w-full flex justify-around items-center bg-black bg-opacity-80 p-2 pt-5 z-30">
                {["home", "about", "skills", "projects", "quests"].map((page, index) => (
                    <motion.button
                        key={index}
                        whileTap={{ scale: 0.95 }}
                        className="text-[10px] px-4 py-2 text-purple-300 border border-purple-500  relative transition-all flicker
                            before:absolute before:inset-0 before:border-2 before:border-purple-500 before: 
                            before:opacity-40 before:transition-all hover:before:opacity-100 hover:before:shadow-purple-500"
                        onClick={() => navigate(`/${page}`)}
                    >
                        {page.charAt(0).toUpperCase() + page.slice(1)}
                    </motion.button>
                ))}
            </div>
        </>
    );
};

export default Navbar;
