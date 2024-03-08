import React, { useState, useEffect, useRef } from 'react';

const View = () => {
  const [pageviewsCount, setPageviewsCount] = useState(0);
  const pageviewsRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const pageviews = await fetchPageviews();
      setPageviewsCount(pageviews);
    };

    fetchData();
  }, []);

  const fetchPageviews = async () => {
    // Simulate fetching pageviews from an API
    try {
      // Make a request to the specified URL
      const response = await fetch('https://my-portfolio-b65s0018.netlify.app/');
      
      // If the request is successful, increment the pageviews count
      if (response.ok) {
        // Simulate extracting pageviews from the response (replace with actual logic)
        const data = await response.json();
        const newPageviews = data.pageviews + 1; // Increment pageviews count
        return newPageviews;
      } else {
        // Handle unsuccessful response
        console.error('Error fetching pageviews:', response.statusText);
        return 0;
      }
    } catch (error) {
      console.error('Error fetching pageviews:', error.message);
      return 0;
    }
  };

  return (
    <div className="view">
      <div className="Page-view">
        <span id="pageviews-count" ref={pageviewsRef}>
          {pageviewsCount}
        </span>
        <h5 className="bi bi-emoji-heart-eyes-fill"> PageViews</h5>
      </div>

      <div className="Visit-view">
        <span id="visits-count"></span>
        <h5 className="bi bi-eye-fill"> Visits</h5>
      </div>
    </div>
  );
};

export default View;