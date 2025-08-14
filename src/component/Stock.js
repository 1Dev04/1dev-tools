import animationCSS from "../asset/card-img/logo-animationCSS.png";
import boxicons from "../asset/card-img/logo-boxicon.png";
import bootstap from "../asset/card-img/logo-bootstap.png";
import colorCode from "../asset/card-img/logo-colorCode.png";
import cloudinary from "../asset/card-img/logo-Cloudinary.png";
import dafont from "../asset/card-img/logo-dafont.png";
import fontGoogle from "../asset/card-img/logo-google.png";
import icon8 from "../asset/card-img/logo-icons8.png";
import lottieFiles from "../asset/card-img/logo-lottieFile.png";
import ReactHookForm from "../asset/card-img/log-react-form.png";
import tailwindcss from "../asset/card-img/logo-tailwindcss.png";
import UIVerse from "../asset/card-img/logo-UI.png";
import w3Schools from "../asset/card-img/logo-w3h.png";

export const cards = [
  {
    id: 1,
    label: "AnimateCSS",
    alt: "animationCSS",
    logo: animationCSS,
    des1: `ไลบรารี CSS แอนิเมชันสำเร็จรูป ไม่ต้องเขียนโค้ดเอง`,
    linkInstall: (
      <>
        Install:{" "}
        <a href="https://animate.style/#documentation" className="link_des">
          Get Started<i className="bx bx-check"></i>
        </a>
      </>
    ),
    mainURL: (
      <>
        Link:{" "}
        <a href="https://animate.style/" className="link_des">
          Animate.css
        </a>
      </>
    ),
  },
  {
    id: 2,
    label: "Boxicons",
    alt: "boxicons",
    logo: boxicons,
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
  {
    id: 3,
    label: "Bootstap",
    alt: "bootstap",
    logo: bootstap,
    des1: `เฟรมเวิร์ก CSS/JS
          ฟรีและโอเพนซอร์สที่ช่วยให้การพัฒนาเว็บไซต์แบบ responsive และ
          mobile-first`,
    linkInstall: (
      <>
        Install:{" "}
        <a
          href="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
          className="link_des"
        >
          Get Started<i className="bx bx-check"></i>
        </a>
      </>
    ),
    mainURL: (
      <>
        Link:{" "}
        <a href="https://getbootstrap.com/" className="link_des">
          getbootstrap.com
        </a>
      </>
    ),
  },
  {
    id: 4,
    label: "HTML Color Codes",
    alt: "colorCode",
    logo: colorCode,
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
  {
    id: 5,
    label: "Cloudinary",
    alt: "cloudinary",
    logo: cloudinary,
    des1: `เครื่องมือที่ทำให้การจัดการและส่งมอบสื่อดิจิทัลเป็นเรื่องง่ายและรวดเร็ว
           โดยรองรับการปรับขนาดและแปลงรูปแบบสื่ออัตโนมัติ`,
    linkInstall: (
      <>
        Install: Not Available<i className="bx bx-x"></i>
      </>
    ),
    mainURL: (
      <>
        Link:{" "}
        <a href="https://cloudinary.com/" className="link_des">
          cloudinary.com
        </a>
      </>
    ),
  },
  {
    id: 6,
    label: "Dafont",
    alt: "dafont",
    logo: dafont,
    des1: `Dafont.com
          คือแหล่งดาวน์โหลดฟอนต์ฟรีที่ใหญ่ที่สุดบนอินเทอร์เน็ต
          มีฟอนต์กว่า 95,000 แบบให้เลือกใช้ `,
    linkInstall: (
      <>
        Install: Not Available<i className="bx bx-x"></i>
      </>
    ),
    mainURL: (
      <>
        Link:{" "}
        <a href="https://www.dafont.com/" className="link_des">
          www.dafont.com
        </a>
      </>
    ),
  },
  {
    id: 7,
    label: "Google Fonts",
    alt: "fontGoogle",
    logo: fontGoogle,
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
  {
    id: 8,
    label: "Icons8",
    alt: "icon8",
    logo: icon8,
    des1: `แหล่งรวมไอคอนและกราฟิกคุณภาพสูง ดาวน์โหลดง่าย
    มีทั้งแบบฟรีและพรีเมียม`,
    linkInstall: (
      <>
        Install: Not Available<i className="bx bx-x"></i>
      </>
    ),
    mainURL: (
      <>
        Link:{" "}
        <a href="https://icons8.com/icons" className="link_des">
          icons8.com
        </a>
      </>
    ),
  },
  {
    id: 9,
    label: "Lottiefiles",
    alt: "lottieFiles",
    logo: lottieFiles,
    des1: `แหล่งรวมไฟล์แอนิเมชันฟรีแบบเบาๆ โหลดเร็ว ใช้ง่าย
          และปรับแต่งได้ตามใจ ไม่ทำให้เว็บหน่วง`,
    linkInstall: (
      <>
        Install: Not Available<i className="bx bx-x"></i>
      </>
    ),
    mainURL: (
      <>
        Link:{" "}
        <a href="https://lottiefiles.com/" className="link_des">
          lottiefiles.com
        </a>
      </>
    ),
  },
  {
    id: 10,
    label: "React-Hook-Form",
    alt: "ReactHookForm",
    logo: ReactHookForm,
    des1: `ไลบรารีสำหรับจัดการฟอร์มในแอปพลิเคชัน React`,
    linkInstall: (
      <>
        Install:{" "}
        <a href="https://react-hook-form.com/get-started" className="link_des">
          Get Started<i className="bx bx-check"></i>
        </a>
      </>
    ),
    mainURL: (
      <>
        Link:{" "}
        <a href="https://react-hook-form.com/" className="link_des">
          react-hook-form.com
        </a>
      </>
    ),
  },
  {
    id: 11,
    label: "TailwindCSS",
    alt: "tailwindcss",
    logo: tailwindcss,
    des1: `เฟรมเวิร์ก CSS แบบ utility-first
      ที่ช่วยให้การสร้างเว็บสมัยใหม่เป็นเรื่องง่ายและรวดเร็ว
`,
    linkInstall: (
      <>
        Install:{" "}
        <a
          href="https://tailwindcss.com/docs/installation/using-vite"
          className="link_des"
        >
          Get Started<i className="bx bx-check"></i>
        </a>
      </>
    ),
    mainURL: (
      <>
        Link:{" "}
        <a href="https://tailwindcss.com/" className="link_des">
          tailwindcss.com
        </a>
      </>
    ),
  },
  {
    id: 12,
    label: "UI Verse",
    alt: "UIVerse",
    logo: UIVerse,
    des1: `แหล่งรวม UI ฟรี ใช้งานง่าย สำหรับเว็บและแอป`,
    linkInstall: (
      <>
        Install: Not Available<i className="bx bx-x"></i>
      </>
    ),
    mainURL: (
      <>
        Link:{" "}
        <a href="https://uiverse.io/" className="link_des">
          uiverse.io
        </a>
      </>
    ),
  },
  {
    id: 13,
    label: "W3Schools",
    alt: "w3Schools",
    logo: w3Schools,
    des1: `แพลตฟอร์มออนไลน์ยอดนิยมที่ให้บริการบทเรียนและแหล่งอ้างอิงสำหรับเทคโนโลยีเว็บต่างๆ`,
    linkInstall: (
      <>
        Install: Not Available<i className="bx bx-x"></i>
      </>
    ),
    mainURL: (
      <>
        Link:{" "}
        <a href="https://www.w3schools.com/" className="link_des">
          www.w3schools.com
        </a>
      </>
    ),
  },
];
