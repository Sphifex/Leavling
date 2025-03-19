import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HomePopup = () => {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    const message = "Welcome back, Player. Accessing system functions...";

    // Typewriter Effect for Message
    const [text, setText] = useState("");
    useEffect(() => {
        setText(""); // Reset text before typing
        let i = 0;
        const interval = setInterval(() => {
            if (i < message.length) {
                setText(message.slice(0, i + 1));
                i++;
            } else {
                clearInterval(interval);
            }
        }, 50);
        return () => clearInterval(interval);
    }, []);

    // Track Mouse Movement
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMouseX((e.clientX / window.innerWidth) * 30 - 15); // Moves in X direction
            setMouseY((e.clientY / window.innerHeight) * 30 - 15); // Moves in Y direction
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-40"
        >
            <div className="relative p-8 w-[750px] h-[350px] text-center system-message overflow-hidden pointer-events-auto">
                {/* Background Video - Moves with Mouse */}
                <motion.video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
                    style={{
                        transform: `translate(${mouseX}px, ${mouseY}px)`, // Moves with mouse
                        transition: "transform 0.1s ease-out",
                    }}
                >
                    <source src="/videos/space.mp4" type="video/mp4" />
                </motion.video>

                {/* Extended Top Bezel */}
                <div className="absolute top-[-40px] left-[-110px] right-[-10px] mx-auto h-12 w-[130%] bg-[#400167] opacity-80 shadow-lg transform skew-x-[10deg] flicker"></div>
                <div className="absolute top-[-35px] left-[-120px] right-[-15px] mx-auto h-10 w-[135%] bg-purple-400 opacity-50 blur-md transform skew-x-[8deg] flicker"></div>
                <div className="absolute top-[-35px] left-[-120px] right-[-20px] mx-auto h-8 w-[135%] bg-purple-300 opacity-30 blur-lg transform skew-x-[5deg] flicker"></div>

                {/* Extended Bottom Bezel */}
                <div className="absolute bottom-[-40px] left-[-110px] right-[-10px] mx-auto h-12 w-[130%] bg-[#400167] opacity-80 shadow-lg transform skew-x-[-10deg] flicker"></div>
                <div className="absolute bottom-[-35px] left-[-120px] right-[-12px] mx-auto h-10 w-[135%] bg-purple-400 opacity-50 blur-md transform skew-x-[-8deg] flicker"></div>
                <div className="absolute bottom-[-35px] left-[-120px] right-[-20px] mx-auto h-8 w-[135%] bg-purple-300 opacity-30 blur-lg transform skew-x-[-5deg] flicker"></div>

                {/* Notification Header */}
                <div className="relative text-white text-lg font-bold tracking-widest neon-text uppercase border border-purple-400 px-4 py-2 inline-block bg-black bg-opacity-50 z-30">
                    SYSTEM MESSAGE
                </div>

                {/* System Message */}
                <p className="relative mt-6 text-purple-300 text-lg typing-effect z-30">{text}</p>
            </div>
        </motion.div>
    );
};

export default HomePopup;
