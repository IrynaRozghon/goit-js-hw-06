const inputControl = document.querySelector("#font-size-control");
console.log(inputControl);
const spantext = document.querySelector("#text");
console.log(spantext);

inputControl.addEventListener("input", (event) => {
  spantext.style.fontSize = inputControl.value + 'px';
});
