window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbarjs");

  if (window.scrollY > 250) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
