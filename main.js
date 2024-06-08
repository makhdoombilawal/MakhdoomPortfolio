var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Wordpress Developer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggle-button');
    const navbar = document.querySelector('.navbar');

    toggleButton.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
});
