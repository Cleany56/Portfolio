import './App.css'
import Navbar from './components/Navbar/Navbar';
import { DarkModeContext } from './DarkModeContext';
import { useContext, useEffect } from 'react';
import './index.css';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
function App() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
    console.log('isDarkMode changed:', isDarkMode);
  }, [isDarkMode]);
  return (
   <div className={`app ${isDarkMode ? 'dark' : ''}`}>
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
   </div>
  )
}

export default App
