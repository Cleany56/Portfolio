import React, { useState, useEffect, useContext } from 'react';
import { DarkModeContext } from '../../DarkModeContext'; // Adjust path if needed

interface TypewriterEffectProps {
  phrases: string[]; // Array of ending phrases to cycle through
  staticPrefix: string; // The static text before the dynamic part (e.g., "I am a")
  typingSpeed?: number; // Speed in ms per character when typing
  deletingSpeed?: number; // Speed in ms per character when deleting
  pauseBeforeDelete?: number; // Pause in ms after typing a phrase
  pauseAfterDelete?: number; // Pause in ms after deleting a phrase
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  phrases,
  staticPrefix,
  typingSpeed = 200,
  deletingSpeed = 100,
  pauseBeforeDelete = 2000,
  pauseAfterDelete = 700,
}) => {
  const { isDarkMode } = useContext(DarkModeContext);
  const [displayText, setDisplayText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Ensure phrases array is not empty
    if (!phrases || phrases.length === 0) {
      return;
    }

    const currentPhrase = phrases[currentPhraseIndex];
    let timeoutId: number;

    // --- TYPING LOGIC ---
    if (!isDeleting) {
      // If we are still typing characters of the current phrase
      if (charIndex < currentPhrase.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex(prevCharIndex => prevCharIndex + 1); // Use functional update
        }, typingSpeed);
      } else {
        // We have finished typing the current phrase
        // Now, pause for a moment before starting to delete
        timeoutId = setTimeout(() => {
          setIsDeleting(true); // Switch to deleting mode
        }, pauseBeforeDelete);
      }
    }
    // --- DELETING LOGIC ---
    else {
      // If we are still deleting characters
      if (charIndex > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex(prevCharIndex => prevCharIndex - 1); // Use functional update
        }, deletingSpeed);
      } else {
        // We have finished deleting the current phrase
        // Now, pause for a moment before typing the next phrase
        timeoutId = setTimeout(() => {
          setIsDeleting(false); // Switch back to typing mode
          // Move to the next phrase. Use modulo to loop back to the start.
          setCurrentPhraseIndex(prevIndex => (prevIndex + 1) % phrases.length);
          setCharIndex(0); // Reset charIndex for the new phrase
        }, pauseAfterDelete);
      }
    }

    // Cleanup function: Clear the timeout when the component unmounts
    // or before the effect re-runs due to dependency changes.
    return () => clearTimeout(timeoutId);

  }, [
    charIndex,        // Trigger when character index changes (typing/deleting)
    isDeleting,       // Trigger when switching between typing and deleting
    currentPhraseIndex, // Trigger when moving to a new phrase
    phrases,          // If the phrases array itself changes
    typingSpeed,
    deletingSpeed,
    pauseBeforeDelete,
    pauseAfterDelete,
  ]);

  return (
    <p className="text-3xl md:text-4xl font-semibold mt-6 ">
      {staticPrefix}{' '}
      <span className="font-bold">
        {displayText}
        {/* Blinking cursor: Using a simple div with CSS animation */}
        <span
          className={`animate-blink-cursor inline-block w-1.5 h-8 md:h-9 ml-1 ${
            isDarkMode ? 'bg-gray-300' : 'bg-black'
          }`}
        ></span>
      </span>
    </p>
  );
};

export default TypewriterEffect;