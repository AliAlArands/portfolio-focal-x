const hum = document.querySelector(".hidden-menu-nav");
const linksMob = document.querySelector(".links-list-nav-mobile");
const st = document.querySelectorAll(".hidden-menu-nav .st");
const navbar = document.querySelector("nav");
const moblieLinks = document.querySelectorAll("header .link-nav-mob");


hum.addEventListener("click", () => {
    linksMob.classList.toggle("trans-0");
    st.forEach(s => {
        s.classList.toggle("w-40");
    });
    handleNavbarColor();
});

moblieLinks.forEach(link => {
    link.addEventListener("click", () => {
        linksMob.classList.remove("trans-0");
    })
})

window.addEventListener("scroll", handleNavbarColor);
handleNavbarColor();

function handleNavbarColor() {
    if (window.scrollY !== 0 && !linksMob.classList.contains("trans-0")) {
        navbar.style.backgroundColor = "var(--clr-background)";
    } else {
        navbar.style.backgroundColor = null;
    }
}