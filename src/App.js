
import './customCSS/App.css';
import './customCSS/input.css';
import './customCSS/style-switcher.css';

import './customCSS/NR/noneReis.css';
import './customCSS/style/breakPoint.css';
import './customCSS/style/iphone_SE/theme.css';
import './customCSS/style/iphone_XR/theme.css';
import './customCSS/style/iphone14_pro_max/theme.css';
import './customCSS/style/iphone13_12_pro/theme.css';
import './customCSS/style/pixel_7/theme.css';
import './customCSS/style/Sum_Gal_S8_S20/theme.css';
import './customCSS/style/ipad_mini/theme.css';
import './customCSS/style/ipad_air/theme.css';
import './customCSS/style/ipad_pro/theme.css';
import './customCSS/style/surface_pro_7/theme.css';
import './customCSS/style/surface_duo/theme.css';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from './page/HomePage';

function App() {
  return (
    <>
    <Router>
      <Routes>
          <Route path="/" element={<Landing />} ></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
