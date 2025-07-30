// src/components/Hero.tsx
import React from 'react';
import TypewriterEffect from '../Typewriter/TypewriterEffect'; // Import the new component

const Hero: React.FC = () => {
  // Define the phrases for the typewriter effect
  const phrases = ["a Web Developer", "a Problem Solver", "a Tech Enthusiast"]; // <--- CUSTOMIZE THESE PHRASES!

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 py-8 md:py-0">

        {/* Left side: Text, Buttons, and now Typewriter Effect */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-6xl md:text-7xl font-bold mb-8">
            Hi, I am <br /> Christian.
          </h1>

          {/* Added mb-6 for spacing between buttons and the new text */}
          <div className="flex items-center justify-center md:justify-start gap-6 md:gap-8 mb-6">
            {/* Resume Button */}
            <a
              href="resume.pdf"
              download
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
            >
              Resume
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/christianrharris"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-gray-700 hover:text-blue-600 transition duration-300 transform hover:scale-110"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* GitHub Icon */}
            <a
              href="https://github.com/Cleany56"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-gray-700 hover:text-purple-600 transition duration-300 transform hover:scale-110"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.418 2.865 8.18 6.839 9.504.47.087.642-.204.642-.454 0-.223-.009-.815-.015-1.494-2.782.602-3.369-1.341-3.369-1.341-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.006.07 1.532 1.034 1.532 1.034.893 1.536 2.345 1.09 2.91.835.09-.648.351-1.09.636-1.34-2.22-.253-4.555-1.112-4.555-4.945 0-1.09.39-1.984 1.029-2.682-.104-.253-.447-1.272.098-2.65 0 0 .84-.268 2.75 1.025.798-.223 1.654-.335 2.504-.339.85.004 1.706.116 2.504.339 1.91-1.293 2.747-1.025 2.747-1.025.546 1.378.202 2.397.099 2.65.64.698 1.029 1.592 1.029 2.682 0 3.841-2.339 4.686-4.566 4.935.359.308.678.916.678 1.846 0 1.334-.012 2.417-.012 2.747 0 .252.17.545.647.453C21.137 20.198 24 16.43 24 12.017 24 6.484 19.522 2 14 2h-2z" clipRule="evenodd"/>
              </svg>
            </a>

            {/* Email Icon */}
            <a
              href="mailto:christianhpd.8@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email Address"
              className="text-gray-700 hover:text-red-500 transition duration-300 transform hover:scale-110"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.721v14.434h24v-14.434l-12 9.721z"/>
              </svg>
            </a>
          </div>

          {/* NEW: Typewriter Effect Component */}
          <TypewriterEffect
            staticPrefix="I am" // "I am a" can be here, then phrases start with "Web Developer" etc.
            phrases={phrases}
            // You can optionally pass custom speeds/pauses:
            // typingSpeed={120}
            // deletingSpeed={60}
            // pauseBeforeDelete={2000}
            // pauseAfterDelete={1000}
          />
        </div>

        {/* Right side: Image */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src="src\assets\heropic.png"
            alt="Christian Harris"
            className="w-2/3 md:w-full max-w-sm md:max-w-lg rounded-full shadow-lg object-cover aspect-square"
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;