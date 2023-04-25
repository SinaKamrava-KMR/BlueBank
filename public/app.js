const slider = document.getElementById('container')
const cards = document.getElementById('cards');
let isPressed = false;
let cursorX;

slider.addEventListener("mousedown", (e) => {
  isPressed = true;
  cursorX = e.offsetX - cards.offsetLeft;
  // slider.style.cursor = "grabbing";
});

window.addEventListener("mouseup", () => {
  isPressed = false;
});

slider.addEventListener("mousemove", (e) => {
  if (!isPressed) return;
  e.preventDefault();
  cards.style.left = `${e.offsetX - cursorX}px`;
  boundSlides();
});

function boundSlides() {
  const containerRect = slider.getBoundingClientRect();
  const cardsRect = cards.getBoundingClientRect();

  if (parseInt(cards.style.left) > 0) {
    cards.style.left = 0;
  } else if (cardsRect.right < containerRect.right) {
    cards.style.left = `-${cardsRect.width - containerRect.width}px`;
  }
} 



const accordions = document.getElementById("accordions");


accordions.addEventListener("click", (event) => {
  
  if (!event.target.dataset.question) return;


  const contentNode = event.target.nextElementSibling;
  contentNode.classList.toggle("hidden");

  event.target.classList.toggle("text-blue-600");






})