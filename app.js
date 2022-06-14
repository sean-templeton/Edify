const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");

function toggleButton() {
  navList.className.toggle("show");
}

hamburgerButton.addEventListener("click", toggleButton);
