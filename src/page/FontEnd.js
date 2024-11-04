import React from "react";
import { Link } from "react-router-dom";
import powerBi from "../asset/certificate/frontend/powerBi.jpg";
import GoogleC from "../asset/certificate/frontend/GoogleC.png";
import Reacts from "../asset/certificate/frontend/React.png";


import "../customCSS/index.css";

function FontEnd() {
    return (
        <div className="frontend">
            <div className=" footer foot-color  p-2 fixed-top box ">
                <div className="container-fluid">
                    <div className="bi bi-box-fill navbar-brand  navbar-brand rounded  fs-1" to="">
                        {" "}
                        Front-End-Diary
                    </div>
                </div>
            </div>

            <section
                className=" container-fluid  py-4 "
                id="showtime">
                <h1 className="text-7xl text-center bg-clip-text   m-5 p-5">Certificate</h1>
                <div className="row flex justify-center m-5 p-2">

                    <div className=" m-4 col-lg-4 col-md-5 col-sm-7 img-thumbnail m-2 bg-transparent box1">
                        <img
                            src={Reacts}
                            className=" card-img-top bg-origin-content p-2 "
                            alt="Frontend"
                        />
                        <div className="card-body m-2 font-text2">
                            <h5 className="h5 text-center  card-title text-4xl">
                                Basic React
                            </h5>

                            <div className="overscroll-auto text-2xl text-center  ">
                                <br />
                                <div className="overscroll-none" >
                                    I completed the  Basic React training of the project to
                                    enhance digital skills for students.
                                </div>
                            </div>
                            <br />

                        </div>
                    </div>

                    <div className=" m-4 col-lg-4 col-md-5 col-sm-7 img-thumbnail m-2 bg-transparent box1">
                        <img
                            src={powerBi}
                            className=" card-img-top bg-origin-content p-2 "
                            alt="Frontend"
                        />
                        <div className="card-body m-2 font-text2">
                            <h5 className="h5 text-center  card-title text-4xl">
                                Power BI
                            </h5>

                            <div className="overscroll-auto text-2xl text-center  ">
                                <br />
                                <div className="overscroll-none" >
                                    I completed the Power Bi basic training of the project to
                                    enhance digital skills for students.
                                </div>
                            </div>
                            <br />


                        </div>

                    </div>

                    <div className=" m-4 col-lg-4 col-md-5 col-sm-7 img-thumbnail m-2 bg-transparent box1">
                        <img
                            src={GoogleC}
                            className=" card-img-top bg-origin-content p-2 "
                            alt="Frontend"
                        />
                        <div className="card-body m-2 font-text2">
                            <h5 className="h5 text-center  card-title text-4xl">
                                Cloud API
                            </h5>

                            <div className="overscroll-auto text-2xl text-center  ">
                                <br />
                                <div className="overscroll-none" >
                                    I completed the Cloud API training of the project to
                                    enhance digital skills for students.
                                </div>
                            </div>
                            <br />

                        </div>
                    </div>



                </div>
            </section>
            <footer className="footer foot-color  p-2 fixed-bottom box">
                <Link className="bi bi-box-arrow-in-left size-16 navbar-brand rounded   fs-1" to="/#home">  Back
                </Link>
            </footer>
        </div>
    );
};

export default FontEnd;