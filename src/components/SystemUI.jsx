import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const SystemUI = () => {
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(true);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const message = `Your heart will stop in 0.02 seconds\nif you chose not to accept.\nWill you accept?`;

  useEffect(() => {
    if (showNotification) {
      setText("");
      let i = 0;
      const interval = setInterval(() => {
        if (i < message.length) {
          setText(message.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 80);
      return () => clearInterval(interval);
    }
  }, [showNotification]);

  const handleAccept = () => {
    setShowNotification(false);
    setLoading(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false);
          navigate("/home");
          return 100;
        }
        return prev + 4;
      });
    }, 100);
  };

  const handleDecline = () => {
    window.location.href =
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative">
      <AnimatePresence>
        {showNotification ? (
          <div className="relative flex items-center justify-center">
            {/* 🔹 Top Bezel Layers */}
            <div className="absolute top-[-40px] left-[-30px] w-[800px] h-12 bg-[#400167] opacity-80 shadow-lg transform skew-x-[10deg] flicker z-50" />
            <div className="absolute top-[-40px] left-[-30px] w-[800px] h-10 bg-purple-400 opacity-50 blur-md transform skew-x-[8deg] flicker z-50" />
            <div className="absolute top-[-40px] left-[-35px] w-[800px] h-8 bg-purple-300 opacity-30 blur-lg transform skew-x-[5deg] flicker z-50" />

            {/* 🧾 System Message Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1 }}
              className="relative p-8 w-[90vw] max-w-[750px] h-[400px] text-center system-message overflow-hidden z-10"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
              >
                <source src="/videos/purple.mp4" type="video/mp4" />
              </video>

              {/* 🧪 Notification Title */}
              <div className="relative text-purple-600 text-lg font-bold tracking-widest uppercase border border-purple-400 px-4 py-2 inline-block bg-black bg-opacity-50 neon-notification z-30">
                NOTIFICATION
              </div>

              {/* 📜 Message */}
              <p className="relative mt-6 text-purple-400 text-base sm:text-lg typing-effect neon-purple-text z-30 whitespace-pre-line">
                {text.split("\n").map((line, index) => (
                  <span key={index}>
                    {line.includes("0.02 seconds") ? (
                      <>
                        {line.split("0.02 seconds")[0]}
                        <span className="text-red-600 glowing-text">
                          0.02 seconds
                        </span>
                        {line.split("0.02 seconds")[1]}
                      </>
                    ) : (
                      line
                    )}
                    <br />
                  </span>
                ))}
              </p>

             {/* 🟣 Buttons */}
<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex flex-col sm:flex-row sm:space-x-10 space-y-4 sm:space-y-0 items-center w-full px-6">
  <button
    onClick={handleAccept}
    className="accept-btn w-full sm:w-auto px-4 sm:px-8 py-2 sm:py-3 transition-all shadow-lg"
  >
    Yes
  </button>
  <button
    onClick={handleDecline}
    className="decline-btn w-full sm:w-auto px-4 sm:px-8 py-2 sm:py-3 transition-all shadow-lg"
  >
    No
  </button>
</div>

            </motion.div>

            {/* 🔻 Bottom Bezel Layers */}
            <div className="absolute bottom-[-40px] left-[-30px] w-[800px] h-12 bg-[#400167] opacity-80 shadow-lg transform skew-x-[-10deg] flicker z-50" />
            <div className="absolute bottom-[-40px] left-[-30px] w-[800px] h-10 bg-purple-400 opacity-50 blur-md transform skew-x-[-8deg] flicker z-50" />
            <div className="absolute bottom-[-40px] left-[-35px] w-[800px] h-8 bg-purple-300 opacity-30 blur-lg transform skew-x-[-5deg] flicker z-50" />
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
              <div className="relative w-96 max-w-full h-4 bg-gray-800 rounded-md overflow-hidden">
                <motion.div
                  className="h-full bg-purple-500"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: "linear" }}
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
