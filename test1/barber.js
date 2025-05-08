const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.ham-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('active');
}); 