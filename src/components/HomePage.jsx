import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HomePopup from "./HomePopup";

const HomePage = () => {
    const [showPopup, setShowPopup] = useState(false); // Start hidden

    useEffect(() => {
        // Show the pop-up after 5 seconds
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 2000);
        return () => clearTimeout(timer); // Cleanup timeout on unmount
    }, []);

    return (
        <div className="min-h-screen w-full bg-black flex relative">
            {/* Show Pop-Up After 5 Seconds */}
            {showPopup && <HomePopup onClose={() => setShowPopup(false)} />}

            {/* Left-Side Navigation - Full Height */}
            <div className="w-1/4 h-screen flex flex-col items-start justify-center space-y-6 p-8">
                <motion.button whileHover={{ scale: 1.1 }} className="nav-btn">
                    Dashboard
                </motion.button>
                <motion.button whileHover={{ scale: 1.1 }} className="nav-btn">
                    Profile
                </motion.button>
                <motion.button whileHover={{ scale: 1.1 }} className="nav-btn">
                    Skills
                </motion.button>
                <motion.button whileHover={{ scale: 1.1 }} className="nav-btn">
                    Projects
                </motion.button>
                <motion.button whileHover={{ scale: 1.1 }} className="nav-btn">
                    Contact
                </motion.button>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex items-center justify-center">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-6xl font-bold text-purple-400 neon-text"
                >
                    
                </motion.h1>
            </div>
        </div>
    );
};

export default HomePage;
