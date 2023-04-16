const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById('ingredients');

ingredients.forEach(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.innerText = ingredient;
  itemEl.classList.add('item');
  ingredientsList.append(itemEl);
});
