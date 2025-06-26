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

// -----------third-part-js (duplicate slider logic)------------------->//
const track2 = document.getElementById("sliderTrack2");
let scrollAmount2 = 0;
let scrollSpeed2 = 2.5; // Same speed as first slider
let isHovering2 = false;

function applyCoverflowEffect2() {
  const slides2 = document.querySelectorAll(".slide2");
  const trackRect2 = track2.getBoundingClientRect();

  slides2.forEach(slide2 => {
    const slideRect2 = slide2.getBoundingClientRect();
    const centerDiff2 = (slideRect2.left + slideRect2.width / 2) - (trackRect2.left + trackRect2.width / 2);
    const offset2 = centerDiff2 / slideRect2.width;

    const rotateY2 = offset2 * 45;
    const scale2 = 1 - Math.min(Math.abs(offset2) * 0.4, 0.4);

    slide2.style.transform = `perspective(1000px) rotateY(${rotateY2}deg) scale(${scale2})`;
    slide2.style.zIndex = 100 - Math.round(Math.abs(offset2) * 100);
  });
}

function autoScroll2() {
  if (!isHovering2) {
    scrollAmount2 += scrollSpeed2;

    if (scrollAmount2 >= track2.scrollWidth / 2) {
      scrollAmount2 = 0;
      track2.scrollLeft = 0;
    }

    track2.scrollLeft = scrollAmount2;
    applyCoverflowEffect2();
  }

  requestAnimationFrame(autoScroll2);
}

track2.addEventListener("mouseenter", () => (isHovering2 = true));
track2.addEventListener("mouseleave", () => (isHovering2 = false));

autoScroll2();
