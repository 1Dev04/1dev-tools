import React from "react";
import "../customCSS/input.css";
import "../customCSS/App.css";
import "../customCSS/new.css"

const Navbar = () => {
  return (
    <nav className="fixed-top">
      <header className="header">
        

        <div className="logo bx "> PORTFOLIO</div>
        <i className="bx bx-menu" id="menu-icon"></i>

        <nav className="navbar">
          <a href="#home" className="active">
            Home
          </a>
          <hr></hr>
          <a href="#about">About</a>
          <hr></hr>
          <a href="#services">Certificate</a>
          <hr></hr>
          <a href="#skills">Skills</a>
          <hr></hr>
          <a href="#projects">Projects</a>
          <hr></hr>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    </nav>
  );
};

export default Navbar;
