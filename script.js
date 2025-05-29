// Select the menu button element
var menuButton = document.querySelector('.menu-button');

// Define what happens when the menu button is clicked
var openMenu = function () {
  swiper.slidePrev(); // Go to previous slide (menu)
};

// Initialize Swiper
var swiper = new Swiper('.swiper', {
  slidesPerView: 'auto', // Allow custom widths
  initialSlide: 1,       // Start from the content slide
  resistanceRatio: 0,    // Disable resistance when swiping
  slideToClickedSlide: true, // Slide to the clicked slide
  on: {
    // When the slide is starting to change
    slideChangeTransitionStart: function () {
      var slider = this;
      if (slider.activeIndex === 0) {
        menuButton.classList.add('cross');
        // Remove the click listener to prevent re-trigger
        menuButton.removeEventListener('click', openMenu, true);
      } else {
        menuButton.classList.remove('cross');
      }
    },

    // When the slide change animation is done
    slideChangeTransitionEnd: function () {
      var slider = this;
      if (slider.activeIndex === 1) {
        // Add the event listener back on content slide
        menuButton.addEventListener('click', openMenu, true);
      }
    }
  }
});
