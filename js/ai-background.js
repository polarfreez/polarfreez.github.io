//document.addEventListener('DOMContentLoaded', function () {  
export function backgroundAnimation(){
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
    diamond.style.rotate = '45deg';
    diamond.style.opacity = '0.5';
  
    // Generate a random animation duration between 1s and 5s
    const animationDuration = Math.random() * 4 + 3;
  
    // Set the animation duration of the diamond element
    diamond.style.animationDuration = animationDuration + "s";
  
    // Append the diamond element to the container
    background.appendChild(diamond);
  
    // Add the diamond to the array
    diamonds.push(diamond);
  }
  
  setTimeout(() => {
    const listElements = document.querySelectorAll(".diamond");
  
  for (const element of listElements){
   const randomTime = Math.random() * 20000 + 1000;
    
    // Generate a random position for the diamond
    let newPosition;
    do {
      newPosition = {
        x: Math.random() * background.offsetWidth,
        y: Math.random() * background.offsetHeight,
      };
    } while (!isPositionValid(newPosition, diamonds));
  
    anime({
    targets: element,
    loop: true,
    duration: randomTime,
    easing: 'easeInOutCubic',
    direction: 'alternate',
    scale: [
      {value: 1, duration: randomTime, delay: randomTime}, 
      {value: 1.2, duration: randomTime, delay: randomTime}
    ],
    rotate: [
      {value: 90, duration: 1000, delay: randomTime / 0.5},
      {value: 90, duration: 1000, delay: randomTime / 0.5}
     ],
    opacity: [
      {value: 0.2, duration: 1000, delay: randomTime / 0.5, easing: 'easeInOutSine'},
      {value: 0.5, duration: 1000, delay: 0, easing: 'easeInOutSine'},
      {value: 0.2, duration: 1000, delay: randomTime / 0.5, easing: 'easeInOutSine'}
    ],
    left: [
      {value: element.style.left, duration: randomTime + 2000, delay: randomTime + 5000}, 
      {value: newPosition.x, duration: randomTime + 2000, delay: randomTime + 5000}
    ],
    top: [
      {value: element.style.top, duration: randomTime + 5000, delay: randomTime + 5000}, 
      {value: newPosition.y, duration: randomTime + 5000, delay: randomTime + 5000}
    ]
      
  }); 
   }
  }, 250);
//});
}
