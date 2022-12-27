function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inpNumber = document.querySelector("#controls input");
console.log(inpNumber);
 
const buttonCreate = document.querySelector("[data-create]");
console.log(buttonCreate);

const buttonDestroy = document.querySelector("[data-destroy]");
console.log(buttonDestroy);

const divBoxes = document.querySelector("#boxes");
console.log(divBoxes);


