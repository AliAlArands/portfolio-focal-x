new Swiper(".specialized-in-swiper", {
  spaceBetween: 100,
	pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
  
	breakpoints: {
		640: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1224: {
			slidesPerView: 3,
		},
	},
});
