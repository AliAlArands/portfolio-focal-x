const videos = document.querySelectorAll(".video__category");
videos.forEach((video) => {
  video.addEventListener("click", () => {
    videos.forEach(v => v.classList.remove("video__category--active"))
    video.classList.add("video__category--active");
  });
});



const fatherVed = document.querySelector(".videos__grid");

fetch("http://127.0.0.1:8000/api/videos")
.then(res => res.json())
.then(res => res = res.video)
.then(res => {
  res.forEach(ele => {
    fatherVed.innerHTML += `<iframe
    class="video__grid__item ${ele.section} most-viewed"
    src="${ele.link}"
    title="${ele.name}"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    ></iframe>`
  })
})

const links = document.querySelectorAll(".video__category");
const ved = document.querySelectorAll("iframe")
console.log(ved)
for(let i = 0 ; i <= links.length-1 ; i++) {
  links[i].onclick = () => {
    let m = links[i].innerText.toLowerCase().replaceAll(" ","-")
    console.log(m)
    ved.forEach(ele => {
      if(ele.classList.contains(`${m}`)){
        console.log("yes")
        ele.classList.remove("d-none")
      }
      else{
        console.log("no",ele)
        ele.classList.add("d-none")
      }
    })
  }
}