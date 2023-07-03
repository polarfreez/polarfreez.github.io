obfu_data = {
    "delay":10,
    "start_time":80,
    "end_time":80,
    "disp_time":2000,
    "loop":false,
    "obfu_chars":"123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@?#$%^&*()",
    "phrases":[
        'The system has encountered an unexpected error',
        'Character "USER_IDENTIFY" is missing',
        'Attempting to load from memory...',
        'RUNTIME_ERROR',
        'Excerpt from the Journal of [DATA EXPUNGED], Overseer of the SCP Foundation'
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

};

