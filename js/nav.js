const toggleButton = document.getElementById("toggle-sidebar");
const sidebar = document.querySelector(".sidebar");

toggleButton.addEventListener("click", function() {
  sidebar.classList.toggle("active");
});
