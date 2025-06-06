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
const track = document.getElementById("sliderTrack");
let scrollAmount = 0;
let scrollSpeed = 2.5; // Faster
let isHovering = false;

function applyCoverflowEffect() {
  const slides = document.querySelectorAll(".slide");
  const trackRect = track.getBoundingClientRect();

  slides.forEach(slide => {
    const slideRect = slide.getBoundingClientRect();
    const centerDiff = (slideRect.left + slideRect.width / 2) - (trackRect.left + trackRect.width / 2);
    const offset = centerDiff / slideRect.width;

    const rotateY = offset * 45;
    const scale = 1 - Math.min(Math.abs(offset) * 0.4, 0.4);

    slide.style.transform = `perspective(1000px) rotateY(${rotateY}deg) scale(${scale})`;
    slide.style.zIndex = 100 - Math.round(Math.abs(offset) * 100);
  });
}

function autoScroll() {
  if (!isHovering) {
    scrollAmount += scrollSpeed;

    if (scrollAmount >= track.scrollWidth / 2) {
      scrollAmount = 0;
      track.scrollLeft = 0;
    }

    track.scrollLeft = scrollAmount;
    applyCoverflowEffect();
  }

  requestAnimationFrame(autoScroll);
}

track.addEventListener("mouseenter", () => (isHovering = true));
track.addEventListener("mouseleave", () => (isHovering = false));

autoScroll();
