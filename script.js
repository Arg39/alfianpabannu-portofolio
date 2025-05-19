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

// --- Modal Portofolio Detail ---
const portoDetails = {
  simahkos: [
    "images/simahkos/porto1.png",
    "images/simahkos/porto2.png",
    "images/simahkos/porto3.png",
    "images/simahkos/porto4.png",
    "images/simahkos/porto5.png",
    "images/simahkos/porto6.png",
  ],
  // Tambahkan portofolio lain jika ada
};

const modal = document.getElementById("porto-modal");
const modalImages = modal.querySelector(".porto-modal-images");
const closeBtn = modal.querySelector(".porto-modal-close");
const prevBtn = document.getElementById("porto-prev");
const nextBtn = document.getElementById("porto-next");

let currentImages = [];
let currentIndex = 0;

function openModal(portoKey) {
  currentImages = portoDetails[portoKey] || [];
  currentIndex = 0;
  modalImages.innerHTML = "";
  if (currentImages.length === 0) return;

  currentImages.forEach((src, idx) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `Detail ${portoKey} ${idx + 1}`;
    if (idx === 0) img.classList.add("active");
    modalImages.appendChild(img);
  });

  modal.classList.add("active");
  updateNavButtons();
}

function closeModal() {
  modal.classList.remove("active");
}

function showImage(idx) {
  const imgs = modalImages.querySelectorAll("img");
  imgs.forEach((img, i) => img.classList.toggle("active", i === idx));
}

function updateNavButtons() {
  prevBtn.style.display = currentImages.length > 1 ? "inline-block" : "none";
  nextBtn.style.display = currentImages.length > 1 ? "inline-block" : "none";
}

prevBtn.onclick = function () {
  if (currentImages.length < 2) return;
  currentIndex =
    (currentIndex - 1 + currentImages.length) % currentImages.length;
  showImage(currentIndex);
};
nextBtn.onclick = function () {
  if (currentImages.length < 2) return;
  currentIndex = (currentIndex + 1) % currentImages.length;
  showImage(currentIndex);
};
closeBtn.onclick = closeModal;
modal.onclick = function (e) {
  if (e.target === modal) closeModal();
};

document.querySelectorAll(".detail-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const portoKey = btn.getAttribute("data-porto");
    openModal(portoKey);
  });
});
