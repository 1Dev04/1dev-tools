
import './customCSS/App.css';
import './customCSS/input.css';
import './customCSS/style-switcher.css';

import './customCSS/style/breakPoint.css'
import './customCSS/NR/noneReis.css'



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
