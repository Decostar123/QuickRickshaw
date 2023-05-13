console.log(" driver dashboard ");
const passengerList = document.querySelector("#passengerList");
const DAvailable = document.querySelector("#DAvailable");
const DNotAvailable = document.querySelector("#DNotAvailable");

const PASSENGER_URL = "http://localhost:3000/driver/passengerList";
const DAvailable_URL = "http://localhost:3000/driver/DAvailable";
const DNotAvailable_URL = "http://localhost:3000/driver/DNotAvailable";
const DASHBOARD_URL = "http://localhost:3000/driver/dDashBoard ";
// const PASSENGER_URL =
//   "https://quickrickshaws.onrender.com/driver/passengerList";
// const DAvailable_URL = "https://quickrickshaws.onrender.com/driver/DAvailable";
// const DNotAvailable_URL =
//   "https://quickrickshaws.onrender.com/driver/DNotAvailable";

// const link=document.getElementById("link");
// link.addEventListener("click",(e)=>{
//   e.preventDefault();
//   alert("hi");
//   window.location.href = DASHBOARD_URL;
// });

passengerList.addEventListener("click", () => {
  window.open(PASSENGER_URL);
});
DAvailable.addEventListener("click", () => {
  fetch(DAvailable_URL)
    .then((res) => res.json())
    .then((data) => {
      alert("marked Available ");
      console.log(data);
      if (data.key) {
        alert("marked available");
      } else {
        alert(" some error occured ! try latr ");
      }
    });
});
DNotAvailable.addEventListener("click", () => {
  console.log(" driver is not Available ");
  fetch(DNotAvailable_URL)
    .then((res) => res.json())
    .then((data) => {
      //   alert("marked not Available ");
      console.log(data);
      if (data.key) {
        alert("marked not available");
      } else {
        alert(" some error occured ! try latr ");
      }
    });
});
