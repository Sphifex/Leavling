import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HomePage from "./HomePage"; // Import HomePage component

const SystemUI = () => {
    const [showNotification, setShowNotification] = useState(true);
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);
    const [showHomePage, setShowHomePage] = useState(false); // Control Home Page visibility
    const [progress, setProgress] = useState(0); // Loading bar progress

    const message = "Your heart will stop in 0.02 seconds\nif you chose not to accept. \nWill you accept?";

    // Typewriter Effect for Notification Text
    useEffect(() => {
        if (showNotification) {
            setText(""); // Reset the text each time
            let i = 0;
            const interval = setInterval(() => {
                if (i < message.length) {
                    setText(message.slice(0, i + 1));
                    i++;
                } else {
                    clearInterval(interval);
                }
            }, 100);
            return () => clearInterval(interval);
        }
    }, [showNotification]);

    // Handle accept button - Transition to Home Page
    const handleAccept = () => {
        setShowNotification(false);
        setLoading(true);
        setProgress(0); // Reset progress

        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setLoading(false);
                    setShowHomePage(true); // Show Home Page after loading
                    return 100;
                }
                return prev + 5; // Adjust speed here
            });
        }, 100); // Adjust speed by changing interval time
    };

    // Handle decline button - Redirects to YouTube
    const handleDecline = () => {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center relative">
            <AnimatePresence>
                {showHomePage ? (
                    <HomePage /> // ✅ Show Home Page after transition
                ) : showNotification ? (
                    <div className="relative flex items-center justify-center">
                        {/* ✅ Extended Top Bezel */}
                        <div className="absolute top-[-40px] left-[-30px] w-[800px] h-12 bg-[#400167] opacity-80 shadow-lg transform skew-x-[10deg] flicker z-50"></div>
                        <div className="absolute top-[-40px] left-[-30px] w-[800px] h-10 bg-purple-400 opacity-50 blur-md transform skew-x-[8deg] flicker z-50"></div>
                        <div className="absolute top-[-40px] left-[-35px] w-[800px] h-8 bg-purple-300 opacity-30 blur-lg transform skew-x-[5deg] flicker z-50"></div>

                        {/* ✅ System Message Box */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.2, rotate: 10 }}
                            transition={{ duration: 1 }}
                            className="relative p-8 w-[750px] h-[400px] text-center system-message overflow-hidden z-10"
                        >
                            {/* ✅ Video Background */}
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
                            >
                                <source src="/videos/purple.mp4" type="video/mp4" />
                            </video>

                            {/* ✅ Notification Header */}
                            <div className="relative text-purple-600 text-lg font-bold tracking-widest uppercase border border-purple-400 px-4 py-2 inline-block bg-black bg-opacity-50 neon-notification z-50">
                                NOTIFICATION
                            </div>

                            {/* ✅ System Message */}
                            <p className="relative mt-6 text-purple-400 text-lg typing-effect neon-purple-text z-30">
                                {text.split("\n").map((line, index) => (
                                    <span key={index}>
                                        {line.includes("0.02 seconds") ? (
                                            <>
                                                {line.split("0.02 seconds")[0]}
                                                <span className="text-red-600 glowing-text">0.02 seconds</span>
                                                {line.split("0.02 seconds")[1]}
                                            </>
                                        ) : (
                                            line
                                        )}
                                        <br />
                                    </span>
                                ))}
                            </p>

                            {/* ✅ Buttons - Lowered */}
                            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 space-x-20 z-30">
                                <button
                                    onClick={handleAccept}
                                    className="accept-btn px-8 py-3 transition-all shadow-lg"
                                >
                                    Yes
                                </button>
                                <button
                                    onClick={handleDecline}
                                    className="decline-btn px-8 py-3 transition-all shadow-lg"
                                >
                                    No
                                </button>
                            </div>
                        </motion.div>

                        {/* ✅ Extended Bottom Bezel */}
                        <div className="absolute bottom-[-40px] left-[-30px] w-[800px] h-12 bg-[#400167] opacity-80 shadow-lg transform skew-x-[-10deg] flicker z-50"></div>
                        <div className="absolute bottom-[-40px] left-[-30px] w-[800px] h-10 bg-purple-400 opacity-50 blur-md transform skew-x-[-8deg] flicker z-50"></div>
                        <div className="absolute bottom-[-40px] left-[-35px] w-[800px] h-8 bg-purple-300 opacity-30 blur-lg transform skew-x-[-5deg] flicker z-50"></div>
                    </div>
                ) : loading ? (
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 3 }}
                        className="min-h-screen bg-black flex items-center justify-center"
                    >
                        <div className="text-center">
                            <p className="text-purple-400 text-2xl mb-4">ARISE...</p>
                            {/* ✅ Moving Loading Bar */}
                            <div className="relative w-96 h-4 bg-gray-800 rounded-md overflow-hidden">
                                <motion.div
                                    className="h-full bg-purple-500"
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: .09, ease: "linear" }}
                                />
                            </div>
                        </div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </div>
    );
};

export default SystemUI;
