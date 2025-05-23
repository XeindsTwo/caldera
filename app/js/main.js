import {setupMobileMenu} from "./mobileMenu.js";

setupMobileMenu();

document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".home__video");
  video.removeAttribute("controls");
});

function scrollToSection(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute('href').slice(1);
  const targetElement = document.getElementById(targetId);

  let targetOffset;

  targetOffset = targetElement.offsetTop - 30;
  window.scrollTo({top: targetOffset, behavior: 'smooth'});
}

const menuLinks = document.querySelectorAll('.desktop');

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', scrollToSection);
});