"use strict";
const btnVideo = document.querySelector(".button_gray");
const navLinks = document.querySelector(".menu-links");
const menuSmall = document.querySelector(".menu-small");
const links = document.querySelectorAll(".menu-links__link");
const mobileOpen = document.querySelector(".menu__btn");
const mobileMenu = document.querySelector(".nav-mobile");
const mobileClose = document.querySelector(".nav-mobile__btn_close");
const MobileLink = document.querySelector(".nav-mobile__menu-links");

//nav menu
mobileOpen.addEventListener("click", (e) => {
  if (e.target) {
    mobileMenu.classList.add("nav-mobile_active");
    document.body.classList.add("hidden");
  }
});

mobileClose.addEventListener("click", (e) => {
  if (e.target) {
    mobileMenu.classList.remove("nav-mobile_active");
    document.body.classList.remove("hidden");
  }
});

window.focus();
window.addEventListener("blur", (e) => {
  if (e.target) {
    btnVideo.classList.add("button_active");
  }
});

function getScrollElement(link) {
  link.addEventListener("click", (e) => {
    let offsetElementTop; // topCount
    let offsetElementFooter; // footerCount
    e.preventDefault();
    if (
      (e.target.name && link.className === "menu-links") ||
      (e.target.name && link.className === "nav-mobile__menu-links")
    ) {
      removeStyleClass(); // removeAllClassActive
      e.target.parentElement.classList.add("menu-links__link_active"); //addClassActive;
      // positionElTop
      offsetElementTop = document
        .querySelector(`#${e.target.name}`)
        .getBoundingClientRect().top;
    }

    if (e.target.name && link.className === "menu-small") {
      //positionElFooter
      const positionElemen = document
        .querySelector(`#${e.target.name}`)
        .getBoundingClientRect().top;

      offsetElementFooter = positionElemen + window.pageYOffset;
    }

    //scrollToElement
    window.scrollTo({
      top: offsetElementTop ? offsetElementTop : offsetElementFooter,
      behavior: "smooth",
    });
  });
}

function removeStyleClass() {
  document.body.classList.remove("hidden");
  mobileMenu.classList.remove("nav-mobile_active");
  links.forEach((elem) => {
    elem.classList.remove("menu-links__link_active");
  });
}

getScrollElement(navLinks);
getScrollElement(menuSmall);
getScrollElement(MobileLink);
