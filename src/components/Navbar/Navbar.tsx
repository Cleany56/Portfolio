import React, { useContext, useState } from 'react';
import { DarkModeContext } from '../../DarkModeContext';
import './navbar.css';

const Navbar: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScrollTo = (sectionId: string, event?: React.MouseEvent): void => {
    event?.preventDefault(); // Prevent default browser navigation
    console.log(`Scrolling to: ${sectionId}`);
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false); // Close the mobile menu after clicking a link
  };

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
     <nav className={`h-16 fixed top-0 w-full z-50 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="flex items-center h-full px-4 relative"> {/* Main navbar content container */}

        {/* Left-aligned items container */}
        <div className="flex items-center">
          <a href="Home" onClick={(e) => handleScrollTo('top', e)} className=" text-lg font-medium">Christian Harris</a>
        </div>

        {/* Absolutely Centered Toggle */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
          <input
            type="checkbox"
            id="switch-component"
            className="sr-only peer"
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />
          <label
            htmlFor="switch-component"
            className={`relative w-12 h-6 rounded-full border border-gray-400 shadow-sm transition-transform duration-300 cursor-pointer ${isDarkMode ? 'bg-gray-800' : 'bg-yellow-400'}`}
          >
            <div className="absolute top-1/2 left-1 transform -translate-y-1/2 w-4 h-4 flex justify-center items-center transition-transform duration-300" style={{ transform: isDarkMode ? 'translateX(20px)' : 'translateX(0px)' }}>
              {isDarkMode ? '🌕' : '☀️'}
            </div>
          </label>
        </div>

        {/* Right-aligned content: Desktop links OR Hamburger icon */}
        <div className="flex items-center ml-auto relative">
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-4">
                <a href="/about" onClick={(e) => handleScrollTo('about', e)} className="font-medium">About</a>
                <a href="/skills" onClick={(e) => handleScrollTo('skills', e)} className="font-medium">Skills</a>
                <a href="/projects" onClick={(e) => handleScrollTo('projects', e)} className="font-medium">Projects</a>
            </div>

            {/* Hamburger Icon Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full right-0 mt-2 py-2 w-48 bg-gray-800 rounded-md shadow-lg z-40">
                    <a href="about" onClick={(e) => handleScrollTo('about', e)} className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-blue-400">About</a>
                    <a href="skills" onClick={(e) => handleScrollTo('skills', e)} className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-blue-400">Skills</a>
                    <a href="projects" onClick={(e) => handleScrollTo('projects', e)} className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-blue-400">Projects</a>
                </div>
            )}
        </div> {/* End of right-aligned flex container */}
      </div> {/* End of main navbar content container */}
    </nav>
  );
};

export default Navbar;