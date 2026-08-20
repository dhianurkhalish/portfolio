function toggleProjects(event) {
    event.preventDefault();

    const subnav = document.getElementById("projectSubnav");
    const arrow = document.querySelector(".arrow");

    subnav.classList.toggle("show");
    arrow.classList.toggle("rotate");
}