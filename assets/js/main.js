/* ========================================
   MAIN.JS - JavaScript principal
   ======================================== */

// ========================================
// MENU MOBILE
// ========================================
document.addEventListener('DOMContentLoaded', function() {
  const menuHamburger = document.getElementById('menuHamburger');
  const menuMobileNav = document.getElementById('menuMobileNav');
  const closeMenu = document.getElementById('closeMenu');
  const menuLinks = document.querySelectorAll('.menu-mobile-nav ul li a');

  // Abrir menu
  if (menuHamburger) {
    menuHamburger.addEventListener('click', function() {
      menuMobileNav.classList.add('active');
      menuHamburger.classList.add('active');
      document.body.style.overflow = 'hidden'; // Bloqueia scroll
    });
  }

  // Fechar menu pelo X
  if (closeMenu) {
    closeMenu.addEventListener('click', function() {
      menuMobileNav.classList.remove('active');
      menuHamburger.classList.remove('active');
      document.body.style.overflow = ''; // Libera scroll
    });
  }

  // Fechar menu ao clicar em um link
  menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      menuMobileNav.classList.remove('active');
      menuHamburger.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Fechar menu ao clicar fora
  if (menuMobileNav) {
    menuMobileNav.addEventListener('click', function(e) {
      if (e.target === menuMobileNav) {
        menuMobileNav.classList.remove('active');
        menuHamburger.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Fechar menu com tecla ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && menuMobileNav.classList.contains('active')) {
      menuMobileNav.classList.remove('active');
      menuHamburger.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

// ========================================
// SMOOTH SCROLL (para links com #)
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ========================================
// NAVBAR SCROLL EFFECT (opcional)
// ========================================
let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
  const currentScroll = window.pageYOffset;
  
  // Adiciona sombra ao scrollar
  if (currentScroll > 50) {
    nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.4)';
  } else {
    nav.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.3)';
  }
  
  lastScroll = currentScroll;
});
