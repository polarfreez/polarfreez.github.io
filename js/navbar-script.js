$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 10) {
      $(".header").css("background", "rgb(13, 16, 23)");
    }

    else {
      $(".header").css("background", "transparent");
    }
  })

  function toggleMenu() {
    var menu = document.getElementById("navbar-menu");
    var button = document.getElementById("hamburger-menu");
    menu.classList.toggle("active");
    button.classList.toggle("active");
  }
})
