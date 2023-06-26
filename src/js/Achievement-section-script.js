const achievement__title = document.querySelector('.achievement__title');
const achievement__date = document.querySelector('.achievement__date');
const achievement__body = document.querySelector('.achievement__body');


const achievements = document.querySelector('.achievements');
function appendNewitem(name,date,body){
  achievements.innerHTML += `  <div class="achievement-box">
  <div class="achievement__header">
  <div class="achievement__title">
  ${name}</div>
  <div class="achievement__date">${date}</div>
  </div>
  <div class="achievement__body">
  ${body}
  <a href="#" class="full__achievement">read more</a>
  </div>
  </div>
  </div>
  </div> ` ;
}
fetch('http://127.0.0.1:8000/api/achievements')
.then(res => res.json())
.then(res => res = res.Achievements)
.then(res => res.forEach(item =>{
  appendNewitem(item.name , item.date , item.body );
}))