// ------------- Navbar -------------
const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebarToggle");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Sticky Mobile Nav
const mobileNav = document.querySelector(".navbar.mobile");

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    mobileNav.classList.remove("sticky-top");
  } else {
    mobileNav.classList.add("sticky-top");
  }
}

var screenWidth = window.matchMedia("(min-width: 992px)");

myFunction(screenWidth);
screenWidth.addEventListener("change", () => {
  myFunction(screenWidth);
  console.log(screenWidth);
});
