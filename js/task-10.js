function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inpNumber = document.querySelector("#controls>input");
console.log(inpNumber);
const buttonCreate = document.querySelector("[data-create]");
console.log(buttonCreate);
const buttonDestroy = document.querySelector("[data-destroy]");
console.log(buttonDestroy);
const divBoxes = document.querySelector("#boxes");
console.log(divBoxes);

function createBoxes(amount) {
const elementsToAdd = []
  for (let i = 0; i < amount; i++) {
       
        divBoxes.style.height = `${30 + 10 * i}px`
        divBoxes.style.width = `${30 + 10 * i}px`
        divBoxes.style.background = getRandomHexColor()
        elementsToAdd.push(divBoxes)
    }
    return elementsToAdd
}
// незакінчена задача, не знаю як далі бути(