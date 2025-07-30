// src/components/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    // Added scroll-mt-16 to ensure the section stops below the fixed navbar
    <section
      id="about"
      className="mt-20 py-16 px-4 md:px-8 lg:px-16 max-w-4xl mx-auto scroll-mt-16" // <-- Add this class
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Christian.</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">About Me</h2>
      <p className="text-base md:text-lg leading-relaxed">
        I'm a passionate and driven software developer with a knack for building intuitive and
        efficient web applications. My journey into programming started with a curiosity for
        how digital experiences are crafted, and it quickly grew into a full-fledged dedication.
        I specialize in front-end development, bringing designs to life with technologies like
        **React**, **TypeScript**, and **Tailwind CSS**. I'm always eager to learn new things and
        take on challenging projects that push my skills to the next level.
        Beyond coding, I enjoy problem-solving and continually refining my craft to create user-friendly
        and high-performance solutions.
      </p>
    </section>
  );
};

export default About;