// JavaScript
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

  // Rewrite the toggleMenu function using jQuery
  $("#navbar-logo").click(function () {
    var menu = document.getElementById("navbar-menu");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
  });
})
