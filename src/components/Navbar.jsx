import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // ✅ Prevent duplication by only rendering navbar ONCE
    return (
        <div className="fixed left-0 w-1/4 h-screen flex flex-col items-start justify-center space-y-6 p-8 z-30">
            <motion.button 
                whileHover={{ x: 15, scale: 1.1 }} 
                className="nav-btn"
                onClick={() => navigate("/home")}
            >
                Back
            </motion.button>
            <motion.button 
                whileHover={{ x: 15, scale: 1.1 }} 
                className="nav-btn"
                onClick={() => navigate("/about")}
            >
                About
            </motion.button>
            <motion.button 
                whileHover={{ x: 15, scale: 1.1 }} 
                className="nav-btn"
                onClick={() => navigate("/skills")}
            >
                Skills
            </motion.button>
            <motion.button 
                whileHover={{ x: 15, scale: 1.1 }} 
                className="nav-btn"
                onClick={() => navigate("/projects")}
            >
                Projects
            </motion.button>
            <motion.button 
                whileHover={{ x: 15, scale: 1.1 }} 
                className="nav-btn"
                onClick={() => navigate("/quests")}
            >
                Quests
            </motion.button>
        </div>
    );
};

export default Navbar;
