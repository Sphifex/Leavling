import React from "react";
import { useNavigate } from "react-router-dom";
import { FaWordpress, FaJsSquare, FaCss3Alt } from "react-icons/fa";

const Projects1 = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* 🌌 Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
                style={{ filter: "hue-rotate(335deg)" }}
            >
                <source src="/videos/space.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

            {/* 💻 Project Details Box */}
            <div className="relative z-20 w-[1000px] h-[800px] p-10 text-center bg-black bg-opacity-50 border border-purple-500 shadow-xl rounded-lg flicker">
                <h1 className="text-4xl font-bold text-purple-400 neon-text mb-6">
                    Calculator Project
                </h1>

                {/* 🧪 CodeSandbox Embed */}
                <div className="w-[650px] h-[400px] mx-auto mb-6 border border-purple-400 rounded-md overflow-hidden shadow-md">
                    <iframe
                        src="https://codesandbox.io/embed/calculator-8d45q6?fontsize=14&hidenavigation=1&theme=dark"
                        style={{
                            width: "100%",
                            height: "400px",
                            border: "0",
                            borderRadius: "6px",
                            overflow: "hidden"
                        }}
                        title="Calculator Project Preview"
                        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                    ></iframe>
                </div>

          {/* 📝 Project Description */}
<p className="text-gray-300 text-lg mb-6">
    A fully functional calculator built using React and styled with a Solo Leveling-inspired cyberpunk theme.
</p>

{/* ✅ Technologies Used */}

 <div className="flex justify-center space-x-6 text-5xl text-gray-400 mb-6">
                    
                    <FaJsSquare className="text-yellow-400" />
                    <FaCss3Alt className="text-blue-500" />
                </div>


                {/* ✅ Buttons (Properly Styled with Glow Effects) */}
                <div className="flex justify-center space-x-8 mt-6">
                    {/* 🔙 Back Button */}
                    <button 
                        onClick={() => navigate("/projects")}
                        className="px-6 py-3 glowing-text text-red-500 border border-red-500 rounded-md transition-all relative 
                        before:absolute before:inset-0 before:border-2 before:border-red-500 before:rounded-md 
                        before:opacity-50 before:transition-all hover:before:opacity-100 hover:before:shadow-red-500 flicker"
                    >
                        Back to Projects
                    </button>

                    {/* 🌍 View Project Button */}
                    <a 
                        href="https://codesandbox.io/p/sandbox/calculator-8d45q6"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-3 skills-glow text-blue-200 border border-purple-500 rounded-md transition-all relative 
                        before:absolute before:inset-0 before:border-2 before:border-purple-500 before:rounded-md 
                        before:opacity-50 before:transition-all hover:before:opacity-100 hover:before:shadow-purple-500 flicker"
                    >
                        View Project
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects1;
