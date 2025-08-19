import { useState, useEffect, useRef } from "react";

import "../customCSS/style-switcher.css";

function Theme() {
  const [isStyleSwitcherOpen, setIsStyleSwitcherOpen] = useState(false);
  const dayNightRef = useRef(null);

  useEffect(() => {
    // ปิด style switcher เวลาสกอล์
    const handleScroll = () => setIsStyleSwitcherOpen(false);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const dayNight = dayNightRef.current;
    if (!dayNight) return;

    const handleClick = () => {
      const icon = dayNight.querySelector("i");
      icon.classList.toggle("bi-sun-fill");
      icon.classList.toggle("bi-moon-fill");
      document.body.classList.toggle("white");
    };

    // ตั้งค่า icon ตอนโหลด
    const icon = dayNight.querySelector("i");
    if (document.body.classList.contains("dark")) {
      icon.classList.remove("bi-sun-fill");
      icon.classList.add("bi-moon-fill");
    } else {
      icon.classList.remove("bi-moon-fill");
      icon.classList.add("bi-sun-fill");
    }

    dayNight.addEventListener("click", handleClick);
    return () => dayNight.removeEventListener("click", handleClick);
  }, []);

  const toggleStyleSwitch = () => setIsStyleSwitcherOpen((prev) => !prev);

  const changeThemeColor = (color) => {
    document.body.style.setProperty("--main-color", color);
  };

  return (
    <div className={`style-switcher ${isStyleSwitcherOpen ? "open" : ""}`}>
      <div
        className="style-switcher-toggler s-icon"
        onClick={toggleStyleSwitch}
      >
        <i className="fas fa-cog fa-spin"></i>
      </div>

      <div className="day-night s-icon" ref={dayNightRef}>
        <i className="bi bi-sun-fill"></i>
      </div>

      <h4>
        Theme Colors <span className="bi bi-palette"></span>
      </h4>

      <div className="theme-options ">
        <span
          className="color-1 Sky"
          onClick={() => changeThemeColor("#00e0ff")}
        ></span>
        <span
          className="color-2 Pink"
          onClick={() => changeThemeColor("#ff4b91")}
        ></span>
        <span
          className="color-3 Green"
          onClick={() => changeThemeColor("#7cff4f")}
        ></span>
        <span
          className="color-4 Violet"
          onClick={() => changeThemeColor("#a855f7")}
        ></span>
      </div>
    </div>
  );
}

export default Theme;
