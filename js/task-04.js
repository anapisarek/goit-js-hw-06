const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const valueSpan = document.getElementById("value");
let counterValue = 0;


incrementBtn.addEventListener("click", () => {
  valueSpan.textContent = ++counterValue;
});

decrementBtn.addEventListener("click", () => {
  valueSpan.textContent = --counterValue;
});
