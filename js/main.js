let navButton = document.querySelector("#hdNavButton");
let navCloseButton = document.querySelector("#navCloseButton");
navButton.addEventListener("click", toggleMenu);
navCloseButton.addEventListener("click", toggleMenu);

function toggleMenu(){
    document.querySelector("nav").classList.toggle("show");
}