// Header Navigation

const navShowBtn = document.querySelector("#hamburg");
const navCloseBtn = document.querySelector("#close");
const navigation = document.querySelector("header nav ul");

navShowBtn.addEventListener("click", (e) => {
  navShowBtn.classList.add("hidden");
  navCloseBtn.classList.remove("hidden");
  navigation.classList.add("nav-show");
  navigation.classList.remove("navigation");
});

navCloseBtn.addEventListener("click", (e) => {
  navCloseBtn.classList.add("hidden");
  navShowBtn.classList.remove("hidden");
  navigation.classList.remove("nav-show");
  navigation.classList.add("navigation");
});

var typed = new Typed("#occupation", {
  strings: [
    "Front-End Web Developer",
    "Hardware Technician",
    "Network Technician",
  ],
  typeSpeed: 70,
  backSpeed: 50,
  Delay: 20,
  loop: true,
});
