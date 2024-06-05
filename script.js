function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let certificateRef = document.querySelector(".certificate-btn");
let profileRef = document.getElementById("profile");
let aboutRef = document.getElementById("about");
let experienceRef = document.getElementById("experience");
let projectsRef = document.getElementById("projects");
let certificatesSection = document.getElementById("certificates");
let logoRef = document.querySelector(".logo");
let navLinks = document.querySelectorAll(".nav-links a");
let menuLinks = document.querySelectorAll('.menu-links a')

certificateRef.addEventListener("click", showCertificate);

function showCertificate() {
  profileRef.style.display = "none";
  aboutRef.style.display = "none";
  experienceRef.style.display = "none";
  projectsRef.style.display = "none";
  certificatesSection.style.display = "block";

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

logoRef.addEventListener("click", showMain);

function showMain() {
  certificatesSection.style.display = "none";
  profileRef.style.display = "flex";
  aboutRef.style.display = "block";
  experienceRef.style.display = "block";
  projectsRef.style.display = "block";
}

navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    certificatesSection.style.display = "none";
    profileRef.style.display = "flex";
    aboutRef.style.display = "block";
    projectsRef.style.display = "block";
    experienceRef.style.display = "block"
  });
});

menuLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    certificatesSection.style.display = "none";
    profileRef.style.display = "block";
    aboutRef.style.display = "block";
    projectsRef.style.display = "block";
    experienceRef.style.display = "block"
  });
});
