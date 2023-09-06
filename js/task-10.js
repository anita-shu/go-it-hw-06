function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const input = document.querySelector('input[type="number"]');
const boxes = document.querySelector("#boxes");

const createBox = () => {
  boxes.innerHTML = "";
  const amount=input.value;

  let  size;
  for (let i = 0; i < amount; i++) {
   size = 30 + i * 10;
    
  }


  const box = document.createElement("div");
    box.style.width =` ${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    console.log(box);
    boxes.append(box);

   
};
const destroyBox = () => {
  boxes.innerHTML = "";
};

create.addEventListener("click", createBox);

destroy.addEventListener("click", destroyBox);
