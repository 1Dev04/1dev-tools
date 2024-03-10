import React, { useRef , useState } from 'react';
import emailJS from '@emailjs/browser';
import Swal from 'sweetalert2'

const Contact = () => {
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        if (!UserFull && !UserEmail && !UserMess) {
            
        const errorTxtFull = document.querySelector(".error-txt.full");
        const errorFull = document.querySelector(".input-field.field .item.i1");
        const errorTxtEmail = document.querySelector(".error-txt.email");
        const errorEmail = document.querySelector(" .input-field.field .item.i2");
        const errorTxtMess = document.querySelector(".error-txt.mess");
        const errorMess = document.querySelector(".textarea-field.field .item.i3");  
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fill in all required fields!"
                
            });
            errorFull.style.border = "2px solid red";
            errorTxtFull.innerText = "Full name should be entered.";
            errorTxtFull.style.display = "block";
            errorEmail.style.border = "2px solid red";
            errorTxtEmail.innerText = "Email should be entered.";
            errorTxtEmail.style.display = "block";
            errorMess.style.border = "2px solid red";
            errorTxtMess.innerText = "Message should be entered.";
            errorTxtMess.style.display = "block";
            return;
        }
        emailJS.sendForm('service_dummy182',
            'template_dumMy182',
            form.current, {
            publicKey: 'DqduoGdN6pczt_vxD',
        })
            .then((result) => {
                console.log("Success!", "Message sent successfully!", result.text);
                    Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: "Message sent successfully!"
                    });
            },
                (error) => {
                    console.log("Error!", "Failed to send message!", error.text);
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Failed to send message!"
                    });
                },
            );
    };
    
    const [UserFull, setUserFull] = useState('');
    const [UserMess , setUserMess] = useState('');
    
    const [UserEmail, setUserEmail] = useState('');
    
    //  Handle Full name Validations

    const handleFullchange = (event) => {
        var inputRegexF = /^[a-zA-Z\s]+$/;
        const inputFull = event.target.value;
        const errorTxtFull = document.querySelector(".error-txt.full");
        const errorFull = document.querySelector(".input-field.field .item.i1");
    
        if (inputRegexF.test(inputFull)) {
            setUserFull(inputFull);
            errorTxtFull.style.display = "none";
            errorFull.style.border = "2px solid #181718";
        } else if (inputFull === '' || inputFull === null) {
            setUserFull(inputFull);
            errorTxtFull.style.display = "block";
            errorFull.style.border = "2px solid red";
            errorTxtFull.innerText = "Full name should be entered.";
        } else {
            setUserFull(inputFull);
            errorTxtFull.style.display = "block";
            errorFull.style.border = "2px solid red";
            errorTxtFull.innerText = "Only English letters are allowed.";
        }
    };

    // Handle Email Validations

    const handleEmailchange = (event) => {
        var inputRegexE = /^[A-Za-z@.]+$/;
        const inputEmail = event.target.value;
        const errorTxtEmail = document.querySelector(".error-txt.email");
        const errorEmail = document.querySelector(".input-field.field .item.i2");
    
        if (inputRegexE.test(inputEmail)) {
            setUserEmail(inputEmail);
            errorTxtEmail.style.display = "none";
            errorEmail.style.border = "2px solid #181718";
        } else if (inputEmail === '' || inputEmail === null) {
            setUserEmail(inputEmail);
            errorTxtEmail.style.display = "block";
            errorEmail.style.border = "2px solid red";
            errorTxtEmail.innerText = "Email Address should be entered.";
        } else {
            setUserEmail(inputEmail);
            errorTxtEmail.style.display = "block";
            errorEmail.style.border = "2px solid red";
            errorTxtEmail.innerText = "Only A-Z, a-z, @, and . are allowed in the email.";
        }
    };

  

    //Handle Message Validations

    const handleMessChange = (event) => {
        var inputRegexM = /^[A-Za-zก-ฮ0-9\s.,!@#$%^&*()_+-=:;'"<>?{}`~]+$/;
        const inputMess = event.target.value;
        const errorTxtMess = document.querySelector(".error-txt.mess");
        const errorMess = document.querySelector(".textarea-field.field .item.i3");
    
        if (inputRegexM.test(inputMess)) {
           
            setUserMess(inputMess);
            errorTxtMess.style.display = "none";
            errorMess.style.border = "2px solid #181718";
        } else if (inputMess === '' || inputMess === null) {
            setUserMess(inputMess);
            errorTxtMess.style.display = "block";
            errorMess.style.border = "2px solid red";
            errorTxtMess.innerText = "Message should be entered.";
        } else {
            setUserMess(inputMess);
            errorTxtMess.style.display = "block";
            errorMess.style.border = "2px solid red";
            errorTxtMess.innerText = "Only A-Z, a-z, ก-ฮ, 0-9, and special characters are allowed in the message.";
        }
    };
  
    
    return (
           <div>
            <h2 className="heading">Contact <span>Me!</span></h2>
            <form ref={form} onSubmit={sendEmail}>
                <input type="hidden" name="access_key" value="f32ccc1d-a16d-4e75-a154-b3a87f654187" />
                <div className="input-box">
                    <div className="input-field field">
                        <input type="text" name="user_name" placeholder="Full Name" value={UserFull}  className="item i1" maxLength={35} autoComplete="off"   onChange={handleFullchange}  />
                        <div className="error-txt full">Full Name should be entered.</div>
                    </div>
                    <div className="input-field field">
                        <input type="email" name="user_email" placeholder="Email Address" value={UserEmail}  className="item i2" maxLength={40}  autoComplete="off"    onChange={handleEmailchange} />
                        <div className="error-txt email">Email Address should be entered.</div>
                    </div>
                </div>

                <div className="textarea-field field">
                    <textarea name="message" placeholder="Your Message" value={UserMess} className="item i3" cols="30" rows="10" maxLength={1000} autoComplete="off"    onChange={handleMessChange} ></textarea>
                    <div className="error-txt mess">message should be entered.</div>
                </div>

                <input type="submit" className="btn1" value="Confirm" />
            </form>

            <div className="social-media">
                <a href="https://www.linkedin.com/in/krittiphon-yoonaitham-a291482b1/"><i className='bx bxl-linkedin'></i></a>
            </div>
            </div>
    );
};

export default Contact;