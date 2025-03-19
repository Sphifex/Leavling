import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HomePopup from "./HomePopup";
import SkillsPage from "./SkillsPage"; // Import Skills Page

const HomePage = () => {
    const [showPopup, setShowPopup] = useState(false); // Controls the pop-up
    const [currentPage, setCurrentPage] = useState("home"); // Tracks active page

    useEffect(() => {
        if (currentPage === "home") {
            // Show pop-up only on the home page
            const timer = setTimeout(() => {
                setShowPopup(true);
            }, 3000);
            return () => clearTimeout(timer);
        } else {
            setShowPopup(false); // Hide popup on other pages
        }
    }, [currentPage]);

    return (
        <div className="relative min-h-screen w-full overflow-hidden">
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

            {/* Overlay to Darken Background (Optional) */}
            <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>

            {/* Show Pop-Up Only on Home Page */}
            {currentPage === "home" && showPopup && <HomePopup />}

            {/* Persistent Navbar */}
            <div className="absolute left-0 w-1/4 h-screen flex flex-col items-start justify-center space-y-6 p-8 z-30">
                <motion.button 
                    whileHover={{ x: 15, scale: 1.1 }} 
                    className="nav-btn"
                    onClick={() => setCurrentPage("home")}
                >
                    Back
                </motion.button>
                <motion.button 
                    whileHover={{ x: 15, scale: 1.1 }} 
                    className="nav-btn"
                    onClick={() => setCurrentPage("about")}
                >
                    About
                </motion.button>
                <motion.button 
                    whileHover={{ x: 15, scale: 1.1 }} 
                    className="nav-btn"
                    onClick={() => setCurrentPage("skills")}
                >
                    Skills
                </motion.button>
                <motion.button 
                    whileHover={{ x: 15, scale: 1.1 }} 
                    className="nav-btn"
                    onClick={() => setCurrentPage("projects")}
                >
                    Projects
                </motion.button>
                <motion.button 
                    whileHover={{ x: 15, scale: 1.1 }} 
                    className="nav-btn"
                    onClick={() => setCurrentPage("quests")}
                >
                    Quests
                </motion.button>
            </div>

            {/* Page Switching Logic */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
                {currentPage === "skills" && <SkillsPage />}
                {currentPage === "home" && <></>}
                {/* Add other pages like <AboutPage />, <ProjectsPage />, etc. */}
            </div>
        </div>
    );
};

export default HomePage;
