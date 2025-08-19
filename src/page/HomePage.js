import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "animate.css";

import Typed from "typed.js";

import Footer from "../component/Footer.js";

import Theme from "../component/Theme.js";
import PageView from "../component/PageView.js";
import { cards } from "../component/Stock.js";

const HomePage = () => {
  const [query, setQuery] = useState("");

  const filtered_Cards = cards.filter((card) =>
    card.label?.toLowerCase().includes(query.toLowerCase())
  );

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
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <span>
                <i className="bx bx-search-alt-2"></i>
              </span>
              {/* <button type="submit">Submit</button> */}
            </div>
          </form>

          {/* row 1 */}

          <div className="board-app">
            <div className="index-board">
              {filtered_Cards.length === 0 ? (
                <div className="load_er">
                  <DotLottieReact
                    src="https://lottie.host/92cb821b-18fd-46f6-9444-4c217451e2de/S7lukho2AE.lottie"
                    className="img-loading"
                    width={500}
                    height={300}
                    loop
                    autoplay
                  />
                </div>
              ) : (
                <>
                  {filtered_Cards.map((card) => (
                    <div className="card" key={card.id}>
                      <img
                        className="logo max-w-[85px]"
                        src={card.logo}
                        alt={card.alt}
                      />

                      <div className="card__content">
                        <p className="card__title">{card.label}</p>
                        <p className="card__description">{card.des1}</p>
                        <p className="card__description">{card.linkInstall}</p>
                        <p className="card__description">{card.mainURL}</p>
                      </div>
                    </div>
                  ))}
                </>
              )}
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
