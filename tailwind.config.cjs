// tailwind.config.js
/** @type {import('tailwindcss').Config} */ // This JSDoc is good practice for IDE hints
module.exports = {
  // 1. 'content' replaces 'purge' in Tailwind CSS v3+. 'jit' mode is default.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensures Tailwind scans all your React components
  ],
  
  // 2. 'darkMode' should be a top-level property, peer to 'content' and 'theme'.
  darkMode: 'class', // This tells Tailwind to use the 'dark' class for dark mode

  theme: {
    extend: {
      // 3. Your custom keyframes for the blinking cursor
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' }, // Cursor visible
          '50%': { opacity: '0' },      // Cursor invisible
        }
      },
      // 4. Your custom animation utility class
      animation: {
        'blink-cursor': 'blink 0.7s infinite', // Uses the 'blink' keyframes, 0.7s duration, infinite loop
      }
    },
  },
  
  // 'variants' is typically not needed as a top-level property in v3+,
  // as responsive and dark mode variants are enabled by default.
  
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}