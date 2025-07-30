// Skills.tsx

import React from 'react';

// Define an interface for a single skill
interface Skill {
  name: string;
  iconPath?: string; // The icon property is now a string for the SVG path
}

// Define the skills data
const technicalLanguages: Skill[] = [
  { name: 'Python', iconPath: '/assets/icons/python.svg' },
  { name: 'HTML5', iconPath: '/assets/icons/html5.svg' },
  { name: 'CSS3', iconPath: '/assets/icons/css3.svg' },
  { name: 'JavaScript', iconPath: '/assets/icons/javascript.svg' },
  { name: 'TypeScript', iconPath: '/assets/icons/typescript.svg' },
  { name: 'SQL', iconPath: '/assets/icons/sql.svg' },
];

const technologiesAndFrameworks: Skill[] = [
  { name: 'React', iconPath: '/assets/icons/react.svg' },
  { name: 'Node.js', iconPath: '/assets/icons/nodejs.svg' },
  { name: 'Next.js', iconPath: '/assets/icons/nextjs.svg' },
  { name: 'Git', iconPath: '/assets/icons/git.svg' },
  { name: 'Docker', iconPath: '/assets/icons/docker.svg' },
  { name: 'Tailwind CSS', iconPath: '/assets/icons/tailwindcss.svg' }, 
  { name: 'Angular', iconPath: '/assets/icons/angular.svg' }, 
];

// Reusable SkillItem component
const SkillItem: React.FC<Skill> = ({ name, iconPath }) => {
  return (
    // The circle itself is now the main container for the skill item
    <div
      className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center
                 shadow-lg hover:shadow-xl transition-shadow duration-300
                 text-xl font-bold text-center relative overflow-hidden group"
      title={name} // Add title for hover tooltip
    >
      {/* This div represents the content inside the circle */}
      <div className="absolute inset-0 flex items-center justify-center text-white p-4">
        {iconPath ? (
          <img src={iconPath} alt={`${name} icon`} className="w-full h-full object-contain" />
        ) : (
          name.charAt(0)
        )}
      </div>

      {/* Optional: Overlay for full name on hover if desired */}
      <div
        className="absolute inset-0 bg-gray-900 bg-opacity-80 rounded-full
                   flex items-center justify-center text-white text-sm font-semibold
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      >
        {name}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section className="container mx-auto px-4 pb-16 pt-32 md:pt-48 lg:pt-64" id="skills">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-400">
        Tech Stack.
      </h2>

      {/* Technical Languages Section */}
      <div className="mb-16">
        <h3 className="text-2xl md:text-3xl font-semibold mb-8 border-b-2 pb-2 ">
          TECHNICAL LANGUAGES
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
          {technicalLanguages.map((skill) => (
            <SkillItem key={skill.name} name={skill.name} iconPath={skill.iconPath} />
          ))}
        </div>
      </div>

      {/* Technologies and Frameworks Section */}
      <div>
        <h3 className="text-2xl md:text-3xl font-semibold mb-8 border-b-2 pb-2 ">
          TECHNOLOGIES AND FRAMEWORKS
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
          {technologiesAndFrameworks.map((skill) => (
            <SkillItem key={skill.name} name={skill.name} iconPath={skill.iconPath} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;