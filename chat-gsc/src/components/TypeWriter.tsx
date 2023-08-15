import React, { useState, useEffect } from 'react'; 

const Typewriter= ({ text, startDelay = 1000, typeDelay }: { text: string; startDelay?: number; typeDelay: number; }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [shouldStartTyping, setShouldStartTyping] = useState(false);
  
    useEffect(() => {
      // This useEffect is for the initial delay only
      const startTimeout = setTimeout(() => {
        setShouldStartTyping(true);
      }, startDelay);
  
      return () => clearTimeout(startTimeout);
    }, [startDelay]);
  
    useEffect(() => {
      // This useEffect handles the typing effect
      if (shouldStartTyping && currentIndex < text.length) {
        const typeTimeout = setTimeout(() => {
          setCurrentText(prevText => prevText + text[currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        }, typeDelay);
    
        return () => clearTimeout(typeTimeout);
      }
    }, [shouldStartTyping, currentIndex, typeDelay, text]);
  
    return <span>{currentText}</span>;
  };

export default Typewriter;