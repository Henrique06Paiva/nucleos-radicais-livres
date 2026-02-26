document.addEventListener("DOMContentLoaded", function () {
  const menuHamburger = document.getElementById("menuHamburger");
  const menuMobileNav = document.getElementById("menuMobileNav");
  const closeMenu = document.getElementById("closeMenu");
  const menuLinks = document.querySelectorAll(".menu-mobile-nav ul li a");

  function openMenu() {
    menuMobileNav.classList.add("active");
    menuHamburger.classList.add("active");
    document.body.classList.add("menu-open");
    document.body.style.overflow = "hidden";
  }

  function closeMenuFn() {
    menuMobileNav.classList.remove("active");
    menuHamburger.classList.remove("active");
    document.body.classList.remove("menu-open");
    document.body.style.overflow = "";
  }

  if (menuHamburger) {
    menuHamburger.addEventListener("click", openMenu);
  }

  if (closeMenu) {
    closeMenu.addEventListener("click", closeMenuFn);
  }

  menuLinks.forEach(function (link) {
    link.addEventListener("click", closeMenuFn);
  });

  if (menuMobileNav) {
    menuMobileNav.addEventListener("click", function (e) {
      if (e.target === menuMobileNav) {
        closeMenuFn();
      }
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menuMobileNav.classList.contains("active")) {
      closeMenuFn();
    }
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

let lastScroll = 0;
const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 50) {
    nav.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.4)";
  } else {
    nav.style.boxShadow = "0 4px 24px rgba(0, 0, 0, 0.3)";
  }

  lastScroll = currentScroll;
});
