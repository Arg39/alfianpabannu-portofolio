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
  didikin: [
    "images/didikin/porto1.png",
    "images/didikin/porto2.png",
    "images/didikin/porto3.png",
    "images/didikin/porto4.png",
    "images/didikin/porto5.png",
    "images/didikin/porto6.png",
    "images/didikin/porto7.png",
    "images/didikin/porto8.png",
    "images/didikin/porto9.png",
    "images/didikin/porto10.png",
    "images/didikin/porto11.png",
    "images/didikin/porto12.png",
  ],
  scpk: [
    "images/scpk/porto1.png",
    "images/scpk/porto2.png",
    "images/scpk/porto3.png",
    "images/scpk/porto4.png",
    "images/scpk/porto5.png",
    "images/scpk/porto6.png",
    "images/scpk/porto7.png",
  ],
  almutaqin: [
    "images/al-muttaqin/porto1.jpg",
    "images/al-muttaqin/porto2.jpg",
    "images/al-muttaqin/porto3.jpg",
    "images/al-muttaqin/porto4.jpg",
    "images/al-muttaqin/porto5.jpg",
    "images/al-muttaqin/porto6.jpg",
    "images/al-muttaqin/porto7.jpg",
    "images/al-muttaqin/porto8.jpg",
    "images/al-muttaqin/porto9.jpg",
    "images/al-muttaqin/porto10.jpg",
  ],
  maker: [
    "images/maker/porto1.jpeg",
    "images/maker/porto2.jpeg",
    "images/maker/porto3.jpeg",
    "images/maker/porto4.jpeg",
    "images/maker/porto5.jpeg",
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
