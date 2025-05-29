document.addEventListener('DOMContentLoaded', function () {
    const btnMenu = document.querySelector('.btn-menu');
    const navbar = document.querySelector('.navbar');

    btnMenu.addEventListener('click', function () {
        navbar.classList.toggle('open');
    });
});