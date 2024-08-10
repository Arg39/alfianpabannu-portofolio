const scrollThreshold = 100; // Set the scroll threshold in pixels
const header = document.querySelector("header");

function updateHeaderBackground() {
  const scrollTop = window.scrollY;
  let alpha = Math.min(scrollTop / scrollThreshold, 1); // Calculate alpha value

  // Define color stages based on scroll
  const startColor = "rgba(0, 0, 0, 0)"; // Transparent
  const endColor = `rgba(0, 0, 0, ${Math.min(alpha, 1)})`; // Gradually increasing opacity

  header.style.backgroundColor = endColor;
}

window.addEventListener("scroll", updateHeaderBackground);
