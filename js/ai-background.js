$(document).ready(function () {
  // Get the container element
  const background = document.getElementById("background");

  // Set the number of diamonds to generate
  const numDiamonds = 20;

  // Calculate the width and height of each cell, based on the number of diamonds and the background size
  const cellWidth = background.offsetWidth / Math.sqrt(numDiamonds);
  const cellHeight = background.offsetHeight / Math.sqrt(numDiamonds);

  // Create an array to hold the occupied cells
  const occupiedCells = [];

  // Loop through the number of diamonds
  for (let i = 0; i < numDiamonds; i++) {
    // Create a new diamond element
    const diamond = document.createElement("div");

    // Add the diamond class to the element
    diamond.classList.add("diamond");

    // Generate a random row and column index to select a cell
    let rowIndex, colIndex;
    do {
      rowIndex = Math.floor(Math.random() * Math.sqrt(numDiamonds));
      colIndex = Math.floor(Math.random() * Math.sqrt(numDiamonds));
    } while (occupiedCells.includes(`${rowIndex}-${colIndex}`)); // Repeat until the cell is not occupied

    // Generate a random position within the cell, using the cell width and height as the range
    const x = Math.random() * cellWidth + colIndex * cellWidth;
    const y = Math.random() * cellHeight + rowIndex * cellHeight;

    // Generate a random size for the diamond
    const size = Math.random() * 100 + 50;

    // Set the position and size of the diamond element
    diamond.style.left = x + "px";
    diamond.style.top = y + "px";
    diamond.style.width = size + "px";
    diamond.style.height = size + "px";

    // Generate a random animation duration between 1s and 5s
    const animationDuration = Math.random() * 4 + 3;

    // Set the animation duration of the diamond element
    diamond.style.animationDuration = animationDuration + "s";

    // Append the diamond element to the container
    background.appendChild(diamond);

    // Mark the cell as occupied
    occupiedCells.push(`${rowIndex}-${colIndex}`);
  }

  // Add an event listener to the window scroll event
  window.addEventListener("scroll", function () {
    // Get the scroll position of the window
    const scrollY = window.scrollY;

    // Set the 3D translation of the container element based on the scroll position
    background.style.transform = `translateZ(${scrollY / 10}px)`;
  });
});
