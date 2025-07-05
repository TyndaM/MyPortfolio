// document.addEventListener('DOMContentLoaded', function () {
//     const btnMenu = document.querySelector('.btn-menu');
//     const navbar = document.querySelector('.navbar');

//     btnMenu.addEventListener('click', function () {
//         navbar.classList.toggle('open');
//     });
// });

<script>
  window.addEventListener("load", () => {
    const progressBars = document.querySelectorAll(".progress");
    progressBars.forEach(bar => {
      const value = bar.getAttribute("data-skill");
      bar.style.width = value;
    });
  });
</script>
