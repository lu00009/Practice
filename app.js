let email = document.getElementById("emailplace").value;
let password = document.getElementById("passwordplace").value;
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
function validateEmail() {
  const email = document.getElementById("emailplace").value;
  const text1 = document.getElementById("text1");
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (regex.test(email)) {
    text1.innerHTML = "Valid email";
    text1.style.color = "rgb(0,128,0)";
  } else {
    text1.innerHTML = "Invalid email";
    text1.style.color = "rgb(128,0,0)";
  }
}

function validatePassword() {
  const password = document.getElementById("passwordplace").value;
  const text2 = document.getElementById("text2");
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

  if (regex.test(password)) {
    text2.innerHTML = "Valid password";
    text2.style.color = "rgb(0,128,0)"; // Green color for valid
  } else {
    text2.innerHTML = "Invalid password";
    text2.style.color = "rgb(128,0,0)"; // Red color for invalid
  }
}
