import React from 'react';
import { useContext } from 'react';
import { DarkModeContext } from '../../DarkModeContext';

// Define the structure for a project
interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  mediaType: 'video' | 'embed' | 'image';
  mediaSrc: string;
  repoLink?: string;
  liveLink?: string;
}

const Projects: React.FC = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  
  // Sample project data
  const projects: Project[] = [
    {
      id: 1,
      title: "This Portfolio Website",
      description: "A responsive portfolio website built with React and TailwindCSS showcasing my projects and skills.",
      techStack: ["React", "TypeScript", "TailwindCSS", "Vite"],
      mediaType: "image",
      mediaSrc: "/assets/projects/project-placeholder.svg", // Replace with actual path
    //   repoLink: "https://github.com/yourusername/portfolio",
    //   liveLink: "https://yourportfolio.com"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A full-stack task management application with user authentication and real-time updates.",
      techStack: ["Angular", "Node.js", "MongoDB", "Express"],
      mediaType: "video",
      mediaSrc: "https://www.youtube.com/embed/your-video-id", // Replace with actual YouTube embed URL
      repoLink: "https://github.com/yourusername/task-manager",
      liveLink: "https://yourtaskapp.com"
    },
    // Add more projects as needed
  ];

  // Function to render the media section based on the type
  const renderMedia = (project: Project) => {
    switch (project.mediaType) {
      case 'video':
        return (
          <div className="aspect-w-16 aspect-h-9 w-full">
            <iframe 
              src={project.mediaSrc} 
              title={project.title}
              className="w-full h-full rounded-lg"
              allowFullScreen
            ></iframe>
          </div>
        );
      case 'embed':
        return (
          <div className="w-full h-80 rounded-lg overflow-hidden">
            <iframe 
              src={project.mediaSrc} 
              title={project.title}
              className="w-full h-full"
            ></iframe>
          </div>
        );
      case 'image':
      default:
        return (
          <img 
            src={project.mediaSrc} 
            alt={project.title} 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        );
    }
  };

  // Function to render tech stack
  const renderTechStack = (techs: string[]) => {
    return (
      <div className="flex flex-wrap gap-2 mt-3">
        {techs.map((tech, index) => (
          <span 
            key={index} 
            className={`px-3 py-1 text-sm rounded-full ${
              isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-800'
            }`}
          >
            {tech}
          </span>
        ))}
      </div>
    );
  };

  return (
    <section 
      id="projects" 
      className="py-16 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto scroll-mt-16"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-10">What I've Built</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className={`rounded-xl p-6 transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-800 shadow-gray-900/30' 
                : 'bg-white shadow-lg hover:shadow-xl'
            }`}
          >
            <div className="mb-6">
              {renderMedia(project)}
            </div>
            
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="mb-4 ">{project.description}</p>
            
            {renderTechStack(project.techStack)}
            
            <div className="flex gap-4 mt-6">
              {project.repoLink && (
                <a 
                  href={project.repoLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`px-4 py-2 rounded-md transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                  }`}
                >
                  GitHub Repo
                </a>
              )}
              {project.liveLink && (
                <a 
                  href={project.liveLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`px-4 py-2 rounded-md transition-colors ${
                    isDarkMode 
                      ? 'bg-blue-600 hover:bg-blue-500 text-white' 
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
