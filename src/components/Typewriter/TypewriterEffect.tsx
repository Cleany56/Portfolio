// src/components/TypewriterEffect.tsx
import React, { useState, useEffect } from 'react';

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
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseBeforeDelete = 1500,
  pauseAfterDelete = 700,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false); // State to manage pauses

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    let timeoutId: number; // <--- CHANGED THIS TYPE FROM NodeJS.Timeout TO number

    if (isDeleting) {
      // Deleting phase
      if (charIndex > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, deletingSpeed);
      } else {
        // Finished deleting, now pause before typing next phrase
        setIsDeleting(false);
        setIsPaused(true);
        timeoutId = setTimeout(() => {
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length); // Move to next phrase
          setIsPaused(false); // End pause
        }, pauseAfterDelete);
      }
    } else {
      // Typing phase
      if (charIndex < currentPhrase.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        // Finished typing, now pause before deleting
        setIsDeleting(true);
        setIsPaused(true);
        timeoutId = setTimeout(() => {
          setIsPaused(false); // End pause
        }, pauseBeforeDelete);
      }
    }

    // Cleanup function to clear the timeout if the component unmounts or dependencies change
    return () => clearTimeout(timeoutId);
  }, [
    displayText,
    charIndex,
    isDeleting,
    isPaused,
    currentPhraseIndex,
    phrases,
    typingSpeed,
    deletingSpeed,
    pauseBeforeDelete,
    pauseAfterDelete,
  ]);

  return (
    <p className="text-3xl md:text-4xl font-semibold mt-6 text-gray-800 dark:text-gray-200">
      {staticPrefix}{' '}
      <span className="font-bold">
        {displayText}
        {/* Blinking cursor: Using a simple div with CSS animation */}
        <span className="animate-blink-cursor inline-block w-1.5 h-8 md:h-9 bg-gray-700 dark:bg-gray-300 ml-1"></span>
      </span>
    </p>
  );
};

export default TypewriterEffect;