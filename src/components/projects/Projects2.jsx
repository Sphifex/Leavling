import React from "react";
import { useNavigate } from "react-router-dom";
import { FaJsSquare, FaCss3Alt } from "react-icons/fa";

const Projects2 = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center relative">
            {/* 🌌 Full-Screen Video Background */}
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

            {/* 🕶️ Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

            {/* 📦 Project Details Box */}
            <div className="relative z-20 w-[1000px] h-[800px] p-10 text-center bg-black bg-opacity-50 border border-purple-500 shadow-xl rounded-lg flicker">
                {/* 🏷️ Project Title */}
                <h1 className="text-4xl font-bold skills-glow text-white neon-text mb-6 ">
                    Art Gallery App
                </h1>

                {/* 🔳 Embedded CodeSandbox */}
                <div className="w-[550px] h-[300px] mx-auto mb-6 border-2 border-purple-400 rounded-lg overflow-hidden shadow-lg">
                <iframe
  src="https://codesandbox.io/embed/art-galay-pw8cgj?autoresize=1&fontsize=14&hidenavigation=1&view=preview"
  className="w-[550px] h-[350px] mx-auto rounded-lg border border-purple-400 shadow-md mb-6"
  title="Art Gallery Sandbox"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
/>

                </div>

                {/* 📝 Description */}
                <p className="text-gray-300 text-lg mb-6">
                A web-based art gallery project designed to showcase artwork dynamically, primarily using HTML and CSS, with JavaScript handling the navigation bar and footer. I followed the Lumina Creative project from the Modern HTML & CSS From The Beginning 2.0 (2024 Revamp) Udemy course, while also adding my own touches. This art page features a reactive UI with smooth animations and includes a Contact page, About page, Events page, and an Artist Submission page.
                </p>

                {/* 🧰 Technologies Used */}
                <div className="flex justify-center space-x-6 text-5xl text-gray-400 mb-6">
                    <FaJsSquare className="text-yellow-400" />
                    <FaCss3Alt className="text-blue-500" />
                </div>

                {/* ✅ Buttons (Styled) */}
                <div className="flex justify-center space-x-8 mt-6">
                    <button 
                        onClick={() => navigate("/projects")}
                        className="px-6 py-3 glowing-text text-red-500 border border-red-500 rounded-md transition-all relative 
                        before:absolute before:inset-0 before:border-2 before:border-red-500 before:rounded-md 
                        before:opacity-50 before:transition-all hover:before:opacity-100 hover:before:shadow-red-500 flicker"
                    >
                        Back to Projects
                    </button>

                    <a 
                        href="https://codesandbox.io/p/sandbox/art-galay-pw8cgj"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 skills-glow text-blue-200 border border-purple-500 rounded-md transition-all relative 
                        before:absolute before:inset-0 before:border-2 before:border-purple-500 before:rounded-md 
                        before:opacity-50 before:transition-all hover:before:opacity-100 hover:before:shadow-red-500 flicker"
                    >
                        View Project
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects2;
