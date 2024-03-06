import React, { useState, useEffect } from 'react';
import '../customCSS/style-switcher.css';


const Theme = () => {
  const [isStyleSwitcherOpen, setIsStyleSwitcherOpen] = useState(false);
 
  
  useEffect(() => {
    
    const handleScroll = () => {
      if (isStyleSwitcherOpen) {
        setIsStyleSwitcherOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isStyleSwitcherOpen] );

  const toggleStyleSwitch = () => {
    setIsStyleSwitcherOpen((prev) => !prev);
  };

  const sunMoon = () => {
    const dayNight = document.querySelector(".day-night");
    dayNight.addEventListener("click", () => {
      const icon = dayNight.querySelector("i");
      icon.classList.toggle("bi-sun-fill");
      icon.classList.toggle("bi-moon-fill");
      document.body.classList.toggle("white");
    });

    window.addEventListener("load", () => {
      const icon = dayNight.querySelector("i");

      if (document.body.classList.contains("dark")) {
        icon.classList.remove("bi-sun-fill");
        icon.classList.add("bi-moon-fill");
      } else {
        icon.classList.remove("bi-moon-fill");
        icon.classList.add("bi-sun-fill");
      }
    });
  };
 
  const ThemeSky = () => {
    const ThemeS = document.querySelector(" .Sky");
    ThemeS.addEventListener("click", () =>{
      document.body.style.setProperty('--main-color', '#0ef');
      console.log("Theme - Sky");
    });
  };

  
  const ThemePink = () => {
    const ThemeP = document.querySelector(" .Pink");
    ThemeP.addEventListener("click", () =>{
      document.body.style.setProperty('--main-color' , '#ff1cc6');
      console.log("Theme - Pink");
    });
  };

  const ThemeGreen = () => {
    const ThemeG = document.querySelector(" .Green");
    ThemeG.addEventListener("click", () =>{
      document.body.style.setProperty('--main-color' , '#62ff32');
      console.log("Theme - Green");
    });
  };

  const ThemeViolet = () => {
    const ThemeV = document.querySelector(" .Violet");
    ThemeV.addEventListener("click", () =>{
      document.body.style.setProperty('--main-color' , '#8f0df3');
      console.log("Theme - Violet");
    });
  };

  const ThemeRed = () => {
    const ThemeR = document.querySelector(" .Red");
    ThemeR.addEventListener("click", () =>{
      document.body.style.setProperty('--main-color' , '#f9183a');
      console.log("Theme - Red");
    });
  };

  return (
    <div className={`style-switcher ${isStyleSwitcherOpen ? 'open' : ''}`}>
      <div className="style-switcher-toggler s-icon" onClick={toggleStyleSwitch}>
        <i className="fas fa-cog fa-spin"></i>
      </div>
      <div className="day-night s-icon" onClick={sunMoon}>
        <i className="bi bi-sun-fill"></i>
      </div>
      <h4>Theme Colors <span className="bi bi-palette"></span></h4>

      <div className="theme-options">
        <span className="color-1 Sky" onClick={ThemeSky}></span>
        <span className="color-2 Pink" onClick={ThemePink}></span>
        <span className="color-3 Green" onClick={ThemeGreen}></span>
        <span className="color-4 Violet" onClick={ThemeViolet}></span>
        <span className="color-5 Red" onClick={ThemeRed}></span>
      </div>
    </div>
  );
};

export default Theme;