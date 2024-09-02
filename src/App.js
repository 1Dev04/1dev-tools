
import './customCSS/App.css';
import './customCSS/input.css';
import './customCSS/style-switcher.css';

import './customCSS/LDS/breakPoint.css'
import './customCSS/MDL/breakPoint.css'
import './customCSS/MDM/breakPoint.css'
import './customCSS/MDP/breakPoint.css'
import './customCSS/NR/noneReis.css'
import './customCSS/SDB/breakPoint.css'
import './customCSS/TD/breakPoint.css'


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from './page/LandingPages.js';
import FontEnd from './page/FontEnd.js';
import BackEnd from './page/BackEnd.js';
import OtherC from './page/otherC.js';


function App() {
  return (
    <div className="h-1000">
    <Router>
      <Routes>
          <Route path="/" element={<Landing />} ></Route>
          <Route path="/Font-End-Daily" element={<FontEnd />}></Route>
          <Route path="/Back-End-Daily" element={<BackEnd />}></Route>
          <Route path="/Other-Daily" element={<OtherC />}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
