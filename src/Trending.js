import React from 'react';
import './Trending.css'; // Ensure you create this CSS file for styles

const Trending = () => {
  return (
    <div className="trending-container">
      <div className="search-bar">
        <input type="text" placeholder="Search..." className="search-input" />
        <button type = "submit">
            <div> <img
        src="https://raw.githubusercontent.com/horrible-hacker/Meme-ai/3488636c748727d9b5462f5b286f9056358a03e2/b.png"
        alt="Airplane flying in the sky"
        className="pl"
      /></div>
        
        </button>
      </div>
      <div className="trending-grid">
        <div className="destination-card">
          <img src="https://placehold.co/300x200?text=Alaska" alt="Alaska" className="destination-image" />
          <div className="destination-title">Alaska</div>
        </div>
        <div className="destination-card">
          <img src="https://placehold.co/300x200?text=Seattle" alt="Seattle" className="destination-image" />
          <div className="destination-title">Seattle</div>
        </div>
      </div>
      <button className="arrow-button">→</button>
    </div>
  );
};

export default Trending;