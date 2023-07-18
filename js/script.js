    let signOn = false;
    setInterval(toggleSign, 2000);
    function toggleSign() {
        const sign = document.getElementById('sign');
        if (signOn) {
            sign.textContent = 'artist';
            sign.classList.remove('flicker');
        } else {
            sign.textContent = 'desenvolvedor';
            sign.classList.add('flicker');
        }
        signOn = !signOn;
    }

window.onscroll = function() {
  var header = document.getElementsByClassName("header");
  if (window.pageYOffset > 50) {
    header[0].style.backgroundColor = "#0d1017";
  } else {
    header[0].style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
};
