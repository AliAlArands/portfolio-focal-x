new Swiper(".clients-swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
      1000: {
        slidesPerView: 5
      },
      768: {
        slidesPerView: 4
      },
      600: {
        slidesPerView: 3
      },
      420: {
        slidesPerView: 2
      },
    }
});