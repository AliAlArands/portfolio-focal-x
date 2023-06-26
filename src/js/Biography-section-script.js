const mainContent = document.querySelector('.main-content');

fetch('http://127.0.0.1:8000/api/biographie')
.then(res => res.json())
.then(res => res = res.biography)
.then(res => res.forEach( e =>{
    console.log(e)
    mainContent.innerHTML += `<div class="description">${e.body}</div>
    <img src=${e.image_url} alt="Alaa Darwish Personal Image" /> ` ;
}));