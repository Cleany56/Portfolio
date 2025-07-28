import React from 'react';

const Hero = () => {
  return (
  <div className="flex flex-col mt-40">
      <h1 className="text-6xl font-bold mb-8 text-left ml-50">Hi, I am <br /> Christian.</h1>
      <div className="flex justify-center gap-4">
        <a href="resume.pdf" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Resume</a>
        <a href="https://www.linkedin.com/in/christianrharris" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-500 hover:text-blue-700 transition duration-300">
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
        </a>
        <a href="https://github.com/Cleany56" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-500 hover:text-gray-700 transition duration-300">
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
        </a>
        <a href="mailto:christianhpd.8@gmail.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-500 hover:text-gray-700 transition duration-300">
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
        </a>
      </div>
    </div>
  );
};

export default Hero;