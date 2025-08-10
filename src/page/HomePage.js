import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "animate.css";

import Typed from "typed.js";

import Footer from "../component/Footer.js";

import Theme from "../component/Theme.js";
import PageView from "../component/PageView.js";

const HomePage = () => {
  useEffect(() => {
    const typed = new Typed(".multiple-text", {
      strings: [
        "รวมเครื่องมือสำหรับ Developer ไว้ที่นี่",
        "ใช้ฟรี 100% ไม่มีล็อก",
        "ฟีเจอร์พร้อมใช้ ไม่ต้องเสียเวลาหา",
        "ทุกอย่างจัดเรียงให้แล้ว ค้นหาง่าย",
        "รวมฟีเจอร์ที่นักพัฒนาอยากได้ ไว้ในเว็บเดียว",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="dark">
      {/* Hamster loader */}
      <div
        aria-label="Orange and tan hamster running in a metal wheel"
        role="img"
        className="wheel-and-hamster"
      >
        <div className="wheel"></div>
        <div className="hamster">
          <div className="hamster__body">
            <div className="hamster__head">
              <div className="hamster__ear"></div>
              <div className="hamster__eye"></div>
              <div className="hamster__nose"></div>
            </div>
            <div className="hamster__limb hamster__limb--fr"></div>
            <div className="hamster__limb hamster__limb--fl"></div>
            <div className="hamster__limb hamster__limb--br"></div>
            <div className="hamster__limb hamster__limb--bl"></div>
            <div className="hamster__tail"></div>
          </div>
        </div>
        <div className="spoke"></div>
      </div>

      <section className="home" id="home">
        <h1>
          Welcome to{" "}
          <span className="animate__animated animate__zoomInRight">
            1DevTools
          </span>
        </h1>

        <h2>
          <span className="multiple-text"></span>
        </h2>

      <form>
  <div className="form">
    <input
      className="board-body"
      id="name"
      name="name"
      type="text"
      placeholder="Search..."
      style={{ paddingLeft: '40px', fontSize: '16px' }} // เว้นที่ให้ไอคอน
    />
    <span
      style={{
        position: 'absolute',
        left: '8px',
        top: '50%',
        transform: 'translateY(-50%)',
        pointerEvents: 'none',
        color: '#aaa',
        fontSize: '16px',
      }}
    >
      <i class='bx bx-search-alt-2' style={{ paddingLeft: '5px' , scale: '1.3'}}></i>
    </span>
      <button
    type="submit"
    style={{
      marginLeft: '10px',
      padding: '3px 15px',
      border: 'none',
      borderRadius: '4px',
      backgroundColor: '#007bff',
      color: 'white',
      cursor: 'pointer',
      fontSize: '16px',
    }}
  >
    Submit
  </button>
  </div>


</form>

      </section>
      <PageView />
      <Theme />

      <Footer />
    </div>
  );
};

export default HomePage;
