import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HomePopup = () => {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [text, setText] = useState("");

    const message = "Welcome to the Portfolio of Rylee Pritchard. Accessing system functions...";

    // Typewriter effect
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < message.length) {
                setText((prev) => prev + message[i]);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 50);
        return () => clearInterval(interval);
    }, []);

    // Mouse movement tracking
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMouseX((e.clientX / window.innerWidth) * 40 - 20);
            setMouseY((e.clientY / window.innerHeight) * 40 - 20);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none"
        >
            <div className="relative w-[90%] max-w-[700px] h-[340px] md:h-[360px] p-6 flex flex-col text-center system-message overflow-hidden pointer-events-auto flicker">

                {/* 🌌 Animated Video Background */}
                <motion.video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
                    style={{
                        transform: `translate(${mouseX}px, ${mouseY}px) scale(1.3)`,
                        transition: "transform 0.1s ease-out",
                    }}
                >
                    <source src="/videos/purple.mp4" type="video/mp4" />
                </motion.video>

                {/* 🧾 Fixed Header */}
                <div className="relative z-30 text-white text-base md:text-lg font-bold tracking-widest neon-text uppercase border border-purple-400 px-4 py-2 inline-block bg-purple-900 bg-opacity-20 mx-auto mb-4">
                    SYSTEM MESSAGE
                </div>

                {/* 📜 Scrollable Text */}
                <div className="relative z-30 flex-1 overflow-y-auto px-4">
                    <p className="glowing-text text-red-400 text-sm md:text-lg leading-relaxed">{text}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default HomePopup;
