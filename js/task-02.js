const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const elementUl = document.querySelector('ul');
ingredients.forEach((elem) => {
  let newElem = document.createElement('li');
  newElem.textContent = elem;
  newElem.className = 'item';
  elementUl.append(newElem);
});
