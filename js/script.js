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

// Get the header element
var header = document.getElementById("header");

// Get the offset position of the header
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction();
};

