// JavaScript for mobile menu toggle
const mobileMenuButton = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
