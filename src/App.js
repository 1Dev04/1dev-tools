
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

import Landing from '../src/page/LandingPages.js';
import FontEnd from './page/FontEnd.js';
import BackEnd from './page/BackEnd.js';

function App() {
  return (
    <div className="h-1000">
    <Router>
      <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/Font-End-Dialy" element={<FontEnd />}></Route>
          <Route path="/Back-End-Dialy" element={<BackEnd />}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
