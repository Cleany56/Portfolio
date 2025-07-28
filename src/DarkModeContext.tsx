import { createContext, useState, useContext} from 'react';
import type { ReactNode } from 'react';


interface DarkModeContextValue {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextValue>({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    console.log('toggleDarkMode called');
    setIsDarkMode(!isDarkMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeProvider, DarkModeContext };