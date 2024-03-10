import React, { useState, useEffect } from 'react';
import '../customCSS/App.css';

const View = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const savedLikeCount = localStorage.getItem('likeCount');
    const savedIsLiked = localStorage.getItem('isLiked');

    if (savedLikeCount) {
      setLikeCount(parseInt(savedLikeCount, 10));
    }

    if (savedIsLiked) {
      setIsLiked(savedIsLiked === 'true');
    }
  }, []);

  const handleLikeClick = () => {
    const newIsLiked = !isLiked;
    setIsLiked(newIsLiked);

    const newLikeCount = newIsLiked ? likeCount + 1 : likeCount - 1;
    setLikeCount(newLikeCount);

    // Save to local storage
    localStorage.setItem('likeCount', newLikeCount.toString());
    localStorage.setItem('isLiked', newIsLiked.toString());

    // TODO: Save to backend server (if implemented)
  };

  return (
    <div className="view">
      <div className="Page-view">
        <span id="page-count"></span>
        <h5 className="bi bi-emoji-heart-eyes-fill"> PageViews</h5>
      </div>
      <div className="Visit-view">
        <span id="view-count"></span>
        <h5 className="bi bi-eye-fill"> Visits</h5>
      </div>
      <div className="Like-view">
        <button  className={`bi bi-heart${isLiked ? '-fill' : ''}`} style={{ color : "rgb(239 68 68)"}} onClick={handleLikeClick} ></button>
        <span> {likeCount}</span>
      </div>
    </div>
  );
};

export default View;