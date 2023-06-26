
const father = document.querySelector(".cards-exp");

fetch("http://127.0.0.1:8000/api/experiences?")
.then(res => res.json())
.then(res => res = res.experiences)
.then(res => {
    res.forEach(ele => {
        father.innerHTML += `<div class="card">
    <div class="exp-title">
      <h3>${ele.title}</h3>
      <p>${ele.date}</p>
    </div>
    <div class="exp-info">
      <p>
        ${ele.content} <span>read more</span>
      </p>
    </div>
  </div>`;
    })
    
})