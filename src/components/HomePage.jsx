import React from "react";
import { motion } from "framer-motion";

const HomePage = () => {
    return (
        <div className="min-h-screen w-full bg-black flex">
            {/* Left-Side Navigation - Full Height */}
            <div className="w-1/4 h-screen flex flex-col items-start justify-center space-y-10 p-8">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="nav-btn text-2xl px-8 py-4"
                >
                    Dashboard
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="nav-btn text-2xl px-8 py-4"
                >
                    About
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="nav-btn text-2xl px-8 py-4"
                >
                    Skills
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="nav-btn text-2xl px-8 py-4"
                >
                    Projects
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="nav-btn text-2xl px-8 py-4"
                >
                    Quests
                </motion.button>
            </div>

            {/* Main Content Area - Centered */}
            <div className="flex-1 flex items-center justify-center">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-6xl font-bold text-purple-400 neon-text"
                >
                    WELCOME TO YOUR SYSTEM
                </motion.h1>
            </div>
        </div>
    );
};

export default HomePage;
