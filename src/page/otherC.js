import React from "react";
import { Link } from "react-router-dom";

import A1 from "../asset/certificate/other/A1.png";
import A2 from "../asset/certificate/other/A2.png";
import A3 from "../asset/certificate/other/A3.png";
import A4 from "../asset/certificate/other/A4.png";
import A5 from "../asset/certificate/other/A5.png";
import A6 from "../asset/certificate/other/A6.png";
import A7 from "../asset/certificate/other/A7.png";
import A8 from "../asset/certificate/other/A8.png";
import A9 from "../asset/certificate/other/A9.png";
import A10 from "../asset/certificate/other/A10.png";
import A11 from "../asset/certificate/other/A11.png";
import A12 from "../asset/certificate/other/A12.png";
import A13 from "../asset/certificate/other/A13.png";
import link from "../asset/certificate/other/Link.jpg";
import Hack from "../asset/certificate/other/Hack.png";
import Fusion from "../asset/certificate/other/Fusion.jpg";

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
                        Other-ones-Diary
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
                            src={Fusion}
                            className=" card-img-top bg-origin-content p-2 "
                            alt="00"
                        />
                        <div className="card-body m-2 font-text2">
                            <h5 className="h5 text-center  card-title text-4xl">
                                Hackathon
                            </h5>

                            <div className="overscroll-auto text-2xl text-center  ">
                                <br />
                                <div className="overscroll-none">
                                    ICP Hub Thailand : Chain Fusion Hacker House
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>

                    <div className=" m-4 col-lg-4 col-md-5 col-sm-7 img-thumbnail m-2 bg-transparent box1">
                        <img
                            src={Hack}
                            className=" card-img-top bg-origin-content p-2 "
                            alt="00"
                        />
                        <div className="card-body m-2 font-text2">
                            <h5 className="h5 text-center  card-title text-4xl">
                                Hackathon
                            </h5>

                            <div className="overscroll-auto text-2xl text-center  ">
                                <br />
                                <div className="overscroll-none">
                                    Hack to the Max : Digital Infrastructure
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>

                    <div className=" m-4 col-lg-4 col-md-5 col-sm-7 img-thumbnail m-2 bg-transparent box1">
                        <img
                            src={link}
                            className=" card-img-top bg-origin-content p-2 "
                            alt="00"
                        />
                        <div className="card-body m-2 font-text2">
                            <h5 className="h5 text-center  card-title text-4xl">
                            Link American Standard
                            </h5>

                            <div className="overscroll-auto text-2xl text-center  ">
                                <br />
                                <div className="overscroll-none">
                                I completed the Link : Network Cabling for Engineering
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>


                    <div className=" m-4 col-lg-4 col-md-5 col-sm-7 img-thumbnail m-2 bg-transparent box1">
                        <img
                            src={A1}
                            className=" card-img-top bg-origin-content p-2 "
                            alt="other ones"
                        />
                        <div className="card-body m-2 font-text2">
                            <h5 className="h5 text-center  card-title text-4xl">
                            Generative AI และ ChatGPT ทำงานอย่างไร?
                            </h5>

                            <div className="overscroll-auto text-2xl text-center  ">
                                <br />
                                <div className="overscroll-none">
                                Course instructors : อ. ดร.เอกพล ช่วงสุวนิช
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>

                    <div className=" m-4 col-lg-4 col-md-5 col-sm-7 img-thumbnail m-2 bg-transparent box1">
                        <img
                            src={A2}
                            className=" card-img-top bg-origin-content p-2 "
                            alt="other ones"
                        />
                        <div className="card-body m-2 font-text2">
                            <h5 className="h5 text-center  card-title text-4xl">
                            ChatGPT ช่วยทำวิจัยได้ไม่ต้องเหนื่อยแทบตาย (ในทุกขั้นตอน)
                            </h5>

                            <div className="overscroll-auto text-2xl text-center  ">
                                <br />
                                <div className="overscroll-none">
                                Course instructors : รศ. ดร.วิโรจน์ อรุณมานะกุล
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>

                    <div className=" m-4 col-lg-4 col-md-5 col-sm-7 img-thumbnail m-2 bg-transparent box1">
                        <img
                            src={A3}
                            className=" card-img-top bg-origin-content p-2 "
                            alt="other ones"
                        />
                        <div className="card-body m-2 font-text2">
                            <h5 className="h5 text-center  card-title text-4xl">
                            แท็กติกการสอนในยุคคิดอะไรไม่ออกบอก ChatGPT
                            </h5>

                            <div className="overscroll-auto text-2xl text-center  ">
                                <br />
                                <div className="overscroll-none">
                                Course instructors : ศ. ดร.จินตวีร์ คล้ายสังข์
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>

                    <div className=" m-4 col-lg-4 col-md-5 col-sm-7 img-thumbnail m-2 bg-transparent box1">
                        <img
                            src={A4}
                            className=" card-img-top bg-origin-content p-2 "
                            alt="other ones"
                        />
                        <div className="card-body m-2 font-text2">
                            <h5 className="h5 text-center  card-title text-4xl">
                            ChatGPT กับเศรษฐกิจยุคใหม่เหนื่อยน้อยลง เเต่ได้ผลมากขึ้น
                            </h5>

                            <div className="overscroll-auto text-2xl text-center  ">
                                <br />
                                <div className="overscroll-none">
                                Course instructors : ผศ. ดร.วรประภา นาควัชระ
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>

                    <div className=" m-4 col-lg-4 col-md-5 col-sm-7 img-thumbnail m-2 bg-transparent box1">
                        <img
                            src={A5}
                            className=" card-img-top bg-origin-content p-2 "
                            alt="other ones"
                        />
                        <div className="card-body m-2 font-text2">
                            <h5 className="h5 text-center  card-title text-4xl">
                            เขียนโค้ดคู่กับ AI เสร็จไว + ไม่ตกเทรนด์
                            </h5>

                            <div className="overscroll-auto text-2xl text-center  ">
                                <br />
                                <div className="overscroll-none">
                                Course instructors : ผศ. ดร.ฑิตยา หวานวารี
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>

                    <div className=" m-4 col-lg-4 col-md-5 col-sm-7 img-thumbnail m-2 bg-transparent box1">
                        <img
                            src={A6}
                            className=" card-img-top bg-origin-content p-2 "
                            alt="other ones"
                        />
                        <div className="card-body m-2 font-text2">
                            <h5 className="h5 text-center  card-title text-4xl">
                            เย่! ไม่ต้องเรียน Python เเล้ว (หรือเปล่านะ) มี ChatGPT เเล้วนี่นา
                            </h5>

                            <div className="overscroll-auto text-2xl text-center  ">
                                <br />
                                <div className="overscroll-none">
                                Course instructors : ผศ. ดร.สุกรี สินธุภิญโญ <br></br> รศ. ดร.วีระ เหมืองสิน <br></br> ผศ. ดร.นัทที นิภานันท์
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>

                    <div className=" m-4 col-lg-4 col-md-5 col-sm-7 img-thumbnail m-2 bg-transparent box1">
                        <img
                            src={A7}
                            className=" card-img-top bg-origin-content p-2 "
                            alt="00"
                        />
                        <div className="card-body m-2 font-text2">
                            <h5 className="h5 text-center  card-title text-4xl">
                            ChatGPT ถอยไปมาปล่อยพลัง AI ด้วย MICROSOFT x GPT4
                            </h5>

                            <div className="overscroll-auto text-2xl text-center  ">
                                <br />
                                <div className="overscroll-none">
                                Course instructors : คุณโอม ศิวะดิตถ์
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>

                    <div className=" m-4 col-lg-4 col-md-5 col-sm-7 img-thumbnail m-2 bg-transparent box1">
                        <img
                            src={A8}
                            className=" card-img-top bg-origin-content p-2 "
                            alt="00"
                        />
                        <div className="card-body m-2 font-text2">
                            <h5 className="h5 text-center  card-title text-4xl">
                            การสอนในยุค AI จะเกิดอะไรขึ้น เมื่ออาจารย์ใช้ออกข้อสอบและเด็กใช้ทำข้อสอบ
                            </h5>

                            <div className="overscroll-auto text-2xl text-center  ">
                                <br />
                                <div className="overscroll-none">
                                Course instructors : Dr.Virot "TA" Chiraphadhanakul
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>

                    <div className=" m-4 col-lg-4 col-md-5 col-sm-7 img-thumbnail m-2 bg-transparent box1">
                        <img
                            src={A9}
                            className=" card-img-top bg-origin-content p-2 "
                            alt="00"
                        />
                        <div className="card-body m-2 font-text2">
                            <h5 className="h5 text-center  card-title text-4xl">
                            Visual Storytelling with Ai
                            </h5>

                            <div className="overscroll-auto text-2xl text-center  ">
                                <br />
                                <div className="overscroll-none">
                                Course instructors : ตุลย์ เล็กอุทัย <br></br> อ.วรรษยุต คงจันทร์
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>

                    <div className=" m-4 col-lg-4 col-md-5 col-sm-7 img-thumbnail m-2 bg-transparent box1">
                        <img
                            src={A10}
                            className=" card-img-top bg-origin-content p-2 "
                            alt="00"
                        />
                        <div className="card-body m-2 font-text2">
                            <h5 className="h5 text-center  card-title text-4xl">
                            ประเด็นจริยธรรมของ ChatGPT ที่ควรใส่ใจ
                            </h5>

                            <div className="overscroll-auto text-2xl text-center  ">
                                <br />
                                <div className="overscroll-none">
                                Course instructors : รศ. ดร.ศิรประภา ชวะนะญาณ
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>

                    <div className=" m-4 col-lg-4 col-md-5 col-sm-7 img-thumbnail m-2 bg-transparent box1">
                        <img
                            src={A11}
                            className=" card-img-top bg-origin-content p-2 "
                            alt="00"
                        />
                        <div className="card-body m-2 font-text2">
                            <h5 className="h5 text-center  card-title text-4xl">
                            การเงินกับ AI สองเรื่องใกล้ตัวในชีวิตประจำวัน
                            </h5>

                            <div className="overscroll-auto text-2xl text-center  ">
                                <br />
                                <div className="overscroll-none">
                                Course instructors : รศ. ดร.คณิสร์ แสงโชติ
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>

                    <div className=" m-4 col-lg-4 col-md-5 col-sm-7 img-thumbnail m-2 bg-transparent box1">
                        <img
                            src={A12}
                            className=" card-img-top bg-origin-content p-2 "
                            alt="00"
                        />
                        <div className="card-body m-2 font-text2">
                            <h5 className="h5 text-center  card-title text-4xl">
                            AI กับการตลาด 6.0: เปลี่ยนและปรับอะไรในสังคม
                            </h5>

                            <div className="overscroll-auto text-2xl text-center  ">
                                <br />
                                <div className="overscroll-none">
                                Course instructors : ผศ. ดร.เอกก์ ภทรธนกุล
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>

                    <div className=" m-4 col-lg-4 col-md-5 col-sm-7 img-thumbnail m-2 bg-transparent box1">
                        <img
                            src={A13}
                            className=" card-img-top bg-origin-content p-2 "
                            alt="00"
                        />
                        <div className="card-body m-2 font-text2">
                            <h5 className="h5 text-center  card-title text-4xl">
                            การปรับตัวใช้เครื่องมือ GenAI เพื่อผลลัพธ์ที่ดีกว่า
                            </h5>

                            <div className="overscroll-auto text-2xl text-center  ">
                                <br />
                                <div className="overscroll-none">
                                Course instructors : ดร.อวิรุทธ์ ฉัตรมาลาทอง
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