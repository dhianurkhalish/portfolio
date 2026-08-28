function toggleProjects(event) {
    event.preventDefault();

    const subnav = document.getElementById("projectSubnav");
    const arrow = document.querySelector(".arrow");

    subnav.classList.toggle("show");
    arrow.classList.toggle("rotate");
}
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

setInterval(nextSlide, 3000);