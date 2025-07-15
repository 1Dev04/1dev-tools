import React from "react";
import { Link } from "react-router-dom";
import "../customCSS/index.css";

function InternshipProgram() {
  const items = [
    {
      Month: "2 May 2025 - 31 May 2025",
      title: "Code",
      description: "[SMSMKT] Back Office: Domain Whitelist",
      descriptions: "Workflow Diagram for Domain Whitelist",

      description1: "[SMSMKT] Back Office: Authen with Mincrosoft",
      description1s: "Workflow Diagram for Authen with Mincrosoft",

      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-500">
          <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2zM4 5h16v11H4zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1" />
        </svg>
      ),
      icon1: <i style={{ color: "#8892be", fontSize: 15 }} className="bx bxl-php "></i>,
      icon2: <i style={{ color: "#0db7ed", fontSize: 15 }} className="bx bxl-docker"></i>,
      icon3: <i style={{ color: "#00758F", fontSize: 15 }} className="bx bxs-data"></i>,
      icon4: <i style={{ color: "#fca121" }} className="bx bxl-gitlab"></i>,
      icon5: <i style={{ color: "#7952B3" }} className="bx bxl-bootstrap"></i>,
      iconVSColor: "bg-gray-800",
      dotColor: "bg-green-500",
    },
    {
      Month: "1 June 2025 - 30 June 2025",
      title: "Code",
      description: "[SMSMKT] Back Office: Domain Whitelist (Update)",
      descriptions: "Workflow Diagram for Domain Whitelist (Update)",
      description1: "[SMSMKT] Back Office: Authen with Mincrosoft (Update)",


      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-500">
          <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2zM4 5h16v11H4zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1" />
        </svg>
      ),
      icon1: <i style={{ color: "#8892be", fontSize: 15 }} className="bx bxl-php "></i>,
      icon2: <i style={{ color: "#0db7ed", fontSize: 15 }} className="bx bxl-docker"></i>,
      icon3: <i style={{ color: "#00758F", fontSize: 15 }} className="bx bxs-data"></i>,
      icon4: <i style={{ color: "#fca121" }} className="bx bxl-gitlab"></i>,
      icon5: <i style={{ color: "#7952B3" }} className="bx bxl-bootstrap"></i>,
      iconVSColor: "bg-gray-800",
      dotColor: "bg-green-500",
    },
    {
      Month: "1 July 2025 - 31 July 2025",
      title: "Code",
      description: "[SMSMKT] Back Office: Company view setting",
      descriptions: "Workflow Diagram for Company view setting",

      description1: "[SMSMKT] Back Office: Company view setting (Update)",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-500">
          <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2zM4 5h16v11H4zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1" />
        </svg>
      ),
      icon1: <i style={{ color: "#8892be", fontSize: 15 }} className="bx bxl-php "></i>,
      icon2: <i style={{ color: "#0db7ed", fontSize: 15 }} className="bx bxl-docker"></i>,
      icon3: <i style={{ color: "#00758F", fontSize: 15 }} className="bx bxs-data"></i>,
      icon4: <i style={{ color: "#fca121" }} className="bx bxl-gitlab"></i>,
      icon5: <i style={{ color: "#7952B3" }} className="bx bxl-bootstrap"></i>,
      iconVSColor: "bg-gray-800",
      dotColor: "bg-yellow-500",
    },
    {
      Month: "1 August 2025 - 31 August 2025",
      title: "Code",
      description: "-",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-500">
          <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2zM4 5h16v11H4zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1" />
        </svg>
      ),
      dotColor: "bg-white",
    },
    {
      Month: "1 September 2025 - 30 September 2025",
      title: "Code",
      description: "-",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-500">
          <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2zM4 5h16v11H4zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1" />
        </svg>
      ),
      dotColor: "bg-white",
    },
    {
      Month: "1 October 2025 - 31 October 2025",
      title: "Code",
      description: "-",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-500">
          <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2zM4 5h16v11H4zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1" />
        </svg>
      ),
      dotColor: "bg-white",
    },
  ];

  return (
    <div className="internship">
      <div className=" footer foot-color  p-2 fixed-top box ">
        <div className="container-fluid">
          <div className="navbar-brand rounded  fs-1">Internship Project</div>
        </div>
      </div>

      <section className=" container-fluid  py-4 ">
        <div className="row flex justify-center m-5 p-2">
          <section id="faq" className="hero min-h-screen py-4 w-100 h-100">
            <div className="max-w-xl mx-auto py-40 center">
              <ul className="relative border-l-2 border-gray-200">
                {items.map((item, i) => (
                  <li key={i} className="mb-28 ml-7">
                    <span
                      className={`absolute -left-7 flex items-center justify-center w-12 h-12 rounded-full ${item.dotColor}`}  /* เพิ่มขนาดวงกลมไอคอน */
                      style={{ fontSize: '2rem' }}
                    >
                      {item.icon}
                    </span>

                    <h3 className="text-xl font-semibold">{item.Month}</h3>
                    <p className="text-lg font-normal text-gray-400">
                      {item.description}
                    </p>
                    <p className="text-lg font-normal text-gray-400">
                      {item.descriptions}
                    </p>
                    <hr className="my-4" />
                    <p className="text-lg font-normal text-gray-400">
                      {item.description1}
                    </p>
                    <p className="text-lg font-normal text-gray-400">
                      {item.description1s}
                    </p>
                    <br />
                    <div className="absolute right-0 flex gap-4">
                      <span
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${item.iconVSColor}`}
                        style={{ fontSize: '1.5rem' }}
                      >
                        {item.icon1}
                      </span>
                      <span
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${item.iconVSColor}`}
                        style={{ fontSize: '1.5rem' }}
                      >
                        {item.icon2}
                      </span>
                      <span
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${item.iconVSColor}`}
                        style={{ fontSize: '1.5rem' }}
                      >
                        {item.icon3}
                      </span>
                      <span
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${item.iconVSColor}`}
                        style={{ fontSize: '1.5rem' }}
                      >
                        {item.icon4}
                      </span>
                      <span
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${item.iconVSColor}`}
                        style={{ fontSize: '1.5rem' }}
                      >
                        {item.icon5}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

        </div>
      </section>
      <footer className="footer foot-color  p-2 fixed-bottom box">
        <Link
          className="bi bi-box-arrow-in-left size-16 navbar-brand rounded   fs-1"
          to="/#home"
        >
          {" "}
          Back
        </Link>
       
      </footer>
    </div>
  );
}

export default InternshipProgram;
