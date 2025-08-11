import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "animate.css";

import Typed from "typed.js";

import Footer from "../component/Footer.js";

import Theme from "../component/Theme.js";
import PageView from "../component/PageView.js";

import UIVerse from "../asset/card-img/logo-UI.png";
import animationCSS from "../asset/card-img/logo-animationCSS.png";
import boxicons from "../asset/card-img/logo-boxicon.png";

const HomePage = () => {
  useEffect(() => {
    const typed = new Typed(".multiple-text", {
      strings: [
        "รวมเครื่องมือสำหรับ Developer ไว้ที่นี่",
        "ใช้ฟรี 100% ไม่มีล็อกอิน",
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
        <div className="search">
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
              />
              <span>
                <i className="bx bx-search-alt-2"></i>
              </span>
              <button type="submit">Submit</button>
            </div>
          </form>

          {/* row 1 */}

          <div className="board-app">
           
              
              <div className="y-board">
                <div className="card">
                  <img className="logo max-w-[85px]" src={UIVerse} alt="UIVerse" />
                  <div className="card__content">
                    <p className="card__title">UI Verse</p>
                    <p className="card__description">
                       แหล่งรวม UI ฟรี ใช้งานง่าย สำหรับเว็บและแอป
                    </p>
                    <p className="card__description">
                      Install: Not Available<i className='bx bx-x' ></i>
                    </p>
                    
                    <p className="card__description">
                      Link:{" "}
                      <a href="https://uiverse.io/" className="link_des">
                        uiverse.io
                      </a>
                    </p>
                  </div>
                </div>


                <div className="card">
                  <img className="logo max-w-[85px]" src={animationCSS} alt="animationCSS" />
                  <div className="card__content">
                    <p className="card__title">Animate.css</p>
                    <p className="card__description">
                      ไลบรารี CSS แอนิเมชันสำเร็จรูป ไม่ต้องเขียนโค้ดเอง
                    </p>
                    <p className="card__description">
                      Install:{" "}
                      <a href="https://animate.style/#documentation" className="link_des">
                          Get Started<i className='bx bx-check' ></i>
                      </a>
                    </p>
                    <p className="card__description">
                      Link:{" "}
                      <a href="https://animate.style/" className="link_des">
                        Animate.css
                      </a>
                    </p>
                  </div>
                </div>

                <div className="card">
                  <img className="logo max-w-[85px]" src={boxicons} alt="boxicon" />
                  <div className="card__content">
                    <p className="card__title">Boxicons</p>
                    <p className="card__description">
                      ไลบรารีไอคอนคุณภาพสูงที่ออกแบบมาเพื่อเว็บไซต์และแอปพลิเคชัน
                    </p>
                     <p className="card__description">
                      Install:{" "}
                      <a href="https://v2.boxicons.com/usage" className="link_des">
                          Get Started<i className='bx bx-check' ></i>
                      </a>
                    </p>
                    <p className="card__description">
                      Link:{" "}
                      <a href="https://v2.boxicons.com/" className="link_des">
                        v2.boxicons.com
                      </a>
                    </p>
                  </div>
                </div>


                 <div className="card">
                  <img className="logo max-w-[85px]" src={""} alt="" />
                  <div className="card__content">
                    <p className="card__title">UI Verse</p>
                    <p className="card__description">
                      ฟรี 100% UI ที่ไม่ทำให้เว็บดูจืด
                    </p>
                    <p className="card__description">
                      Link:{" "}
                      <a href="https://uiverse.io/" className="link_des">
                        uiverse.io
                      </a>
                    </p>
                  </div>
                </div>

                 <div className="card">
                  <img className="logo max-w-[85px]" src={""} alt="" />
                  <div className="card__content">
                    <p className="card__title">UI Verse</p>
                    <p className="card__description">
                      ฟรี 100% UI ที่ไม่ทำให้เว็บดูจืด
                    </p>
                    <p className="card__description">
                      Link:{" "}
                      <a href="https://uiverse.io/" className="link_des">
                        uiverse.io
                      </a>
                    </p>
                  </div>
                </div>
                
              </div>
             
            </div>
         

         

         
        </div>
      </section>
      <PageView />
      <Theme />

      <Footer />
    </div>
  );
};

export default HomePage;
