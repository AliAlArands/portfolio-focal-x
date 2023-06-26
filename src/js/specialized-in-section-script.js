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
let contianarr =  document.querySelector(".swiper-wrapper-special")

function appenNewprodact(description,title){
	let titlee = document.createElement("h1")
    titlee.classList.add("fq-title")
    titlee.innerText = title
   
    let descriptionn = document.createElement("p")
      descriptionn.classList.add("fq-descrip")
      descriptionn.innerText = description
   
    let fqswiper = document.createElement("div")
    fqswiper.classList.add("fq-card")
    fqswiper.appendChild(titlee)
    fqswiper.appendChild(descriptionn)
  
    let continar = document.createElement("div")
    continar.classList.add("swiper-slide")
  
    continar.appendChild(fqswiper)
    contianarr.appendChild(continar)
}
fetch("http://127.0.0.1:8000/api/specializations")
    .then(res => res.json())
    .then(res => res = res.specializations)
    .then(res => res.forEach(element => {
      appenNewprodact(element.body,element.title)
    }))