
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
import './customCSS/style/galaxy_z_f_5/theme.css';
import './customCSS/style/azuz_zenbook_fold/theme.css';
import './customCSS/style/sum_galaxy_a51_71/theme.css';
import './customCSS/style/nest_hub/theme.css';
import './customCSS/style/blackberry_Z30/theme.css';
import './customCSS/style/blackberry_playbook/theme.css';
import './customCSS/style/galaxy_s9/theme.css';
import './customCSS/style/galaxy_tap_S4/theme.css';
import './customCSS/style/kindle_fire_hdx/theme.css';
import './customCSS/style/lg_optimust_l70/theme.css';
import './customCSS/style/mincrosoft_lumia_550/theme.css';
import './customCSS/style/moto_g_power/theme.css';
import './customCSS/style/nexus_5x/theme.css';
import './customCSS/style/nexux_7/theme.css';
import './customCSS/style/nokia_lumua_520/theme.css';
import './customCSS/style/nokia_n9/theme.css';
import './customCSS/style/pixel_3/theme.css';
import './customCSS/style/pixel_4/theme.css';
import './customCSS/style/jiophone_2/theme.css';
import './customCSS/style/pixel_2/theme.css';
import './customCSS/style/pixel_2_xl/theme.css';
import './customCSS/style/iphone_4/theme.css';
import './customCSS/style/iphone_5_se/theme.css';
import './customCSS/style/iphone_678_plus/theme.css';
import './customCSS/style/iphone_x/theme.css';
import './customCSS/style/facebook_android/theme.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from './page/HomePage';
import FilterPage from './page/filterPage';

function App() {
  return (
    <>
    <Router>
      <Routes>
          <Route path="/" element={<Landing />} ></Route>
          <Route path="/filter" element={<FilterPage />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
