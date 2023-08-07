import React, { useState, useEffect } from 'react';

const RotatingPhrases = () => {
  const sentences = [
    "Play the moments,",
    "Pause the memories",
    "Stop the pain",
    "Rewind the happiness",
    "With AYOFY",
  ];

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  useEffect(() => {
    // This function updates the currentSentenceIndex every 4 seconds
    const interval = setInterval(() => {
      setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h3>{sentences[currentSentenceIndex]}</h3>
    </div>
  );
};

export default RotatingPhrases;
