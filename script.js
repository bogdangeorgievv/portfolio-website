function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

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
