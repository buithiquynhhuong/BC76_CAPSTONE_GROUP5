window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbarjs");

  if (window.scrollY > 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Truy cập button class 'navbar-toggler'
  var toggleButton = document.querySelector(".navbar-toggler");

  // Truy cập checkbox ID 'tranform_bg_nav'
  var checkbox = document.getElementById("tranform_bg_nav");

  // Lắng nghe sự kiện 'click' trên nút button
  toggleButton.addEventListener("click", function () {
    /* Thay đổi trạng thái của checkbox khi click vào 
    button mặc định ban đầu là false sau mỗi lân click sẽ đổi trạng thái */
    checkbox.checked = !checkbox.checked;
  });
});
