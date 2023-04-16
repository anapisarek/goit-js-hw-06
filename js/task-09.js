function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorBtn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

colorBtn.addEventListener("click", () => {
  let tempColor = getRandomHexColor();
  colorSpan.textContent = tempColor;
  document.body.style.backgroundColor = tempColor;
});