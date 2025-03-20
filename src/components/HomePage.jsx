import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HomePopup from "./HomePopup";

const HomePage = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 2000);
        return () => clearTimeout(timer);
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
                style={{ filter: `hue-rotate(335deg)` }}
            >
                <source src="/videos/space.mp4" type="video/mp4" />
            </video>

            {/* Overlay to Darken Background */}
            <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>

            {/* Show Pop-Up After 5 Seconds */}
            {showPopup && <HomePopup />}
        </div>
    );
};

export default HomePage;
