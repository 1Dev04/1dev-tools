import React , {useEffect, useState} from 'react';

import '../customCSS/View.css';
import '../customCSS/style-switcher.css';


function View() {

  const [visitCount, setVisitCount] = useState(0)

 useEffect (()=>{
  const currentCount = localStorage.getItem("visitCount")
  if (currentCount) {
    const newCount = parseInt(currentCount) + 1;
    setVisitCount(newCount)
    localStorage.setItem("visitCount", newCount)
  }
  else {
    setVisitCount(1)
    localStorage.setItem("visitCount", 1)
  }
  },[])

  return (
    <div className="body-view">
      <h4 className="name"><i className="bx bx-refresh color-icon"></i> <strong>{visitCount}</strong></h4>
    </div>
  );
}

export default View;