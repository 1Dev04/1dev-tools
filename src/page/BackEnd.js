import React from "react";
import { Link } from "react-router-dom";
import java from "../asset/certificate/backend/Java.jpg";
import C from "../asset/certificate/backend/C.jpg";
import Golang from "../asset/certificate/backend/Golang.png";


import "../customCSS/index.css";

function BackEnd(){
    return (
        <div className="backend">

            <div className=" footer foot-color p-2 fixed-top box">
                <div className="container-fluid">
                    <div
                        to="#"
                        className="bi bi-box-fill navbar-brand  navbar-brand rounded  fs-1"
                    >
                        {" "}
                        Back-End-Diary
                    </div>
                </div>
            </div>


            <section
                className=" container-fluid  py-4"
                id="showtime">
                <h1 className="text-7xl text-center bg-clip-text  m-5 p-5">Certificate</h1>

                
                <div className="row justify-content-center  m-5 p-2">
                    <div className=" m-4 col-lg-4 col-md-5 col-sm-7 img-thumbnail m-2 bg-transparent box1">
                        <img
                            src={java}
                            className=" card-img-top bg-origin-content p-2 "
                            alt="Backend"
                        />
                        
                        <div className="card-body m-2 font-text2">
                            <h5 className="h5 text-center  card-title text-4xl">
                                Java Programming
                            </h5>

                            <div className="overscroll-auto text-2xl text-center  ">
                                <br />
                                <div className="overscroll-none" >
                                    I joined the Java Programming course with Born to Dev school.I
                                    self-learned how to set up PostgreSQL, establish a connection
                                    from my Java code, and execute SQL queries. I built the
                                    CheeseCake_Cafe project with JAVA and PostgreSQL.
                                </div>
                            </div>
                            <br />
                        
                           
                        </div>


                    </div>


                    <div className=" m-4 col-lg-4 col-md-5 col-sm-7 img-thumbnail m-2 bg-transparent box1">
                        <img
                            src={C}
                            className=" card-img-top bg-origin-content p-2 "
                            alt="Backend"
                        />
                        <div className="card-body m-2 font-text2">
                            <h5 className="h5 text-center  card-title text-4xl">
                                C Programming
                            </h5>

                            <div className="overscroll-auto text-2xl text-center  ">
                                <br />
                                <div className="overscroll-none">
                                    I joined the Zero To One : C Programming course with Born to Dev school.I wrote and run C code using the Replit C online compiler & interpreter. Also I built the CakeCafe_C project with C     code.
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>

                   
                    <div className=" m-4 col-lg-4 col-md-5 col-sm-7 img-thumbnail m-2 bg-transparent box1">
                        <img
                            src={Golang}
                            className=" card-img-top bg-origin-content p-2 "
                            alt="Backend"
                        />
                        <div className="card-body m-2 font-text2">
                            <h5 className="h5 text-center  card-title text-4xl">
                                Ultimate Golang Backend
                            </h5>

                            <div className="overscroll-auto text-2xl text-center  "> 
                                <br />
                                <div className="overscroll-none">
                                    I joined the Golang : Golang course with Udemy.
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>




                </div>
            </section>
            <footer className="footer foot-color  p-2 fixed-bottom box">
                <Link
                    className="bi bi-box-arrow-in-left size-16 navbar-brand rounded  fs-1 "
                    to="/#home" 
                >
                    
                    
                    Back
                </Link>
            </footer>
        </div>
    );
};

export default BackEnd;