// src/components/About.tsx
import React from 'react';
import { useContext } from 'react';
import { DarkModeContext } from '../../DarkModeContext';

// Define the structure for experience entries
interface Experience {
  id: number;
  jobTitle: string;
  company: string;
  location?: string;
  startDate: string; // Format as "Month Year"
  endDate: string | "Present"; // Format as "Month Year" or "Present"
  description: string[];  // Array of bullet points
  technologies?: string[]; // Optional technologies used
}

const About: React.FC = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  
  // Sample experiences - replace with your actual experiences
  const experiences: Experience[] = [
    {
      id: 1,
      jobTitle: "Software Engineering Intern",
      company: "The Home Depot",
      location: "Atlanta, GA",
      startDate: "May 2025",
      endDate: "July 2025",
      description: [
        "Successfully upgraded and enhanced a critical internal AngularJS application from version 1.4 to Angular 20, utilizing TypeScript, HTML, and CSS for UI improvements and Java Spring Boot with DB2 for backend data population. This application serves 250 associates and is projected to save the company up to $700,000 annually.",
        "Developed automation for managing Google Cloud Platform (GCP) service account permissions using Terraform, ensuring secure access and streamlining provisioning processes.",
        "Identified and documented GCP service accounts with excessive permissions, contributing to improved security posture and adherence to least privilege principles."
      ],
      technologies: ["Angular", "TypeScript", "Terraform", "Git", "Java", "Spring Boot", "DB2"]
    },
    // {
    //   id: 2,
    //   jobTitle: "Web Development Assistant",
    //   company: "University Tech Department",
    //   location: "Remote",
    //   startDate: "January 2022",
    //   endDate: "May 2023",
    //   description: [
    //     "Maintained and updated university department websites using HTML, CSS, and JavaScript",
    //     "Implemented responsive design principles to improve mobile user experience",
    //     "Created documentation for content management system for non-technical staff"
    //   ],
    //   technologies: ["HTML5", "CSS3", "JavaScript", "WordPress"]
    // }
    // Add more experiences as you progress in your career
  ];

  return (
    // Added scroll-mt-16 to ensure the section stops below the fixed navbar
    <section
      id="about"
      className="py-16 px-4 md:px-8 lg:px-16 max-w-4xl mx-auto scroll-mt-16"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Introduction</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">About Me</h2>
      <p className="text-base md:text-lg leading-relaxed">
        As an aspiring software developer, I'm consistently drawn to the challenge and creativity of coding projects. My work, including a recent internship at Home Depot where I contributed to a critical AngularJS to Angular 20 migration and automated GCP permissions with Terraform, has solidified my appreciation for building impactful solutions. I thrive on bringing ideas to life through code, continuously expanding my skills, and learning new technologies to solve real-world problems. My goal is to leverage my growing expertise to develop innovative software that makes a tangible difference.
      </p>

      {/* Experience Section */}
      <div className="mt-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Experience</h2>
        
        <div className="space-y-10">
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              className={`relative pl-8 border-l-2 ${
                isDarkMode ? 'border-gray-600' : 'border-gray-300'
              }`}
            >
              {/* Timeline dot */}
              <div 
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full ${
                  isDarkMode ? 'bg-blue-500' : 'bg-blue-600'
                }`}
              ></div>
              
              {/* Experience header */}
              <div className="mb-2">
                <h3 className="text-xl font-bold">{exp.jobTitle}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <span className="font-semibold">{exp.company}</span>
                    {exp.location && <span className="text-gray-500 dark:text-gray-400"> · {exp.location}</span>}
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {exp.startDate} — {exp.endDate}
                  </div>
                </div>
              </div>
              
              {/* Experience description */}
              <ul className="list-disc list-outside ml-4 space-y-2 mb-3">
                {exp.description.map((item, index) => (
                  <li key={index} className="text-base">{item}</li>
                ))}
              </ul>
              
              {/* Technologies used */}
              {exp.technologies && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className={`px-2 py-1 text-xs rounded-full ${
                        isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
