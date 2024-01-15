const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});




// Navbar
const toggle = document.getElementById('menu-toggle');
const navbarLinks = document.getElementById("navbar-links");
const close = document.getElementById("close");

toggle.addEventListener('click', () => {
  navbarLinks.style.left = 0;
});

close.addEventListener('click', () => {
  navbarLinks.style.left = "-100%";
})
