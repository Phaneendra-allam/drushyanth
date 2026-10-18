/* Mobile navigation */
function toggleMenu() {
  const nav = document.getElementById("navlinks");
  const button = document.querySelector(".menu");
  if (!nav || !button) return;
  const isOpen = nav.classList.toggle("open");
  button.setAttribute("aria-expanded", String(isOpen));
  button.textContent = isOpen ? "×" : "☰";
}

function closeMenu() {
  const nav = document.getElementById("navlinks");
  const button = document.querySelector(".menu");
  if (!nav || !button) return;
  nav.classList.remove("open");
  button.setAttribute("aria-expanded", "false");
  button.textContent = "☰";
}

/* Click the About photo to view it larger; press Escape to close. */
function toggleAboutImage(element) {
  const expanded = element.classList.toggle("is-expanded");
  element.setAttribute("aria-label", expanded ? "Close full image view" : "Click to view the full office image");
  document.body.style.overflow = expanded ? "hidden" : "";
}

document.addEventListener("keydown", function (event) {
  if (event.key !== "Escape") return;
  document.querySelectorAll(".about-photo-full.is-expanded").forEach(function (element) {
    element.classList.remove("is-expanded");
    element.setAttribute("aria-label", "Click to view the full office image");
  });
  document.body.style.overflow = "";
});

/* Keep the footer year current. */
document.addEventListener("DOMContentLoaded", function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
