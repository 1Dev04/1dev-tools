import React, { useEffect } from 'react';
import "../customCSS/input.css";
import "../customCSS/App.css";
import "../customCSS/navbar.css";


const Navbar = () => {

  useEffect(() => {
    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");

    const handleMenuClick = () => {
      menuIcon.classList.toggle("bx-x");
      navbar.classList.toggle("active");
    };

    const handleScroll = () => {
      sections.forEach (sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            });
        };
        navbar.classList.remove("active");
    });

    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);
    menuIcon.classList.remove("bx-x");
   
    navbar.classList.remove("active");
    
    };

    menuIcon.addEventListener("click", handleMenuClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      
      menuIcon.removeEventListener("click", handleMenuClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  return (
    <nav className="fixed-top">
      <header className="header">
        <div className="logo">

          PORTFOLIO
          
        </div>
        
        <i className="bx bx-menu" id="menu-icon"></i>
       
        <nav className="navbar">
          <a href="#home" className="active scoll-S1">
            Home
          </a>
          
          <a href="#about" className="scoll-S2">About</a>
          
          <a href="#certificate" className="scoll-S3">Certificate</a>
          
          <a href="#skills" className="scoll-S4">Skills</a>
          
          <a href="#projects" className="scoll-S5">Projects</a>
          
          {/* <a href="#contact" className="scoll-S6">Contact</a>  */}
          
          
          
        </nav>
      </header>
      
    </nav>
  );
  
};

export default Navbar;
