
    $(function () {
      $('.scroll-down').click(function () {
        $('html, body').animate({ scrollTop: $('#about').offset().top + 80}, 'slow');
        return false;
      });
    });

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
    })

$(function () {

  // overlay for smoother fullscreen enter
  var $overlay = $('<div class="fotorama-overlay"></div>')
    .css({ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, zIndex: 10001 })
    .animate()
    .fadeTo(0, 0)
    .hide()
    .appendTo('body');

  // variable to store the current scroll position
  var scrollPosition;

  // take all .fotorama blocks
  $('.thumbs').each(function () {
    var $thumbs = $(this),

      // clone it and make fotorama
      $fotorama = $('.fotorama', $thumbs)
        .clone()
        .css({ position: 'absolute' })
        .appendTo('body')
        .fadeTo(0, 0)
        .fotorama(),
      fotorama = $fotorama.data('fotorama');

    for (var _i = 0, _l = fotorama.data.length; _i < _l; _i++) {
      // prepare id to use in fotorama.show()
      fotorama.data[_i].id = fotorama.data[_i].img;
    }

    // bind clicks
    $thumbs.on('click', 'a', function (e) {
      e.preventDefault();

      // save the current scroll position
      scrollPosition = $(window).scrollTop();

      var $this = $(this);

      $overlay
        .show()
        .stop()
        .fadeTo(150, 1, function () {
          $fotorama.stop().fadeTo(150, 1);

          // API calls
          fotorama
            // show needed frame
            .show({ index: $this.attr('href'), time: 0 })
            // open fullscreen
            .requestFullScreen();
        })
        .animate();
    });

    $fotorama.on('fotorama:fullscreenexit', function () {
      $fotorama.stop().fadeTo(0, 0);
      $overlay.stop().fadeTo(300, 0, function () {
        $overlay.hide();

        // restore the scroll position
        $(window).scrollTop(scrollPosition);
      });
    });
  });
});
