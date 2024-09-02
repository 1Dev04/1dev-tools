
import './customCSS/App.css';
import './customCSS/input.css';
import './customCSS/style-switcher.css';
import "./customCSS/MobileDM/breakPoint.css";
import "./customCSS/MobileDPort/breakPoint.css";
import "./customCSS/SDesktopBase/breakPoint.css";
import "./customCSS/TabletD/breakPoint.css";
import "./customCSS/MobileDLand/breakPoint.css";
import "./customCSS/SDesktopBase/breakPoint.css";
import "./customCSS/LDesktopS/breakPoint.css";

import "./customCSS/NoneRes/noneRes.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from './page/landingPages.js';
import FontEnd from './page/fontEnd.js';
import BackEnd from './page/backEnd.js';
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
