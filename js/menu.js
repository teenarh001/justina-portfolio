var menuToggle = document.getElementById("menuToggle");
var navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function() {

    navLinks.classList.toggle("show");

    var isOpen = navLinks.classList.contains("show");

    menuToggle.textContent = isOpen ? "✕" : "☰";

    menuToggle.setAttribute("aria-expanded", isOpen);

});