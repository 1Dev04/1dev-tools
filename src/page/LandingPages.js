import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/Narbar.js';
import Footer from '../component/Footer.js';
import Contact from '../component/contact.js';

import Typed from 'typed.js'
import Theme from '../component/Theme.js';
import Image1 from '../asset/imageR/photo3.png';
import Image2 from '../asset/imageR/photo4.png';
import Port1 from '../asset/portfolio/Loadcheesecake.png';
import Port2 from '../asset/portfolio/S1.png';
import Port3 from '../asset/portfolio/DISCOCYBER.png';


function LandingPage() {

    const navigate = useNavigate();

    const handleClick1 = () => {
        navigate("/Font-End-Dialy");
    };

    const handleClick2 = () => {
        navigate("/Back-End-Dialy");
    };

    React.useEffect(() => {
        const typed = new Typed('.multiple-text', {
            strings: ['Full Stack Developer', 'Game Developer', 'Rapper'],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true
        });
        return () => {
            typed.destroy();

        };
    }, []);

    return (
        <div className="dark ">
            <Navbar />
            <section className="home" id="home">
                <div className="home-img">
                    <img src={Image1} alt="photo3" />
                </div>
                <div className="home-content">
                    <h3 className="text-center">Hello, <span>It's me</span></h3>
                    <h1 className="text-center">Krittiphon Yoonaitham</h1>
                    <br></br>
                    <h2 className="text-center">I'm a   
                        <span className="multiple-text"> </span>
                    </h2>
        
                    <div className="text-center  social-media">
                        <a href="https://www.facebook.com/krittiphon.yoonaitham.9"><i className='bx bxl-facebook T1'></i></a>
                        <a href="https://www.instagram.com/yk1moss"><i className='bx bxl-instagram T2'></i></a>
                        <a href="https://github.com/Devdummyy"><i className='bx bxl-github T3'></i></a>
                        <a href="https://www.tiktok.com/@yk1moss?_t=8i7ePfNoJJY&_r=1"><i className='bx bxl-tiktok T4'></i></a>
                        <a href="https://soundcloud.com/user-980268968"><i className='bx bxl-soundcloud T5'></i></a>
                    </div>
                </div>

            </section>

            <section className="about contact" id="about">
            <div className="about-img">
                    <img src={Image2} alt="photo4" />
                </div>
                <div className="about-content">
                    <h2 className="heading text-center ">About<span>Me</span></h2>
                    <h3 className="fs-1 text-center"> Full Stack Deverloper</h3>
                    <p>Hello there! <br /> My name is Krittiphon Yoonaitham. l'm 19 years old. I'm from Bang pa han Ayutthaya. I'm currently pursuing the second years of Bachelor's degree in Computer Science at Kasetsart University Sriracha Campus. I have a passion for Coding Programming because it's fun. I am actively seeking a challenging internship opportunity in fields of Front-end , Back-end , Solfware Engineering and Wed Developer to acquire practical experience and propel my future career in these domains. 
                    </p>
                </div>
               
            </section>

            <section className="services" id="services">
                <h2 className="heading">Certi<span>ficate</span></h2>
        
            <div className="services-container">
                    <div className="services-box">
                        <i className="bx bx-code-alt"></i>
                        <h3>Font-End Developer</h3>
                        <p>I can create about Font-End Developers and create exactly what I have in mind.</p>
                        <button onClick={handleClick1} className="btn1  bi bi-box-arrow-in-up-right "> Readmore</button>
                    </div>
                    <div className="services-box">
                        <i className="bx bx-code-curly"></i>
                        <h3>Back-End Developer</h3>
                        <p>I can create about Back-End Developers and create exactly what I have in mind.</p>
                        <button onClick={handleClick2} className="btn1   bi bi-box-arrow-in-up-right"> Readmore</button>
                    </div>
                </div>
            </section>

            <section className="container1" id="skills">
                <h2 className="heading">My<span> Skills</span></h2>

                <div className="Technical-bar">
                    <h2 className="heading1">Technical<span> Skills</span></h2>
                    <div className="bar"><i style={{ color: '#ff4d00', }} className="bx bxl-html5 "></i>
                        <div className="indfo">
                            <span>HTML</span>
                        </div>
                        <div className="progress-line1 html">
                            <span></span>
                        </div>
                    </div><br />

                    <div className="bar"><i style={{ color: '#00ffff', }} className="bx bxl-css3"></i>
                        <div className="indfo">
                            <span>CSS</span>
                        </div>
                        <div className="progress-line1 css">
                            <span></span>
                        </div>
                    </div><br />
                    
                    <div className="bar"><i style={{ color: '#ffff00', }} className="bx bxl-javascript"></i>
                        <div className="indfo">
                            <span>Javascript</span>
                        </div>
                        <div className="progress-line1 javascript">
                            <span></span>
                        </div>
                    </div><br />

                    <div className="bar"><i style={{ color: 'sky', }} className="bx bxl-react"></i>
                        <div className="indfo">
                            <span>React</span>
                        </div>
                        <div className="progress-line1 css">
                            <span></span>
                        </div>
                    </div><br />

                    <div className="bar"><i style={{ color: '#f84444', }} className="bx bxl-java"></i>
                        <div className="indfo">
                            <span>Java</span>
                        </div>
                        <div className="progress-line1 java">
                            <span></span>
                        </div>
                    </div><br />

                    <div className="bar"><i style={{ color: '#0080ff', }} className="bx bxl-python"></i>
                        <div className="indfo">
                            <span>Python</span>
                        </div>
                        <div className="progress-line1 python">
                            <span></span>
                        </div>
                    </div><br />

                    <div className="bar"><i style={{ color: '#00ff84', }} className="bx bxl-c-plus-plus"></i>
                        <div className="indfo">
                            <span>C/C++</span>
                        </div>
                        <div className="progress-line1 c">
                            <span></span>
                        </div>
                    </div><br />

                    <div className="bar"><i style={{ color: '#c800ff', }} className="bx bxl-postgresql"></i>
                        <div className="indfo">
                            <span>Postgresql</span>
                        </div>
                        <div className="progress-line1 post">
                            <span></span>
                        </div>
                    </div><br />

                    <div className="contalner1">
                        <h2 className="heading1">Professional<span> Skills</span></h2>
                        <div className="radial-bars">
                            <div className="radial-bar">
                                <svg x="0px" y="0px" viewBox="0 0 200 200">
                                    <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                                    <circle className="path path-1" cx="100" cy="100" r="80"></circle>
                                </svg>
                                <div className="percentage">100%</div>
                                <div className="text text-center">Creativity</div>
                            </div>

                            <div className="radial-bar">
                                <svg x="0px" y="0px" viewBox="0 0 200 200">
                                    <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                                    <circle className="path path-2" cx="100" cy="100" r="80"></circle>
                                </svg>
                                <div className="percentage">80%</div>
                                <div className="text text-center">Communication</div>
                            </div>

                            <div className="radial-bar">
                                <svg x="0px" y="0px" viewBox="0 0 200 200">
                                    <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                                    <circle className="path path-3" cx="100" cy="100" r="80"></circle>
                                </svg>
                                <div className="percentage">80%</div>
                                <div className="text text-center">Problem Solving</div>
                            </div>

                            <div className="radial-bar">
                                <svg x="0px" y="0px" viewBox="0 0 200 200">
                                    <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                                    <circle className="path path-4" cx="100" cy="100" r="80"></circle>
                                </svg>
                                <div className="percentage">90%</div>
                                <div className="text text-center">Team Work</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="projects" id="projects">
                <span className="heading">Project</span>
                <div className="portfolio-container">
                    
                    <div className="portfolio-box">
                        <img src={Port1} alt="port1" />
                        <div className="portfolio-layer">
                            <h4 >Java Project</h4>
                            <p >I joined the Java Programming course with BorntoDev school.I self-learned how to set up PostgreSQL, establish a connection from my Java code, and execute SQL queries. I built the CheeseCake_Cafe project with JAVA and PostgreSQL. </p>
                            <a href="https://www.youtube.com/watch?v=bQ7pbJf0NUs&t=77s"><i className="bx bx-link-external hov-i"></i></a>
                        </div>

                    </div>

                    <div className="portfolio-box">
                        <img src={Port2} alt="port2" />
                        <div className="portfolio-layer">
                            <h4>C/C++ Project</h4>
                            <p>I joined the Zero To One : C Programming course with BorntoDev school.I wrote and run C code using the Replit's C online compiler & interpreter. Also I built the CakeCafe_C project with C code.</p>
                            <a href="https://www.youtube.com/watch?v=c3gxKG7UsSM"><i className="bx bx-link-external hov-i "></i> </a>
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <img src={Port3} alt="port3" />
                        <div className="portfolio-layer">
                            <h4>Game Roblox Project </h4>
                            <p>I created a Roblox Game Programming with Lua Language</p>
                            <a href="https://www.roblox.com/games/6401878474/DISCO-CYBER"><i className="bx bx-link-external hov-i"></i></a>
                        </div>
                    </div>
                </div>

            </section>

            <section className="contact" id="contact">
                <Contact />
            </section>
            
            <Theme />
            <Footer />
        </div>
    );
}


export default LandingPage;