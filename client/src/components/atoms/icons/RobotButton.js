import React, { useState } from 'react';

const RobotButton = () => {
  const [isActive, setIsActive] = useState(false);
  
  const toggleActive = () => {
    setIsActive(!isActive);
  };
  
  return (
    <div className="">
      <button
        onClick={toggleActive}
        className={`relative w-6 h-6 rounded-full transition-all duration-500 transform hover:scale-105 focus:outline-none mx-4 mt-2 ${
          isActive 
            ? 'bg-gradient-to-br from-emerald-400/30 to-teal-600/30' 
            : 'bg-gradient-to-br from-slate-400/30 to-gray-600/30'
        }`}
        style={{
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
      >
        {/* Glass effect border */}
        <div className={`absolute inset-0 rounded-full border ${
          isActive ? 'border-emerald-400/50' : 'border-white/20'
        }`}></div>
        
        {/* Light reflection effect */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-br from-white/30 to-transparent rounded-t-full"></div>
        
        {/* Status indicator */}
        {/* <div className={`absolute top-2 right-2 w-3 h-3 rounded-full ${
          isActive ? 'bg-emerald-400' : 'bg-gray-400'
        }`}></div> */}
        
        {/* Bot icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            className={`w-6 h-6 transition-colors ${
              isActive ? 'text-emerald-400' : 'text-gray-300'
            }`}
          >
            <path 
              d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" 
              fill="currentColor" 
              fillOpacity="0.5"
            />
            <path 
              d="M6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 12.4059 17.9444 12.8022 17.8389 13.1831C17.5199 14.4813 15.2156 14.9039 13.5823 15.0297C12.5142 15.1105 12 16 12 16C12 16 11.4858 15.1105 10.4177 15.0297C8.78444 14.9039 6.48012 14.4813 6.16117 13.1831C6.05558 12.8022 6 12.4059 6 12Z" 
              stroke="currentColor" 
              strokeWidth="1.5"
            />
            <path 
              d="M12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19Z" 
              stroke="currentColor" 
              strokeWidth="1.5"
            />
            <path 
              d="M9 11C9.55228 11 10 10.5523 10 10C10 9.44772 9.55228 9 9 9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11Z" 
              fill="currentColor"
            />
            <path 
              d="M15 11C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9C14.4477 9 14 9.44772 14 10C14 10.5523 14.4477 11 15 11Z" 
              fill="currentColor"
            />
            <path 
              d="M22 12H19" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round"
            />
            <path 
              d="M5 12H2" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round"
            />
            <path 
              d="M12 5V2" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round"
            />
            <path 
              d="M12 22V19" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round"
            />
          </svg>
        </div>
        
      </button>
    </div>
  );
};

export default RobotButton;