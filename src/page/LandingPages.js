import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../component/Navbar.js";
import Footer from "../component/Footer.js";
import { FAQItem } from "./_companents/faq-item";
/* 
import Contact from "../component/contact.js"; 
*/

import Typed from "typed.js";
import Theme from "../component/Theme.js";
import PageView from "../component/PageView.js";
import Image1 from "../asset/imageR/EDITGPTPOST1.png";
import Image2 from "../asset/imageR/photo4.png";
import Port1 from "../asset/portfolio/cheeseCake.png";
import Port2 from "../asset/portfolio/cakeCafe.png";
import Port3 from "../asset/portfolio/Cyber.png";
import KU from "../asset/imageR/KUs.png";
import nextP from "../asset/imageR/nextP.png";
import mobileappP from "../asset/imageR/mobileapp.png";
import HackEYE from "../asset/certificate/dairyPhoto/HackEYE.png";
import kuP from "../asset/certificate/dairyPhoto/ku.png";

// icons
import lua from "../asset/icons/ico_lua.png";

function LandingPage() {
  const navigate = useNavigate();

  const handleClick1 = () => {
    navigate("/Front-End-Daily");
  };

  const handleClick2 = () => {
    navigate("/Back-End-Daily");
  };

  const handleClick3 = () => {
    navigate("/Other-Daily");
  };

  const handleIntern = () => {
    navigate("/Internship-project");
  };

  React.useEffect(() => {
    const typed = new Typed(".multiple-text", {
      strings: [
        "Full Stack Developer",
        "Game Developer",
        "Web Developer",
        "Mobile Developer",
        "Compose a song",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
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

  const faqs = [
    {
      question: "อะไรคือแรงบันดาลใจที่ทำให้คุณเป็น Programmer ?",
      answer: "ตั้งเเต่เด็กที่เคยเสียใจกับผลการเรียน สู่คนที่ค้นพบ 'จุดแข็ง' ของตัวเองผ่านเกม และเดินหน้าสู่เส้นทางโปรแกรมเมอร์ด้วยแรงผลักดันจากความหลงใหล",
      answer2: "จุดแข็งของผมคือ ชอบออกแบบ และมี ความคิดสร้างสรรค์ ซึ่งช่วยให้ผมคิดอะไรใหม่ ๆ"
    },
    {
      question: "ทุกวันนี้คุณพัฒนาตัวเองด้วยวิธีไหนบ้าง ?",
      answer: "สำคัญที่สุด คือ การมีวินัย",
      answer2: "NEVER GIVE UP"
    },
    {
      question: "คุณเลือกทำงานจากความฝัน หรือจากความมั่นคง ?",
      answer: "ทั้ง 2 อย่างครับ",
    },
    {
      question: "มีใครเป็นไอดอลหรือบุคคลต้นแบบในชีวิตคุณ ?",
      answer: "ซีเค เจิง (CK Cheong): ซีอีโอและผู้ร่วมก่อตั้ง Fastwork.co",
      answer2:
        "Jirayut (Topp) Srupsrisopa: ผู้ก่อตั้งและซีอีโอ Bitkub Capital Group Holdings Co., Ltd.",
    },
    {
      question: "คุณจัดการกับความกลัวหรือความไม่มั่นใจยังไง ?",
      answer: "ถ้ายอมความคิดเหล่านั้น คุณจะมาถึงจุดนี้ทำไม?",
       answer2: "ผมใช้วิธีเปลี่ยนความคิดตัวเอง อะไรจะเกิดก็ต้องเกิด"
    },
    {
      question: "อะไรคือเหตุผลที่คุณไม่ยอมแพ้ แม้เจออุปสรรค ?",
      answer: "อุปสรรค ทำให้ผมเก่งขึ้นมาก เเต่ต้องเเลกกับความกลัว",
    },
  ];

  return (
    <div className="dark">
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
      <Navbar />
      <section className="home" id="home">
        <div className="home-img">
          <img src={Image1} alt="photo3" />
        </div>
        <div className="home-content">
          <h3 className="text-center">
            Hello, <span>It's me</span>
          </h3>
          <h1 className="text-center">Krittiphon Yoonaitham</h1>
          <br></br>
          <h2 className="text-center">
            <span className="multiple-text"></span>
          </h2>

          <div className="text-center social-media">
            <a href="https://www.facebook.com/krittiphon.yoonaitham.9">
              <i className="bx bxl-facebook T1"></i>
            </a>
            <a href="https://www.instagram.com/1devmoz/">
              <i className="bx bxl-instagram T2"></i>
            </a>
            <a href="https://github.com/1Dev04">
              <i className="bx bxl-github T3"></i>
            </a>
            <a href="https://www.tiktok.com/@yk1moss?_t=8i7ePfNoJJY&_r=1">
              <i className="bx bxl-tiktok T4"></i>
            </a>
            <a href="https://soundcloud.com/user-980268968">
              <i className="bx bxl-soundcloud T5"></i>
            </a>

            <a href="https://www.linkedin.com/in/krittiphon-yoonaitham-a291482b1/">
              <i className="bx bxl-linkedin T6"></i>
            </a>
          </div>
        </div>
      </section>

      <section className="contact" id="about">
        <h2 className="heading text-center ">
          About<span>Me</span>
        </h2>
        <div className="about">
          <div className="about-img">
            <img src={Image2} alt="photo4" />
          </div>
          <div className="about-content ">
            <p>
              Name: Krittiphon Yoonaitham <br />
              Nickname: Moss <br />
              Age: 21 <br />
              Pursuing: Bachelor of Computer Science at Kasetsart University,
              Sriracha Campus <br />
              Internshiping: CLICKNEXT CO. LTD. <br />
              Position: Full-Stack Developer <br />
              Catchphrase: Never give up <br />
              Hobbie: Compose a song <br />
              Target: <br />
              Contributing to open-source projects, and developing end-to-end
              solutions. Seeking real-world experience to strengthen practical
              skills and build a solid foundation for a future career in
              software development.
            </p>
          </div>
        </div>
      </section>

      <section className="services" id="certificate">
        <h2 className="heading">
          Certi<span>ficate</span>
        </h2>

        <div className="services-container ">
          <button className="services-box" onClick={handleClick1}>
            <i className="bx bx-code-alt"></i>
            <h3>Front-End Developer</h3>
            <p>Certificates of Training to become a Font-End Developer.</p>
            <center>
              <h3 aria-label="bx bxs-right-top-arrow-circle" role="img">
                <li className="bx bxs-right-top-arrow-circle"></li>
              </h3>
            </center>
          </button>
          <button className="services-box" onClick={handleClick2}>
            <i className="bx bx-code-curly"></i>
            <h3>Back-End Developer</h3>
            <p>Certificates of Training to become a Back-End Developer.</p>
            <center>
              <h3 aria-label="bx bxs-right-top-arrow-circle" role="img">
                <li className="bx bxs-right-top-arrow-circle"></li>
              </h3>
            </center>
          </button>
          <button className="services-box" onClick={handleClick3}>
            <i className="bx bx-certification"></i>
            <h3>Other ones</h3>

            <p>Other certificates related to the profession.</p>
            <center>
              <h3 aria-label="bx bxs-right-top-arrow-circle" role="img">
                <li className="bx bxs-right-top-arrow-circle"></li>
              </h3>
            </center>
          </button>
        </div>
      </section>

      <section className="container1 " id="skills">
        <h2 className="heading">
          Hard<span> Skills</span>
        </h2>

        <div className="Technical-bar">
          <h2 className="heading1">
            Technical<span> Skills</span>
          </h2>

          <div className="tec-skill">
            <div className="side">
              <i style={{ color: "#e34c26" }} className="bx bxl-html5 "></i>
              <div className="hid-name-html">
                <span>HTML</span>
              </div>
            </div>

            <div className="side">
              <i style={{ color: "#264de4" }} className="bx bxl-css3"></i>
              <div className="hid-name-css">
                <span>CSS</span>
              </div>
            </div>

            <div className="side">
              <i style={{ color: "#f0db4f" }} className="bx bxl-javascript"></i>
              <div className="hid-name-js">
                <span>Javascript</span>
              </div>
            </div>

            <div className="side">
              <i style={{ color: "#61DBFB" }} className="bx bxl-react"></i>
              <div className="hid-name-react">
                <span>React</span>
              </div>
            </div>

            <div className="side">
              <i style={{ color: "#f89820" }} className="bx bxl-java"></i>
              <div className="hid-name-java">
                <span>Java</span>
              </div>
            </div>

            <div className="side">
              <i style={{ color: "#3776AB" }} className="bx bxl-python"></i>
              <div className="hid-name-python">
                <span>Python</span>
              </div>
            </div>

            <div className="side">
              <i
                style={{ color: "#00599C" }}
                className="bx bxl-c-plus-plus"
              ></i>
              <div className="hid-name-cc">
                <span>C/C++</span>
              </div>
            </div>

            <div className="side">
              <i style={{ color: "#00ADD8" }} className="bx bxl-go-lang"></i>
              <div className="hid-name-go">
                <span>Golang</span>
              </div>
            </div>

            <div className="side">
              <i style={{ color: "#336791" }} className="bx bxl-postgresql"></i>
              <div className="hid-name-postgres">
                <span>Postgresql</span>
              </div>
            </div>

            <div className="side">
              <i style={{ color: "#00758F" }} className="bx bxs-data"></i>
              <div className="hid-name-mysql">
                <span>MySQL</span>
              </div>
            </div>

            <div className="side">
              <i style={{ color: "#FF6C37" }} className="bx bxl-ok-ru"></i>
              <div className="hid-name-postman">
                <span>Postman</span>
              </div>
            </div>

            <div className="side">
              <i style={{ color: "#0db7ed" }} className="bx bxl-docker"></i>
              <div className="hid-name-docker">
                <span>Docker</span>
              </div>
            </div>

            <div className="side">
              <i style={{ color: "#7952B3" }} className="bx bxl-bootstrap"></i>
              <div className="hid-name-bootstap">
                <span>Bootstap5</span>
              </div>
            </div>

            <div className="side">
              <i
                style={{ color: "#38B2AC" }}
                className="bx bxl-tailwind-css"
              ></i>
              <div className="hid-name-tailwind">
                <span>TailwindCSS</span>
              </div>
            </div>

            <div className="side">
              <i style={{ color: "#00C7B7" }} className="bx bxl-netlify"></i>
              <div className="hid-name-netlify">
                <span>Netlify</span>
              </div>
            </div>

            <div className="side">
              <i style={{ color: "#e8e8e8ff" }} className="bx bx-rocket"></i>
              <div className="hid-name-nextjs">
                <span>NextJS</span>
              </div>
            </div>

            <div className="side">
              <i style={{ color: "#8892be" }} className="bx bxl-php"></i>
              <div className="hid-name-php">
                <span>PHP</span>
              </div>
            </div>

            <div className="side">
              <i style={{ color: "#fca121" }} className="bx bxl-gitlab"></i>
              <div className="hid-name-gitlab">
                <span>Gitlab</span>
              </div>
            </div>

            <div className="side">
              <i>
                <img src={lua} alt="lua" />
              </i>
              <div className="hid-name-lua">
                <span>Lua</span>
              </div>
            </div>

            <div className="side">
              <i style={{ color: "#13aa52" }} className="bx bxl-mongodb"></i>
              <div className="hid-name-mongo">
                <span>Mongodb</span>
              </div>
            </div>

            <div className="side">
             <i style={{ color: "#FF8F00" }} className="bx bxl-firebase"></i>
              <div className="hid-name-mongo">
                <span>Firebase</span>
              </div>
            </div>

          </div>
          <h2 className="heading1">
            Computer<span> Skills</span>
          </h2>

          <div className="bar">
            <i style={{ color: "#c100ff" }}></i>
            <div className="indfo">
              <span>Word</span>
            </div>
            <div className="progress-line1 word">
              <span></span>
            </div>
          </div>
          <br />

          <div className="bar">
            <i style={{ color: "#c100ff" }}></i>
            <div className="indfo">
              <span>Excel</span>
            </div>
            <div className="progress-line1 excel">
              <span></span>
            </div>
          </div>
          <br />

          <div className="bar">
            <i style={{ color: "#c100ff" }}></i>
            <div className="indfo">
              <span>PowerPoint</span>
            </div>
            <div className="progress-line1 powerp">
              <span></span>
            </div>
          </div>
          <br />

          <div className="bar">
            <i style={{ color: "#ffff00" }}></i>
            <div className="indfo">
              <span>PowerBI</span>
            </div>
            <div className="progress-line1 powerb">
              <span></span>
            </div>
          </div>

          <br />

          <div className="bar">
            <i style={{ color: "#ffff00" }}></i>
            <div className="indfo">
              <span>Draw.io</span>
            </div>
            <div className="progress-line1 powerb">
              <span></span>
            </div>
          </div>

          <h2 className="heading1">
            Language<span> Skills</span>
          </h2>

          <div className="bar">
            <i style={{ color: "#0000" }}></i>
            <div className="indfo">
              <span>Thai</span>
            </div>
            <div className="progress-line1 TH">
              <span></span>
            </div>
          </div>
          <br />

          <div className="bar">
            <i style={{ color: "#0000" }}></i>
            <div className="indfo">
              <span>English</span>
            </div>
            <div className="progress-line1 Eng">
              <span></span>
            </div>
          </div>
          <br />

          <br></br>
          <br></br>
          <div className="contalner1">
            <h1 className="heading">
              Soft<span> Skills</span>
            </h1>
            <br></br>
            <br></br>
            <div className="radial-bars">
              <div className="radial-bar">
                <svg x="0px" y="0px" viewBox="0 0 200 200">
                  <circle
                    className="progress-bar"
                    cx="100"
                    cy="100"
                    r="80"
                  ></circle>
                  <circle
                    className="path path-2"
                    cx="100"
                    cy="100"
                    r="80"
                  ></circle>
                </svg>
                <div className="percentage">80%</div>
                <div className="text text-center">Collaboration</div>
              </div>

              <div className="radial-bar">
                <svg x="0px" y="0px" viewBox="0 0 200 200">
                  <circle
                    className="progress-bar"
                    cx="100"
                    cy="100"
                    r="80"
                  ></circle>
                  <circle
                    className="path path-1"
                    cx="100"
                    cy="100"
                    r="80"
                  ></circle>
                </svg>
                <div className="percentage">100%</div>
                <div className="text text-center">Communication</div>
              </div>

              <div className="radial-bar">
                <svg x="0px" y="0px" viewBox="0 0 200 200">
                  <circle
                    className="progress-bar"
                    cx="100"
                    cy="100"
                    r="80"
                  ></circle>
                  <circle
                    className="path path-3"
                    cx="100"
                    cy="100"
                    r="80"
                  ></circle>
                </svg>
                <div className="percentage">80%</div>
                <div className="text text-center">Teamwork</div>
              </div>

              <div className="radial-bar">
                <svg x="0px" y="0px" viewBox="0 0 200 200">
                  <circle
                    className="progress-bar"
                    cx="100"
                    cy="100"
                    r="80"
                  ></circle>
                  <circle
                    className="path path-4"
                    cx="100"
                    cy="100"
                    r="80"
                  ></circle>
                </svg>
                <div className="percentage">90%</div>
                <div className="text text-center">Problem solving </div>
              </div>

              <div className="radial-bar">
                <svg x="0px" y="0px" viewBox="0 0 200 200">
                  <circle
                    className="progress-bar"
                    cx="100"
                    cy="100"
                    r="80"
                  ></circle>
                  <circle
                    className="path path-1"
                    cx="100"
                    cy="100"
                    r="80"
                  ></circle>
                </svg>
                <div className="percentage">100%</div>
                <div className="text text-center">Responsibility</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <span className="heading">Projects</span>
        <div className="portfolio-container">
          <div className="portfolio-box">
            <img
              src="https://media.licdn.com/dms/image/v2/C510BAQGihmUgvPDRUA/company-logo_200_200/company-logo_200_200/0/1630575474865?e=1755129600&amp;v=beta&amp;t=-Ai2lZkH_gTEAoWkqL11JNViaeRg_ap7lZdj79s2aOM"
              loading="lazy"
              alt="โลโก้ ClickNext"
              id="ember35"
              className="evi-image lazy-image ember-view org-top-card-primary-content__logo
            "
            />
            <button className="portfolio-layer" onClick={handleIntern}>
              <h4>Internship</h4>
              <br/>
            </button>
          </div>

          <div className="portfolio-box">
            <img src={Port1} alt="port1" />
            <div className="portfolio-layer">
              <h4>Java Project</h4>
              <br/>
              <a href="https://www.youtube.com/watch?v=bQ7pbJf0NUs&t=77s">
                <i className="bx bx-link-external hov-i"></i>
              </a>
            </div>
          </div>

          <div className="portfolio-box">
            <img src={Port2} alt="port2" />
            <div className="portfolio-layer">
              <h4>C Project</h4>
              <br/>
              <a href="https://www.youtube.com/watch?v=c3gxKG7UsSM">
                <i className="bx bx-link-external hov-i "></i>{" "}
              </a>
            </div>
          </div>

          <div className="portfolio-box">
            <img src={Port3} alt="port3" />
            <div className="portfolio-layer">
              <h4>Game Roblox Project </h4>
              <br/>
              <a href="https://www.roblox.com/games/6401878474/DISCO-CYBER">
                <i className="bx bx-link-external hov-i"></i>
              </a>
            </div>
          </div>

          <div className="portfolio-box">
            <img src={KU} alt="KU" />
            <div className="portfolio-layer">
              <h4>KU SRC</h4>
              <br/>
              <a href="https://www.csi-kusrc.tech/-hack-to-the-max-digital-infrastructure">
                <i className="bx bx-link-external hov-i"></i>
              </a>
            </div>
          </div>

          <div className="portfolio-box">
            <img src={nextP} alt="KU" />
            <div className="portfolio-layer">
              <h4>KU SRC</h4>
              <br/>
              <a href="https://demo-next-lilac.vercel.app/">
                <i className="bx bx-link-external hov-i"></i>
              </a>
            </div>
          </div>

          <div className="portfolio-box">
            <img src={mobileappP} alt="mobile dev" />
            <div className="portfolio-layer">
              <h4>KU SRC</h4>
              <br/>
              <a href="https://youtu.be/zE7b4hVGziY">
                <i className="bx bx-link-external hov-i"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* section Slide auto photo card */}
      <section className="activity" id="activitys">
        <h2 className="heading">
          Activity
        </h2>

        <div className="row flex">
          <div className="colunm flex justify-center   ">
            <div className=" m-4 col-lg-4 col-md-5 col-sm-4 img-thumbnail m-1 bg-transparent box1">
              <img
                src={HackEYE}
                className=" card-img-top bg-origin-content p-2 "
                alt="Frontend"
              />
            </div>
            <div className=" m-4 col-lg-4 col-md-5 col-sm-4 img-thumbnail m-1 bg-transparent box1">
              <img
                src={kuP}
                className=" card-img-top bg-origin-content p-2 "
                alt="Frontend"
              />
            </div>
          </div>
        </div>
        <br />
        <h2 className="heading">Q&A</h2>

        <div className="bg-black-200 p-6 rounded-lg shadow-xl w-full mt-50">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              answer2={faq.answer2}
            />
          ))}
        </div>
      </section>

      <PageView />
      <Theme />

      <Footer />
    </div>
  );
}

export default LandingPage;
