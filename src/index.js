import React from 'react';
import ReactDOM from 'react-dom/client';
import './customCSS/index.css';
import App from './App';
import reportWebVitals from '../src/reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
