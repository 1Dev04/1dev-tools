import sp500 from "../asset/filter-img/tradingV/sp500.png";
import boxicons from "../asset/card-img/logo-boxicon.png";
import autoCloseTag from "../asset/filter-img/extention/autoCloseTag.png";
import colorCode from "../asset/card-img/logo-colorCode.png";
import fontGoogle from "../asset/card-img/logo-google.png";
import sketchfab from "../asset/card-img/logo-sketchfab.png";

import n8n from "../asset/filter-img/AW/N8n-logo.png";

export const filter = [
  // Automation and Workflow
  {
    id: 101,
    label: "Chat with PDF file",
    alt: "n8n",
    logo: n8n,
    category: "AW",
    des1: `Free WorkFlow 100%`,
    linkInstall: (
       <>
        Install:{" "}
        <span style={{ color: "green" }}>
          Download to JSON file<i className="bx bx-check"></i>
        </span>
      </>
    ),
    mainURL: (
      <>
        Link:{" "}
        <a
          href="https://drive.google.com/file/d/1xsW3IlMG2MT5ZsnvzJquocQG9mhShNix/view"
          className="link_des"
        >
          drive.google.com
        </a>
      </>
    ),
  },

  // Color
  {
    id: 201,
    label: "HTML Color Codes",
    alt: "colorCode",
    logo: colorCode,
    category: "Color",
    des1: `กล่องเครื่องมือสีครบชุด ฟรี 100%`,
    linkInstall: (
      <>
        Install: Not Available<i className="bx bx-x"></i>
      </>
    ),
    mainURL: (
      <>
        Link:{" "}
        <a href="https://htmlcolorcodes.com/" className="link_des">
          htmlcolorcodes.com
        </a>
      </>
    ),
  },

  // Extension VScode
  {
    id: 301,
    label: "Auto Close Tag",
    alt: "autoCloseTag",
    logo: autoCloseTag,
    category: "EV",
    des1: "ช่วยปิดแท็ก HTML/JSX อัตโนมัติ ลดการพิมพ์ซ้ำและข้อผิดพลาด",
    linkInstall: (
      <>
        Install:{" "}
        <span style={{ color: "green" }}>
          Extension VSCode<i className="bx bx-check"></i>
        </span>
      </>
    ),
    mainURL: (
      <>
        Link: Not Available<i className="bx bx-x"></i>
      </>
    ),
  },

  // Fonts
  {
    id: 401,
    label: "Google Fonts",
    alt: "fontGoogle",
    logo: fontGoogle,
    category: "Font",
    des1: `บริการฟอนต์แบบเปิดฟรีจากกูเกิล
              ให้เลือกใช้ฟอนต์คุณภาพสูงหลากหลายแบบ`,
    linkInstall: (
      <>
        Install:{" "}
        <a
          href="https://fonts.google.com/knowledge/using_type/installing_and_managing_fonts"
          className="link_des"
        >
          Get Started<i className="bx bx-check"></i>
        </a>
      </>
    ),
    mainURL: (
      <>
        Link:{" "}
        <a href="https://fonts.google.com/" className="link_des">
          fonts.google.com
        </a>
      </>
    ),
  },

  // Icon
  {
    id: 501,
    label: "Boxicons",
    alt: "boxicons",
    logo: boxicons,
    category: "Icon",
    des1: `ไลบรารีไอคอนคุณภาพสูงที่ออกแบบมาเพื่อเว็บไซต์และแอปพลิเคชัน`,
    linkInstall: (
      <>
        Install:{" "}
        <a href="https://v2.boxicons.com/usage" className="link_des">
          Get Started<i className="bx bx-check"></i>
        </a>
      </>
    ),
    mainURL: (
      <>
        Link:{" "}
        <a href="https://v2.boxicons.com/" className="link_des">
          v2.boxicons.com
        </a>
      </>
    ),
  },

  // Model
  {
    id: 601,
    label: "Sketchfab",
    alt: "sketchfab",
    logo: sketchfab,
    category: "Model",
    des1: `แพลตฟอร์มเจ๋งสำหรับดู แชร์ และสำรวจคอนเทนต์ 3D, VR, AR บนเว็บแบบล้ำ`,
    linkInstall: (
      <>
        Install: Not Available<i className="bx bx-x"></i>
      </>
    ),
    mainURL: (
      <>
        Link:{" "}
        <a href="https://sketchfab.com/" className="link_des">
          sketchfab.com
        </a>
      </>
    ),
  },

  // Trading View
  {
    id: 701,
    label: "S&P 500",
    alt: "sp500",
    logo: sp500,
    category: "Trading",
    des1: `ดัชนีหุ้นอเมริกา รวมบริษัทใหญ่สุด 500 ตัวที่จดทะเบียนในตลาดหลักทรัพย์ (NYSE, NASDAQ)`,
    linkInstall: (
      <>
        Install: Not Available<i className="bx bx-x"></i>
      </>
    ),
    mainURL: (
      <>
        Link:{" "}
        <a
          href="https://th.tradingview.com/symbols/SPX/components/"
          className="link_des"
        >
          th.tradingview.com
        </a>
      </>
    ),
  },
];
