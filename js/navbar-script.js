// JavaScript
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 10) {
      $(".header").css("background", "rgb(13, 16, 23)");
      $(".header").css("border", "1px solid rgb(43, 56, 75)");
    }

    else {
      $(".header").css("background", "transparent");
      $(".header").css("border", "transparent");
    }
  })

  if (window.matchMedia('(max-width: 768px)').matches) {
    // Rewrite the toggleMenu function using jQuery
    $("#navbar-logo").click(function () {
      var menu = document.getElementById("navbar-menu");
  
      if (menu.classList.contains("active")){
        this.style.animation = "logo-rotate-reverse 0.5s ease forwards";
        menu.style.animation = "menu-out 0.5s ease forwards";
        setTimeout(() => {
          menu.classList.remove("active");
          menu.style.display = 'none';
        }, 500);
  
      } else{
        this.style.animation = "logo-rotate 0.5s ease forwards";
        menu.style.display = 'flex';
        menu.classList.add("active");
        menu.style.animation = "menu-in 0.5s ease forwards";
      }
    });
  }


})
