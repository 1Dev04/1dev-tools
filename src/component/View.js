import React, { useState, useEffect } from 'react';
import '../customCSS/App.css';

const View = () => {
  const [pageViews, setPageViews] = useState(0);
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const type = sessionStorage.getItem('visit') === null ? 'type=visit-pageview' : 'type=pageview';

      try {
        const response = await fetch(`http://172.20.10.4:3000?${type}`);
        const data = await response.json();

        setPageViews(data.pageviews);
        setVisitCount(data.visits);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <div className="view">
      <div className="Page-view">
        <span id="page-count">{pageViews}</span>
        <h5 className="bi bi-emoji-heart-eyes-fill"> PageViews</h5>
      </div>
      <div className="Visit-view">
        <span id="view-count">{visitCount}</span>
        <h5 className="bi bi-eye-fill"> Visits</h5>
      </div>
    </div>
  );
};

export default View;