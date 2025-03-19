import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HomePopup from "./HomePopup";

const HomePage = () => {
    const [showPopup, setShowPopup] = useState(false); // Delayed Pop-Up

    useEffect(() => {
        // Show the pop-up after 5 seconds
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 3000);
        return () => clearTimeout(timer); // Cleanup timeout on unmount
    }, []);

    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* Full-Screen Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
                style={{ filter: `hue-rotate(335deg)` }} // Adjust hue dynamically
            >
                <source src="/videos/space.mp4" type="video/mp4" />
            </video>

            {/* Overlay to Darken Background (Optional) */}
            <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>

            {/* Show Pop-Up After 5 Seconds */}
            {showPopup && <HomePopup />}

            {/* Left-Side Navigation - Full Height */}
            <div className="absolute left-0 w-1/4 h-screen flex flex-col items-start justify-center space-y-6 p-8 z-20">
                <motion.button 
                    whileHover={{ x: 15, scale: 1.1 }} 
                    className="nav-btn"
                >
                    Back
                </motion.button>
                <motion.button 
                    whileHover={{ x: 15, scale: 1.1 }} 
                    className="nav-btn"
                >
                    About
                </motion.button>
                <motion.button 
                    whileHover={{ x: 15, scale: 1.1 }} 
                    className="nav-btn"
                >
                    Skills
                </motion.button>
                <motion.button 
                    whileHover={{ x: 15, scale: 1.1 }} 
                    className="nav-btn"
                >
                    Projects
                </motion.button>
                <motion.button 
                    whileHover={{ x: 15, scale: 1.1 }} 
                    className="nav-btn"
                >
                    Quests
                </motion.button>
            </div>
        </div>
    );
};

export default HomePage;
