import React, { useState } from "react";

// 🎯 Sounds with custom weights (rarity)
const sounds = [
  { src: "/sounds/arise.MP3", weight: 10 },
  { src: "/sounds/arisebi.MP3", weight: 4 },
  { src: "/sounds/erect .MP3", weight: 3 },
  { src: "/sounds/esira.MP3", weight: 6 },
  { src: "/sounds/get-my-bag.MP3", weight: 1 },
  { src: "/sounds/get-uuup.MP3", weight: 6 },
  { src: "/sounds/Gup.MP3", weight: 4 },
  { src: "/sounds/igris.MP3", weight: 3 }, 
  { src: "/sounds/wakey-wakey.MP3", weight: 4 },
  { src: "/sounds/widaly.MP3", weight: 5 },
  { src: "/sounds/ahh-rise.MP3", weight: 4 },
  { src: "/sounds/ahhriiise.MP3", weight: 4 },
  { src: "/sounds/ares.MP3", weight: 4 },
  { src: "/sounds/aris.MP3", weight: 5 },
];

const SoundFXPlayer = () => {
  const [currentSound, setCurrentSound] = useState(null);

  const playRandomSound = () => {
    const totalWeight = sounds.reduce((sum, sound) => sum + sound.weight, 0);
    const rand = Math.random() * totalWeight;

    let cumulative = 0;
    for (let i = 0; i < sounds.length; i++) {
      cumulative += sounds[i].weight;
      if (rand < cumulative) {
        const audio = new Audio(sounds[i].src);
        setCurrentSound(sounds[i].src);
        audio.play();
        break;
      }
    }
  };

  return (
    <div className="w-full mb-4 p-4 border border-purple-700 bg-black bg-opacity-20 shadow-lg text-center flicker">
      <h2 className="text-purple-400 font-bold mb-2"> Arise RNG</h2>
      <button
        onClick={playRandomSound}
        className="px-4 py-2 border border-purple-400 text-purple-200 rounded-md hover:shadow-purple-500 flicker transition-all"
      >
        Click Me
      </button>
      {currentSound && (
        <p className="text-sm text-purple-300 mt-2">
          Playing: {currentSound.split("/").pop()}
        </p>
      )}
    </div>
  );
};

export default SoundFXPlayer;
