new Swiper(".portfolio-swiper", {
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	spaceBetween: 60,
	breakpoints: {
		600: {
			slidesPerView: 1,
		},
		800: {
			slidesPerView: 2,
		},
		1250: {
			slidesPerView: 3,
		},
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

const reduces = document.querySelectorAll(".port-sec .port-redu .redu");

reduces.forEach(redu => {
	redu.addEventListener("click", () => {
		reduces.forEach(r => r.classList.remove("active"));
		redu.classList.add("active");
	})
})