
// Toggle Mobile Navigation
const navToggle = document.querySelector('.navbar .nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});
