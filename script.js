function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// let certificateRef = document.querySelector(".certificate-btn");
// let profileRef = document.getElementById("profile");
// let aboutRef = document.getElementById("about");
// let experienceRef = document.getElementById("experience");
// let projectsRef = document.getElementById("projects");
// let certificatesSection = document.getElementById("certificates");
// let logoRef = document.querySelector(".logo");
// let logoHamRef = document.querySelector(".logo-ham");
// let navLinks = document.querySelectorAll(".nav-links a");
// let menuLinks = document.querySelectorAll('.menu-links a')

// certificateRef.addEventListener("click", showCertificate);

// function showCertificate() {
//   profileRef.style.display = "none";
//   aboutRef.style.display = "none";
//   experienceRef.style.display = "none";
//   projectsRef.style.display = "none";
//   certificatesSection.style.display = "block";

//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// }

// logoRef.addEventListener("click", showMain);

// function showMain() {
//   certificatesSection.style.display = "none";
//   profileRef.style.display = "flex";
//   aboutRef.style.display = "block";
//   experienceRef.style.display = "block";
//   projectsRef.style.display = "block";
// }

// logoHamRef.addEventListener("click", showMainMobile)

// function showMainMobile() {
//   certificatesSection.style.display = "none";
//   profileRef.style.display = "block";
//   aboutRef.style.display = "block";
//   experienceRef.style.display = "block";
//   projectsRef.style.display = "block";
// }

// navLinks.forEach((link) => {
//   link.addEventListener("click", function (event) {
//     certificatesSection.style.display = "none";
//     profileRef.style.display = "flex";
//     aboutRef.style.display = "block";
//     projectsRef.style.display = "block";
//     experienceRef.style.display = "block"
//   });
// });

// menuLinks.forEach((link) => {
//   link.addEventListener("click", function (event) {
//     certificatesSection.style.display = "none";
//     profileRef.style.display = "block";
//     aboutRef.style.display = "block";
//     projectsRef.style.display = "block";
//     experienceRef.style.display = "block"
//   });
// });


const certificateRef = document.querySelector(".certificate-btn");
const profileRef = document.getElementById("profile");
const aboutRef = document.getElementById("about");
const experienceRef = document.getElementById("experience");
const projectsRef = document.getElementById("projects");
const certificatesSection = document.getElementById("certificates");
const logoRef = document.querySelector(".logo");
const logoHamRef = document.querySelector(".logo-ham");
const navLinks = document.querySelectorAll(".nav-links a");
const menuLinks = document.querySelectorAll('.menu-links a');


function hideAllSections() {
  profileRef.style.display = "none";
  aboutRef.style.display = "none";
  experienceRef.style.display = "none";
  projectsRef.style.display = "none";
  certificatesSection.style.display = "none";
}


function showMainSections(profileDisplay = "flex") {
  profileRef.style.display = profileDisplay;
  aboutRef.style.display = "block";
  experienceRef.style.display = "block";
  projectsRef.style.display = "block";
}


function showCertificate() {
  hideAllSections();
  certificatesSection.style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}


function showMain(profileDisplay) {
  hideAllSections();
  showMainSections(profileDisplay);
}

certificateRef.addEventListener("click", showCertificate);
logoRef.addEventListener("click", () => showMain("flex"));
logoHamRef.addEventListener("click", () => showMain("block"));

navLinks.forEach(link => {
  link.addEventListener("click", () => showMain("flex"));
});

menuLinks.forEach(link => {
  link.addEventListener("click", () => showMain("block"));
});
