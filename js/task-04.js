let counter = document.getElementById('value');
const decBtn = document.querySelector('button[data-action="decrement"]');
const incBtn = document.querySelector('button[data-action="increment"]');

decBtn.addEventListener('click', () => {
  counter.innerText = parseInt(counter.innerText) - 1;
});

incBtn.addEventListener('click', () => {
  counter.innerText = parseInt(counter.innerText) + 1;
});
