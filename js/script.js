    const words = ["Artista", "Desenvolvedor", "Criador de conteúdo", "Estudante"];
    let currentWordIndex = 0;
    let currentLetterIndex = 0;
    let currentWord = words[currentWordIndex];
function type() {
  if (currentLetterIndex < currentWord.length) {
    document.getElementById("typing").innerHTML += currentWord[currentLetterIndex];
    currentLetterIndex++;
    setTimeout(type, 125);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (currentLetterIndex > 0) {
    document.getElementById("typing").innerHTML = currentWord.substring(0, currentLetterIndex - 1);
currentLetterIndex--;
setTimeout(erase, 50);
} else {
currentWordIndex++;
if (currentWordIndex >= words.length) {
currentWordIndex = 0;
}
currentWord = words[currentWordIndex];
setTimeout(type, 2000);
}
}

type();

window.onscroll = function() {
  var header = document.getElementByClassName("header");
  if (window.pageYOffset > 50) {
    header.style.backgroundColor = "white";
  } else {
    header.style.backgroundColor = "black";
  }
};



