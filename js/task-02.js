const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector("#ingredients");
for (let item of ingredients) {
let itemList = document.createElement("li");
  itemList.textContent = item;
  itemList.classList.add("item");
ingredientsList.append(itemList);
}
console.log(ingredientsList);