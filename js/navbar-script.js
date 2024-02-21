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

    if (menu.classList.contains("active")){
      menu.classList.remove("active");
      menu.style.animation = "showMenu 0.5s ease backwards"
      menu.style.background = 'transparent';
    } else{
      menu.classList.add("active"); 
      menu.style.animation = "showMenu 0.5s ease forwards";
      menu.style.animation = "rgb(13, 16, 23)";
    }
  });
})
