const scrollThreshold = 100;
const header = document.querySelector("header");

function updateHeaderBackground() {
  const scrollTop = window.scrollY;
  let alpha = Math.min(scrollTop / scrollThreshold, 1);

  const startColor = "rgba(30, 87, 97)";
  const endColor = `rgba(30, 87, 97, ${Math.min(alpha, 1)})`;

  header.style.backgroundColor = endColor;
}

window.addEventListener("scroll", updateHeaderBackground);
