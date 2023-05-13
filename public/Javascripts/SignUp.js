const Driver_Signup = "http://localhost:3000/driver/signup";
const User_Signup = "http://localhost:3000/user/signup";
// const Driver_Signup = "https://quickrickshaws.onrender.com/driver/signup";
// const User_Signup = "https://quickrickshaws.onrender.com/user/signup";
const passenger = document.getElementById("passenger");
passenger.addEventListener("click", function () {
  const rickshaw = document.querySelector("#rickshawNo");
  rickshaw.style.display = "none";
  console.log(passenger.checked);
  console.log(driver.checked);
});
const driver = document.getElementById("driver");
// const passenger = document.getElementById("passenger");
driver.addEventListener("click", function () {
  const rickshaw = document.querySelector("#rickshawNo");
  rickshaw.style.display = "block";
});
// const check = driver.checked;
// console.log(" CHECHKED", check);
const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const check = driver.checked;
  console.log(" CHECHKED", check);
  const type = document.querySelector(".type").value;
  const name = document.querySelector("#name").value;
  const password = document.querySelector("#password").value;
  const email = document.querySelector("#email").value;
  const phoneNo = document.querySelector("#phone").value;
  const error = document.querySelector("#error");
  const rickshawNo =
    check === true ? document.querySelector("#rickshaw").value : "XYZ";
  console.log("$$$$", name, password, email, phoneNo, rickshawNo);
  // const a = name.value;
  //Data Validation
  const nameregex=/^[a-zA-Z]*$/;
  const emailreg=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const mobilereg=/^[1-9][0-9]{9}$/;
  const passreg=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const rickshawreg=/^[A-Z]{2}[0-9]{2}[A-Z]{0,3}[1-9][0-9]{0,3}$/
  const passspec="password must contain Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
  if(name.length==0){
    error.innerHTML="Name is Reqired field.";
  }
  else if(!nameregex.test(name)){
    error.innerHTML="Please enter valid name.";
  }
  else if(!emailreg.test(email)){
    error.innerHTML="Please enter valid email address.";
  }
  else if(!mobilereg.test(phoneNo)){
    error.innerHTML="Please enter valid mobile number.";
  }
  else if(!passreg.test(password)){
    error.innerHTML="Please enter valid password.";
    error.innerHTML=error.innerHTML+"<br><p style='font-size:3vh;'>"+passspec+"</p>";

  }
  else if(check && !rickshawreg.test(rickshawNo)){
    error.innerHTML="Please enter valid rickshaw number.";
   

  }

  
  //Data Validation
  else{
    error.innerHTML="";
    const data = { name, password, email, phoneNo, rickshawNo };
    console.log("---", name);
    console.log(data);
  //   http://localhost:3000/driver/signup
    const SIGNUP_URL = check === true ? Driver_Signup : User_Signup;
    console.log("SIGBUPURL", SIGNUP_URL);
    const LOGIN_URL = "http://localhost:3000 ";

    fetch(SIGNUP_URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("+++++", data.key);

        if (data.key) {
          console.log(" Got true ");
          window.open(LOGIN_URL);
        } else {
          console.log(" got false ");
          // window.open(LOGIN_URL);
          // window.location = LOGIN_URL;
          alert("User already Exist");
        // window.open(LOGIN_URL);
        }
      // else {
      //   console.log(" hi ");
      // }
    })
    .catch((err) => console.log(err));
  }

  // const xhr = new XMLHttpRequest();
  // xhr.open("POST", SIGNUP_URL);
  // xhr.responseType = "json";
  // xhr.setRequestHeader("Content-Type", "application/json");

  // xhr.onload = (e) => {
  //   console.log(e);
  // };
  // xhr.withCredentials = true;
  // xhr.send(JSON.stringify(data));
});

