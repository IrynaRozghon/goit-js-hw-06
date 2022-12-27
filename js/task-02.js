const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");
console.log(ingredientsList);

ingredientsList.append(
  ...ingredients.map((item) => {
    let itemList = document.createElement("li");
    itemList.textContent = item;
    return itemList;
  })
);
// for (let item of ingredients) {
// let itemList = document.createElement("li");
//   itemList.textContent = item;
//   itemList.classList.add("item");
// ingredientsList.append(itemList);
// }
// 