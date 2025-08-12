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
import lottieFiles from "../asset/card-img/logo-lottieFile.png";
import colorCode from "../asset/card-img/logo-colorCode.png";
import icon8 from "../asset/card-img/logo-icons8.png";
import fontGoogle from "../asset/card-img/logo-google.png";
import tailwindcss from "../asset/card-img/logo-tailwindcss.png";
import Bootstap from "../asset/card-img/logo-bootstap.png";

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
        
        <div className="wheel">
           <p className="text-mess">ปิดปรับปรุงชั่วคราว ใช้งานบน PC เท่านั้น</p>
        </div>
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
            <div className="app">
              <div className="y-board">
                
                <div className="card">
                  <img
                    className="logo max-w-[85px]"
                    src={UIVerse}
                    alt="UIVerse"
                  />
                  <div className="card__content">
                    <p className="card__title">UI Verse</p>
                    <p className="card__description">
                      แหล่งรวม UI ฟรี ใช้งานง่าย สำหรับเว็บและแอป
                    </p>
                    <p className="card__description">
                      Install: Not Available<i className="bx bx-x"></i>
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
                  <img
                    className="logo max-w-[85px]"
                    src={animationCSS}
                    alt="animationCSS"
                  />
                  <div className="card__content">
                    <p className="card__title">Animate.css</p>
                    <p className="card__description">
                      ไลบรารี CSS แอนิเมชันสำเร็จรูป ไม่ต้องเขียนโค้ดเอง
                    </p>
                    <p className="card__description">
                      Install:{" "}
                      <a
                        href="https://animate.style/#documentation"
                        className="link_des"
                      >
                        Get Started<i className="bx bx-check"></i>
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
                  <img
                    className="logo max-w-[85px]"
                    src={boxicons}
                    alt="boxicon"
                  />
                  <div className="card__content">
                    <p className="card__title">Boxicons</p>
                    <p className="card__description">
                      ไลบรารีไอคอนคุณภาพสูงที่ออกแบบมาเพื่อเว็บไซต์และแอปพลิเคชัน
                    </p>
                    <p className="card__description">
                      Install:{" "}
                      <a
                        href="https://v2.boxicons.com/usage"
                        className="link_des"
                      >
                        Get Started<i className="bx bx-check"></i>
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
                  <img
                    className="logo max-w-[85px]"
                    src={lottieFiles}
                    alt="lottiefiles"
                  />
                  <div className="card__content">
                    <p className="card__title">Lottiefiles</p>
                    <p className="card__description">
                      แหล่งรวมไฟล์แอนิเมชันฟรีแบบเบาๆ โหลดเร็ว ใช้ง่าย
                      และปรับแต่งได้ตามใจ ไม่ทำให้เว็บหน่วง
                    </p>
                    <p className="card__description">
                      Install: Not Available<i className="bx bx-x"></i>
                    </p>
                    <p className="card__description">
                      Link:{" "}
                      <a href="https://lottiefiles.com/" className="link_des">
                        lottiefiles.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="card">
                  <img className="logo max-w-[85px]" src={colorCode} alt="colorCode" />
                  <div className="card__content">
                    <p className="card__title">HTML Color Codes</p>
                    <p className="card__description">
                      กล่องเครื่องมือสีครบชุด ฟรี 100%
                    </p>
                    <p className="card__description">
                      Install: Not Available<i className="bx bx-x"></i>
                    </p>
                    <p className="card__description">
                      Link:{" "}
                      <a
                        href="https://htmlcolorcodes.com/"
                        className="link_des"
                      >
                        htmlcolorcodes.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="card">
                  <img className="logo max-w-[85px]" src={icon8} alt="icon8" />
                  <div className="card__content">
                    <p className="card__title">Icons8</p>
                    <p className="card__description">
                       แหล่งรวมไอคอนและกราฟิกคุณภาพสูง ดาวน์โหลดง่าย มีทั้งแบบฟรีและพรีเมียม
                    </p>
                    <p className="card__description">
                      Install: Not Available<i className="bx bx-x"></i>
                    </p>
                    <p className="card__description">
                      Link:{" "}
                      <a
                        href="https://icons8.com/icons"
                        className="link_des"
                      >
                        icons8.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="card">
                  <img className="logo max-w-[85px]" src={fontGoogle} alt="fontGoogle" />
                  <div className="card__content">
                    <p className="card__title">Google Fonts</p>
                    <p className="card__description">
                       บริการฟอนต์แบบเปิดฟรีจากกูเกิล ให้เลือกใช้ฟอนต์คุณภาพสูงหลากหลายแบบ
                    </p>
                    
                      <p className="card__description">
                      Install:{" "}
                      <a
                        href="https://fonts.google.com/knowledge/using_type/installing_and_managing_fonts"
                        className="link_des"
                      >
                        Get Started<i className="bx bx-check"></i>
                      </a>
                    </p>
                    
                    <p className="card__description">
                      Link:{" "}
                      <a
                        href="https://fonts.google.com/"
                        className="link_des"
                      >
                        fonts.google.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="card">
                  <img className="logo max-w-[85px]" src={tailwindcss} alt="tailwindCSS" />
                  <div className="card__content">
                    <p className="card__title">TailwindCSS</p>
                    <p className="card__description">
                       เฟรมเวิร์ก CSS แบบ utility-first ที่ช่วยให้การสร้างเว็บสมัยใหม่เป็นเรื่องง่ายและรวดเร็ว
                    </p>
                    
                      <p className="card__description">
                      Install:{" "}
                      <a
                        href="https://tailwindcss.com/docs/installation/using-vite"
                        className="link_des"
                      >
                        Get Started<i className="bx bx-check"></i>
                      </a>
                    </p>
                    
                    <p className="card__description">
                      Link:{" "}
                      <a
                        href="https://tailwindcss.com/"
                        className="link_des"
                      >
                        tailwindcss.com
                      </a>
                    </p>
                  </div>
                </div>

                 <div className="card">
                  <img className="logo max-w-[85px]" src={Bootstap} alt="Bootstap" />
                  <div className="card__content">
                    <p className="card__title">Bootstap</p>
                    <p className="card__description">
                       เฟรมเวิร์ก CSS/JS ฟรีและโอเพนซอร์สที่ช่วยให้การพัฒนาเว็บไซต์แบบ responsive และ mobile-first
                    </p>
                    
                      <p className="card__description">
                      Install:{" "}
                      <a
                        href="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
                        className="link_des"
                      >
                        Get Started<i className="bx bx-check"></i>
                      </a>
                    </p>
                    
                    <p className="card__description">
                      Link:{" "}
                      <a
                        href="https://getbootstrap.com/"
                        className="link_des"
                      >
                        getbootstrap.com
                      </a>
                    </p>
                  </div>
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
