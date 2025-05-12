// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    // "./node_modules/daisyui/dist/**/*.js",
  ],
  daisyui: {
    themes: ['light', 'dark'],
  },
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1976d2',  
          light: '#2196f3',   
        },
        lightTheme: {
          bg: '#ffffff',     
          light: 'rgba(0, 0, 0, 0.05)', 
          text: '#000000', 
          header:"linear-gradient(to right, #ec4899, #3b82f6) !important",
          outline: 'dodgerblue',
          p: 'dodgerblue',
          s: 'rgba(0, 0, 0, 0.05)',
          t: '#ffffff',     
          o: '#000000',     
        },
        darkTheme: {
          bg: '#242526',     
          light: '#2B2D2E',
          header:"linear-gradient(to right, #ec4899, #3b82f6) !important",   
          text: '#ffffff',   
          outline: 'dodgerblue',
          p: 'dodgerblue',
          s: '#2B2D2E',
          t: '#000000',      
          o: '#ffffff',      
        },
      },
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        f0: '1rem',   
        f1: '0.9rem',
        f2: '0.8rem',
      },
      borderRadius: {
        md: '4px',   
        lg: '8px',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
