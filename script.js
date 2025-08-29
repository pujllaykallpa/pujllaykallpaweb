function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}

// Animación al hacer scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".section, .card").forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});
