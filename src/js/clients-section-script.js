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

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

let data = [];
const clients = document.querySelector(".clients-section .swiper-wrapper");

async function getclients() {
 await fetch("http://localhost:8000/api/clients", requestOptions)
  .then(res => res.json())
  .then(res => data=res.clients);
  
  data.forEach(ele => {
    
    clients.innerHTML += `
    <div class="swiper-slide">
        <img src=${ele.image_url}/>
    </div>
    `
    
  }
  );
}
getclients();