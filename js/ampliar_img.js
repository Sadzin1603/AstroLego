const imgs = document.querySelectorAll("img.ampliar")
const modal = document.getElementById("imageModal")
const modalImg = document.getElementById("modalImg")
const closeBtn = modal.querySelector(".close")

imgs.forEach(img => {
  img.addEventListener("click", () => {
    modal.classList.add("active")
    modalImg.src = img.src
    
  })
})

// Fechar no X
closeBtn.addEventListener("click", closeModal)

// Fechar clicando fora da imagem
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal()
})

// Fechar com ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal()
})

function closeModal() {
  modal.classList.remove("active")
  modalImg.src = ""
}
