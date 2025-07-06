// document.addEventListener('DOMContentLoaded', function () {
//     const btnMenu = document.querySelector('.btn-menu');
//     const navbar = document.querySelector('.navbar');

//     btnMenu.addEventListener('click', function () {
//         navbar.classList.toggle('open');
//     });
// });
document.querySelectorAll('.progress').forEach(bar => {
    bar.style.width = '0';
    setTimeout(() => {
        bar.style.width = bar.getAttribute('data-skill');
    }, 300);
});
