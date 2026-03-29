const openBtn = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close-modal");

// Open modal
openBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close with button
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// ✅ IMPORTANT FIX
modal.onclick = function (e) {
  // If clicked directly on modal (background)
  if (e.target === modal) {
    modal.style.display = "none";
  }
};