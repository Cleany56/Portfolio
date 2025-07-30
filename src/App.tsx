// App.js
import './App.css'
import Navbar from './components/Navbar/Navbar';
import { DarkModeContext } from './DarkModeContext';
import { useContext, useEffect } from 'react';
import './index.css'; // Assuming this imports your Tailwind base styles
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';

function App() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
    console.log('isDarkMode changed:', isDarkMode);
  }, [isDarkMode]);

  return (
    // Make the overall app container a flex column that fills the screen
    <div className={`app flex flex-col min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Navbar />
      {/* main takes the remaining flexible space and distributes its children */}
    <main className="flex flex-col">
        <Hero />
        <About />
        <Skills />
      </main>
    </div>
  )
}

export default App