import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import SystemUI from "./components/SystemUI";
import HomePage from "./components/HomePage";
import SkillsPage from "./components/SkillsPage";
import ProjectsPage from "./components/ProjectsPage";
import AboutPage from "./components/AboutPage"; // ✅ Import About Page
import PortfolioProject from "./components/projects/PortfolioProject";
import WellspringProject from "./components/projects/WellspringProject";
import Navbar from "./components/Navbar"; // ✅ Global Navbar import
import Projects1 from "./components/projects/Projects1";




import "./index.css";

const App = () => {
    return (
        <Router>
            <AppContent />
        </Router>
    );
};

// ✅ Ensure Navbar is visible on all pages AFTER System UI is completed
const AppContent = () => {
    const location = useLocation();
    const showNavbar = location.pathname !== "/"; // ✅ Navbar hides on System UI intro

    return (
        <div className="relative min-h-screen w-full">
            {showNavbar && <Navbar />} {/* ✅ Navbar is now visible on all pages after System UI */}

            <Routes>
                <Route path="/" element={<SystemUI />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} /> {/* ✅ Add About Page route */}
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/portfolio" element={<PortfolioProject />} />
                <Route path="/projects/wellspring" element={<WellspringProject />} />
                <Route path="/projects/projects1" element={<Projects1 />} />


            </Routes>
        </div>
    );
};

export default App;
