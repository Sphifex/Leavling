import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SoundFXPlayer from "./SoundFXPlayer";

const Navbar = () => {
    const navigate = useNavigate();

    return (
      <div className="fixed left-0 w-1/1 h-screen flex flex-col items-center justify-center p-7 z-30">
  {/* 🎵 SoundFX Player (iPod Style) */}
            <div className="w-full mb-8 pl-1">
                <SoundFXPlayer />
            </div>

            {/* 🔘 Navigation Buttons (Vertically Centered) */}
            <div className="flex flex-col space-y-6 w-full">
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
        </div>
    );
};

export default Navbar;
