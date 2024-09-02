
import './customCSS/App.css';
import './customCSS/input.css';
import './customCSS/style-switcher.css';
import "./customCSS/MobileDM/Breakpoint.css";
import "./customCSS/MobileDPort/Breakpoint.css";
import "./customCSS/SDesktopBase/Breakpoint.css";
import "./customCSS/TabletD/Breakpoint.css";
import "./customCSS/MobileDLand/Breakpoint.css";
import "./customCSS/SDesktopBase/Breakpoint.css";
import "./customCSS/LDesktopS/Breakpoint.css";

import "./customCSS/NoneRes/noneRes.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from './page/LandingPages.js';
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
