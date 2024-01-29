const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("sub");
const mess = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}
  <br> Email: ${email.value}<br> 
  Phone Number: ${phone.value}<br> 
  Subject: ${subject.value}<br>
  Message: ${mess.value}`;

  Email.send({
    SecureToken: "f8b5221f-1962-4c56-b5dd-d48f05ac02bd",
    Host: "smtp.elasticemail.com",
    Username: "krittiphon.yoon@gmail.com",
    Password: "AE5EAA90AEDA63A82B3A32259964D3553897",
    To: "krittiphon.yoon@gmail.com",
    From: "krittiphon.yoon@gmail.com",
    Subject: subject.value,
    Body: bodyMessage
  }).then((message) => {
    console.log("Email.send result:", message);

    if (message === "OK") {
      Swal.fire("Success!", "Message sent successfully!", "success");
    } else {
      Swal.fire("Error!", "Failed to send message.", "error");
    }
  });
}

function checkInputs() {
  const items = document.querySelectorAll(".item");

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

  


    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

function validateInput(input) {
  const errorTxtFull = document.querySelector(".error-txt.full");
  const error = document.querySelector(".input-field.field .item.i1");
  if (/[^A-Za-z0-9]/.test(input.value)) {
    errorTxtFull.style.display = "block";
    error.style.border = "2px solid red";
    errorTxtFull.innerText = "Subject can't be blank";
    input.value = input.value.replace(/[^A-Za-z0-9]/g, "");
  } else if (input.value == "") {
    errorTxtFull.style.display = "block";
    error.style.border = "2px solid red";
    errorTxtFull.innerText = "Subject should be entered.";
  } else {
    errorTxtFull.innerText = "Subject can't be blank";
    errorTxtFull.style.display = "none";
    error.style.border = "2px solid #232a2e";
  }
}

function validateInput1(input) {
  const errorTxtemail = document.querySelector(".error-txt.email");
  const error = document.querySelector(".input-field.field .item.i2");
  if (/[^A-Za-z0-9@.com ]/.test(input.value)) {
    errorTxtemail.style.display = "block";
    error.style.border = "2px solid red";
    errorTxtemail.innerText = "Email Address can't be blank";
    input.value = input.value.replace(/[^A-Za-z0-9@.com ]/g, "");
  } else if ((input.value.match(/@/g) || []).length > 1) {
    input.value = input.value.replace(/@/g, "");
    errorTxtemail.style.display = "block";
    error.style.border = "2px solid red";
    errorTxtemail.innerText = "Enter @, limited to 1 digit.";
  } else if (input.value == "") {
    errorTxtemail.style.display = "block";
    error.style.border = "2px solid red";
    errorTxtemail.innerText = "Email Address should be entered.";
  } else {
    errorTxtemail.innerText = "Email Address can't be blank";
    errorTxtemail.style.display = "none";
    error.style.border = "2px solid #232a2e";
  }
}

function validateInput2(input) {
  const errorTxtphon = document.querySelector(".error-txt.phon");
  const error = document.querySelector(".input-field.field .item.i3");
  if (/[^0-9]/.test(input.value)) {
    errorTxtphon.style.display = "block";
    error.style.border = "2px solid red";
    errorTxtphon.innerText = "Email Address should be entered.";
    input.value = input.value.replace(/[^0-9]/g, "");
  } else if ((input.value.match(/0/g) || []).length > 5) {
    input.value = input.value.replace(/0/g, "");
    errorTxtphon.style.display = "block";
    error.style.border = "2px solid red";
    errorTxtphon.innerText = "Enter 0 , limited 5 digits.";
  } else if ((input.value.match(/1/g) || []).length > 5) {
    input.value = input.value.replace(/1/g, "");
    errorTxtphon.style.display = "block";
    error.style.border = "2px solid red";
    errorTxtphon.innerText = "Enter 1 , limited 5 digits.";
  } else if ((input.value.match(/2/g) || []).length > 5) {
    input.value = input.value.replace(/2/g, "");
    errorTxtphon.style.display = "block";
    error.style.border = "2px solid red";
    errorTxtphon.innerText = "Enter 2 , limited 5 digits.";
  } else if ((input.value.match(/3/g) || []).length > 5) {
    input.value = input.value.replace(/3/g, "");
    errorTxtphon.style.display = "block";
    error.style.border = "2px solid red";
    errorTxtphon.innerText = "Enter 3 , limited 5 digits.";
  } else if ((input.value.match(/4/g) || []).length > 5) {
    input.value = input.value.replace(/4/g, "");
    errorTxtphon.style.display = "block";
    error.style.border = "2px solid red";
    errorTxtphon.innerText = "Enter 4 , limited 5 digits.";
  } else if ((input.value.match(/5/g) || []).length > 5) {
    input.value = input.value.replace(/5/g, "");
    errorTxtphon.style.display = "block";
    error.style.border = "2px solid red";
    errorTxtphon.innerText = "Enter 5 , limited 5 digits.";
  } else if ((input.value.match(/6/g) || []).length > 5) {
    input.value = input.value.replace(/6/g, "");
    errorTxtphon.style.display = "block";
    error.style.border = "2px solid red";
    errorTxtphon.innerText = "Enter 6 , limited 5 digits.";
  } else if ((input.value.match(/7/g) || []).length > 5) {
    input.value = input.value.replace(/7/g, "");
    errorTxtphon.style.display = "block";
    error.style.border = "2px solid red";
    errorTxtphon.innerText = "Enter 7 , limited 5 digits.";
  } else if ((input.value.match(/8/g) || []).length > 5) {
    input.value = input.value.replace(/8/g, "");
    errorTxtphon.style.display = "block";
    error.style.border = "2px solid red";
    errorTxtphon.innerText = "Enter 8 , limited 5 digits.";
  } else if (input.value == "") {
    errorTxtgmail.style.display = "block";
    error.style.border = "2px solid red";
    errorTxtgmail.innerText = "Phone Number should be entered.";
  }else {
    errorTxtphon.style.display = "none";
    error.style.border = "2px solid #232a2e";
  }
}

function validateInput3(input) {
  const errorTxtsub = document.querySelector(".error-txt.subb");
  const error = document.querySelector(".input-field.field .item.i4");
  if (/[^A-Za-z0-9]/.test(input.value)) {
    errorTxtsub.style.display = "block";
    error.style.border = "2px solid red";
    errorTxtsub.innerText = "Subject can't be blank";
    input.value = input.value.replace(/[^A-Za-z0-9]/g, "");
  } else if (input.value == "") {
    errorTxtsub.style.display = "block";
    error.style.border = "2px solid red";
    errorTxtsub.innerText = "Subject should be entered.";
  } else {
    errorTxtsub.innerText = "Subject can't be blank";
    errorTxtsub.style.display = "none";
    error.style.border = "2px solid #232a2e";
  }
}

function validateInput4(input) {
  const errorTxtmess = document.querySelector(".error-txt.mess");
  const error = document.querySelector(".textarea-field.field .item.i5");
  if (input.value == "") {
    errorTxtmess.style.display = "block";
    error.style.border = "2px solid red";
    errorTxtmess.innerText = "Message should be entered.";
  } else if (input.value.length > 1000) {
    input.value = input.value.substring(0, 1000);
    errorTxtmess.style.display = "block";
    error.style.border = "2px solid red";
    errorTxtmess.innerText = `Message is limited to ${1000} characters.`;
  } else {
    errorTxtmess.style.display = "none";
    error.style.border = "2px solid #232a2e";
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkInputs();
  if (
    !fullName.classList.contains("error") &&
    !email.classList.contains("error") &&
    !phone.classList.contains("error") &&
    !subject.classList.contains("error") &&
    !mess.classList.contains("error")
  ) {
   
    sendEmail();
    console.log("yes")
    form.reset();
    return false;
  }
});
