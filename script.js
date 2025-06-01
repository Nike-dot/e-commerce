// Hamburger menu toggle
const menuButton = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('active');
  sideMenu.classList.toggle('open');
});

// Swiper carousel initialization
const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }
});
