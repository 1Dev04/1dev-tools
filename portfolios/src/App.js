
import './customCSS/App.css';
import './customCSS/input.css';
import './customCSS/style-switcher.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from './page/LandingPages.js';
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
