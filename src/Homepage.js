import React, { useState, useEffect } from 'react';
import './Homepage.css';

const Homepage = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['TRAVEL', 'EXPLORE', 'SHARE'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage">
      <img
        src="https://raw.githubusercontent.com/horrible-hacker/Meme-ai/0aec8d35bac761a2783c8283620abeb03965beb7/a.png"
        alt="Airplane fly in the sky"
        className="airplane-image"
      />
      <h1 className="changing-text">{words[currentWordIndex]}</h1>
      <button className="explore-button">
        EXPLORE <span ><img
        src="https://raw.githubusercontent.com/horrible-hacker/Meme-ai/3488636c748727d9b5462f5b286f9056358a03e2/b.png"
        alt="Airplane flying in the sky"
        className="plane-icon"
      /></span>
      </button>
    </div>
  );
};

export default Homepage;