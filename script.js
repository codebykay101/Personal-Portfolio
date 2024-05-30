var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

/* Mobile Device Menu Function */
var sidemeu = document.getElementById("sidemenu");

function openmenu() {
  sidemeu.style.right = "0";
}
function closemenu() {
  sidemeu.style.right = "-200px";
}

/* Contact Form submittion function */
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyut9ZeCUsWhQjRMCeBMzz3pq8Aso4jiiiBUZylMsGMZYEG-qTYQijeqsXbQ8rzSUxf0A/exec";
const form = document.forms["sumbit-to-google-sheet"];
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      message.innerHTML = "Message sent successfully";
      setTimeout(function () {
        message.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

/* Header Text Animation Function */
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "UI/UX Designer", "Software Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
