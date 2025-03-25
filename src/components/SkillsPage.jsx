import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaCss3Alt, FaHtml5, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss, SiPostcss, SiPostman, SiRiotgames, SiCrunchyroll, SiValorant, SiDavinciresolve } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { BsWordpress } from "react-icons/bs";
import { PiGreaterThanOrEqualBold } from "react-icons/pi";
import { GoCopilot } from "react-icons/go";

const skills = [
  { name: "HTML", years: 3 },
  { name: "CSS", years: 3 },
  { name: "JavaScript", years: 2 },
  { name: "React", years: 1 },
  { name: "Tailwind CSS", years: 1 },
  { name: "PostCSS", years: 1 },
];

const technologies = [
  { icon: <FiFigma className="text-pink-500" />, name: "1.5 years" },
  { icon: <BsWordpress className="text-blue-500" />, name: "3 years" },
  { icon: <SiPostman className="text-orange-400" />, name: "1.5 years" },
  { icon: < GoCopilot className="text-white" />, name: "2 years" },
  { icon: <SiDavinciresolve className="text-red-500" />, name: "5 years" },
  { icon: <SiPostcss className="text-pink-500" />, name: "This looks cool" },
];

const SkillsPage = () => {
  return (
    <div className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden px-4 sm:px-10">
      {/* Background Video */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: "hue-rotate(335deg)" }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        <source src="/videos/space.mp4" type="video/mp4" />
      </motion.video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* Skills Box */}
      <div className="relative z-20 w-full max-w-[800px] bg-black bg-opacity-30 rounded-lg border border-purple-500 p-6 md:p-10 shadow-lg flicker-border">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl font-bold skills-glow text-white text-center mb-6"
        >
           My Skills 
        </motion.h1>

        {/* Skills List */}
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index} className="w-full">
              <div className="flex justify-between text-sm sm:text-base">
                <span className="text-blue-500 skills-glow">{skill.name}</span>
                <span className="text-blue-500 skills-glow">{skill.years} years</span>
              </div>
              <div className="w-full h-5 bg-gray-800 rounded-full border border-blue-500 mt-1 relative overflow-hidden">
                <motion.div
                  className="h-full bg-blue-600"
                  initial={{ width: "0%" }}
                  animate={{ width: `${(skill.years / 10) * 100}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  style={{
                    boxShadow: "0px 0px 10px blue, 0px 0px 20px pink"
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Technology Icons Section */}
        <div className="mt-10">
          <h2 className="text-xl font-bold skills-glow text-purple-200 text-center mb-4">Other Technologies</h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 justify-items-center">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center"
              >
                <div className="text-4xl">{tech.icon}</div>
                <p className="mt-2 text-xs sm:text-sm text-purple-300">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
