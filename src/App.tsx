import './App.css'
import Navbar from './components/Navbar/Navbar';
import { DarkModeContext } from './DarkModeContext';
import { useContext, useEffect } from 'react';
import './index.css';
import Hero from './components/Hero/Hero';
function App() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
    console.log('isDarkMode changed:', isDarkMode);
  }, [isDarkMode]);
  return (
   <div className={`app ${isDarkMode ? 'dark' : ''}`}>
    <Navbar />
    <Hero />
   </div>
  )
}

export default App
