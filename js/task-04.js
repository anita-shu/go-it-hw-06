const counter = document.querySelector("counter");
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');

let value = document.querySelector("#value");
let counterValue = 0;

const handleClick = () => {
  counterValue++;
  value.textContent = counterValue;
};

increment.addEventListener("click", handleClick);
decrement.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});