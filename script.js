// Hamburger menu toggle
const menuButton = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('active');
  sideMenu.classList.toggle('open');
});


// <!-- ===================== 3D CAROUSEL  ===================== -->
  const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });

// ---------------------------second-part-js------------------------->//
const track = document.getElementById('sliderTrack');
let scrollAmount = 0;

function autoScroll() {
  scrollAmount += 1;

  // When we reach halfway (end of first set), reset to start
  if (scrollAmount >= track.scrollWidth / 2) {
    scrollAmount = 0;
    track.scrollLeft = 0; // Reset instantly to beginning
  }

  track.scrollTo({ left: scrollAmount, behavior: 'auto' }); // 'auto' for smooth loop
  requestAnimationFrame(autoScroll);
}

autoScroll();
