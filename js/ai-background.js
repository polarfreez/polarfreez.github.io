// Get the container element
const background = document.getElementById("background");

// Set the number of diamonds to generate
const numDiamonds = 20;

// Set the minimum distance between diamonds
const minDistance = 150;

// Create an array to hold the diamonds
const diamonds = [];

// Function to calculate distance between two points
function calculateDistance(point1, point2) {
  const dx = point1.x - point2.x;
  const dy = point1.y - point2.y;
  return Math.sqrt(dx * dx + dy * dy);
}

// Function to check if the new position is too close to existing diamonds
function isPositionValid(newPosition, existingDiamonds) {
  for (const diamond of existingDiamonds) {
    const existingPosition = {
      x: parseFloat(diamond.style.left),
      y: parseFloat(diamond.style.top),
    };

    if (calculateDistance(newPosition, existingPosition) < minDistance) {
      return false;
    }
  }

  return true;
}

// Loop through the number of diamonds
for (let i = 0; i < numDiamonds; i++) {
  // Create a new diamond element
  const diamond = document.createElement("div");

  // Add the diamond class to the element
  diamond.classList.add("diamond");

  // Generate a random position for the diamond
  let newPosition;
  do {
    newPosition = {
      x: Math.random() * background.offsetWidth,
      y: Math.random() * background.offsetHeight,
    };
  } while (!isPositionValid(newPosition, diamonds));

  // Generate a random size for the diamond
  const size = Math.random() * 100 + 50;

  // Set the position and size of the diamond element
  diamond.style.left = newPosition.x + "px";
  diamond.style.top = newPosition.y + "px";
  diamond.style.width = size + "px";
  diamond.style.height = size + "px";

  // Generate a random animation duration between 1s and 5s
  const animationDuration = Math.random() * 4 + 3;

  // Set the animation duration of the diamond element
  diamond.style.animationDuration = animationDuration + "s";

  // Append the diamond element to the container
  background.appendChild(diamond);

  // Add the diamond to the array
  diamonds.push(diamond);
}

// Add an event listener to the window scroll event
window.addEventListener("scroll", function () {
  // Get the scroll position of the window
  const scrollY = window.scrollY;

  // Set the 3D translation of the container element based on the scroll position
  background.style.transform = `translateZ(${scrollY / 10}px)`;
});
