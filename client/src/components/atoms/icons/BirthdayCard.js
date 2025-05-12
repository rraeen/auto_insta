import React, { useState, useEffect, useRef } from "react";
import nazia from "../../../assets/image.png";

const BirthdayCardForNazia = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showStars, setShowStars] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  // Create confetti particles
  const [confettiParticles, setConfettiParticles] = useState([]);
  const [stars, setStars] = useState([]);
  const [fireworks, setFireworks] = useState([]);

  const cardRef = useRef(null);

  // Create stars
  useEffect(() => {
    if (showStars) {
      const newStars = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: 1 + Math.random() * 2,
          opacity: 0.5 + Math.random() * 0.5,
          blinkSpeed: 0.5 + Math.random() * 2,
        });
      }
      setStars(newStars);
    }
  }, [showStars]);

  // Create fireworks
  useEffect(() => {
    if (showFireworks) {
      const launchFirework = () => {
        const id = Date.now();
        const x = 20 + Math.random() * 60; // Keep within central 60% of screen
        const y = 30 + Math.random() * 40; // Keep in upper half
        const color = ["#FFD700", "#FF6B6B", "#4ECDC4", "#7B68EE", "#FF69B4"][
          Math.floor(Math.random() * 5)
        ];

        setFireworks((prev) => [...prev, { id, x, y, color }]);

        // Remove this firework after animation completes
        setTimeout(() => {
          setFireworks((prev) => prev.filter((fw) => fw.id !== id));
        }, 2000);
      };

      // Launch initial fireworks
      for (let i = 0; i < 3; i++) {
        setTimeout(() => launchFirework(), i * 300);
      }

      // Continue launching fireworks periodically
      const interval = setInterval(() => {
        if (Math.random() > 0.5) launchFirework();
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [showFireworks]);

  useEffect(() => {
    if (showConfetti) {
      // Generate random confetti particles
      const particles = [];
      for (let i = 0; i < 200; i++) {
        particles.push({
          id: i,
          x: Math.random() * 100,
          y: -20 - Math.random() * 80,
          size: 5 + Math.random() * 10,
          color: ["#FFD700", "#FF6B6B", "#4ECDC4", "#7B68EE", "#FF69B4"][
            Math.floor(Math.random() * 5)
          ],
          rotation: Math.random() * 360,
          speed: 1 + Math.random() * 3,
        });
      }
      setConfettiParticles(particles);

      // Show message after confetti starts
      setTimeout(() => {
        setShowMessage(true);
      }, 800);

      // Show stars after a delay
      setTimeout(() => {
        setShowStars(true);
      }, 1500);

      // Show fireworks after a delay
      setTimeout(() => {
        setShowFireworks(true);
      }, 2500);
    }
  }, [showConfetti]);

  const handleOpen = () => {
    setIsOpen(true);

    // Trigger confetti after envelope opens
    setTimeout(() => {
      setShowConfetti(true);
    }, 1000);

    // Add a small 3D rotation effect to the card
    if (cardRef.current) {
      cardRef.current.style.transition = "transform 1.5s ease-out";
      cardRef.current.style.transform = "rotateY(360deg)";
      setTimeout(() => {
        if (cardRef.current) {
          cardRef.current.style.transform = "";
        }
      }, 1500);
    }
  };

  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 overflow-hidden">
      {/* Stars background */}
      {showStars && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute bg-white rounded-full animate-twinkle"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                animationDuration: `${star.blinkSpeed}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Animated background hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-purple-300 opacity-20 animate-float"
            style={{
              fontSize: `${20 + Math.random() * 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${15 + Math.random() * 20}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            ♥
          </div>
        ))}
      </div>

      {/* Confetti */}
      {showConfetti && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {confettiParticles.map((particle) => (
            <div
              key={particle.id}
              className="absolute animate-fall"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                backgroundColor: particle.color,
                transform: `rotate(${particle.rotation}deg)`,
                animationDuration: `${4 / particle.speed}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Fireworks */}
      {showFireworks && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {fireworks.map((fw) => (
            <div
              key={fw.id}
              className="absolute w-2 h-2 rounded-full animate-firework"
              style={{
                left: `${fw.x}%`,
                top: `${fw.y}%`,
                backgroundColor: fw.color,
                boxShadow: `0 0 20px 5px ${fw.color}`,
              }}
            />
          ))}
        </div>
      )}

      {/* Card container */}
      <div
        ref={cardRef}
        className={`relative w-80 md:w-96 transition-all duration-1000 ${
          isOpen ? "scale-110" : "scale-100 hover:scale-105"
        }`}
      >
        {/* Envelope */}
        <div
          className={`relative mx-auto w-full aspect-[4/3] ${
            isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          } transition-opacity duration-1000`}
        >
          {/* Envelope body */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 to-purple-900 rounded-lg shadow-xl border border-indigo-500/30">
            {/* Envelope flap */}
            <div
              className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-indigo-700 to-indigo-800 origin-top"
              style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
            >
              <div className="absolute inset-0 flex items-center justify-center pt-4">
                <img
                  src={nazia}
                  alt="N"
                  className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center shadow-glow"
                />
              </div>
            </div>

            {/* Envelope bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-3/4 flex items-center justify-center">
              <button
                onClick={handleOpen}
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-lg font-bold text-white hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105 active:scale-95"
              >
                Open Me, Nazia
              </button>
            </div>
          </div>
        </div>

        {/* Card (initially hidden) */}
        <div
          className={`absolute inset-0 bg-gray-900 rounded-lg shadow-2xl overflow-hidden transition-all duration-1000 border border-purple-500/30 ${
            isOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-90 pointer-events-none"
          }`}
          style={{ overflow: "auto" }}
        >
          {/* Card top with decoration */}
          <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-purple-800 to-purple-900">
            <div
              className="absolute -bottom-6 left-0 right-0 h-12 bg-gray-900"
              style={{
                clipPath:
                  "polygon(0 100%, 100% 100%, 100% 0, 80% 50%, 65% 100%, 35% 100%, 20% 50%, 0 0)",
              }}
            ></div>
          </div>

          {/* Card content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <div
              className={`mt-6 mb-2 transition-all duration-1000 ${
                showMessage ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <div className="w-24 h-[500px] md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-purple-400 mx-auto shadow-glow">
                <img
                  src={nazia}
                  alt="Nazia"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <img src={nazia} alt="" className="w-12 h-12 mt-6 rounded-full bg-purple-600 flex items-center justify-center shadow-glow"
            />

            <h1
              className={`text-2xl md:text-3xl font-bold text-white mt-2 mb-1 transition-all duration-1000 ${
                showMessage ? "opacity-100" : "opacity-0"
              }`}
            >
              Happy Birthday, Nazia!
            </h1>

            <div
              className={`w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded mb-4 transition-all duration-1000 ${
                showMessage ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
            ></div>
          

            {/* Inner card with message that appears */}
            <div
              className={`w-full max-w-xs bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-lg shadow-inner transition-all duration-1000 border border-purple-500/20 ${
                showMessage
                  ? "opacity-100 transform-none"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-purple-300 italic mb-3">
                "Miles apart, but always connected through our hearts."
              </p>

              <p className="text-gray-300 mb-4">
                Dear Nazia, <br />
                Though miles may keep us apart, your warmth and kindness are
                always close to my heart. Your laughter is the sunshine that
                brightens even the cloudiest days. Wishing you a birthday as
                beautiful and radiant as your spirit! With love,{" "}
              </p>

              <p className="text-pink-300 font-bold animate-pulse">
                Raunak ♥
              </p>
            </div>

            <div
              className={`mt-4 transition-opacity duration-500 ${
                showMessage ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-sm text-gray-400">
                May your special day be as wonderful as you are!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add animation keyframes
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }
`,
  styleSheet.cssRules.length
);

styleSheet.insertRule(
  `
  @keyframes fall {
    0% { transform: translateY(0) rotate(0deg); }
    100% { transform: translateY(1000px) rotate(360deg); }
  }
`,
  styleSheet.cssRules.length
);

styleSheet.insertRule(
  `
  @keyframes twinkle {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 1; }
  }
`,
  styleSheet.cssRules.length
);

styleSheet.insertRule(
  `
  @keyframes firework {
    0% { transform: scale(0.1); opacity: 1; }
    50% { transform: scale(20); opacity: 0.8; }
    100% { transform: scale(40); opacity: 0; }
  }
`,
  styleSheet.cssRules.length
);

styleSheet.insertRule(
  `
  .animate-float {
    animation: float linear infinite;
  }
`,
  styleSheet.cssRules.length
);

styleSheet.insertRule(
  `
  .animate-fall {
    animation: fall linear forwards;
  }
`,
  styleSheet.cssRules.length
);

styleSheet.insertRule(
  `
  .animate-twinkle {
    animation: twinkle ease-in-out infinite;
  }
`,
  styleSheet.cssRules.length
);

styleSheet.insertRule(
  `
  .animate-firework {
    animation: firework 2s ease-out forwards;
  }
`,
  styleSheet.cssRules.length
);

styleSheet.insertRule(
  `
  .shadow-glow {
    box-shadow: 0 0 15px rgba(147, 51, 234, 0.6);
  }
`,
  styleSheet.cssRules.length
);

export default BirthdayCardForNazia;
