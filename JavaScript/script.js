function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var typed = new Typed("#occupation", {
  strings: ["Front-End Developer", "Hardware Technician", "Network Technician"],
  typeSpeed: 70,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
  smartBackspace: true,
});
