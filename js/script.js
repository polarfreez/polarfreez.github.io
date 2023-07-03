obfu_data = {
    "delay":10,
    "start_time":80,
    "end_time":80,
    "disp_time":2000,
    "loop":true,
    "obfu_chars":"123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@?#$%^&*()",
    "phrases":[
        'apaixonado pelo espaço e pelo universo',
        'entusiasta da tecnologia',
        'estudante',
        'artista',
        'desenvolvedor'
  ]
}



window.onscroll = function() {
  var header = document.getElementsByClassName("header");
  if (window.pageYOffset > 50) {
    header[0].style.backgroundColor = "#0d1017";
  } else {
    header[0].style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
};
