let sign = document.querySelector('.neonSign');
setInterval(() => {
    if (sign.classList.contains('on')) {
        sign.classList.remove('on');
        sign.innerHTML = 'OFF';
    } else {
        sign.classList.add('on');
        sign.innerHTML = 'ON';
    }
}, 2000);

window.onscroll = function() {
  var header = document.getElementsByClassName("header");
  if (window.pageYOffset > 50) {
    header[0].style.backgroundColor = "#0d1017";
  } else {
    header[0].style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
};
