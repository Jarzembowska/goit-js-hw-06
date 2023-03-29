function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//deklarujemy zmienną, która będzie nam przechowywała wielkość boxa do momentu zresetowania
let counter = 0;

function createBoxes(quantity) {
  //tworzymy pustą tablicę boxes (dla naszych 'div', które będziemy tworzyć quantity razy),

  const boxes = [];

  // tworzymy pętle for, która rozpocznie się od 0 do quantity razy zwiększając swoją iteracje o i++ (czyli o 1 więcej), aż do siągnięcia wartości quantity

  for (let i = 0; i < quantity; i++) {
    //deklarujemy zmienną box - tworzymy element 'div' w dokumencie html

    const box = document.createElement('div');

    //Ustawiamy style div (box) - wysokość i szerokość
    box.style.width = `${30 + counter * 10}px`;
    box.style.height = `${30 + counter * 10}px`;

    // ustawiamy w stylach zmienną dla background (tła) getRandomHexColor
    box.style.background = getRandomHexColor();
    box.style.margin = '20px';

    // po każdym przejściu pętli wypychamy utworzony box do tablicy boxes
    boxes.push(box);
    counter++;
  }

  //zwracamy tablicę utworzonych boxów ('div')
  return boxes;
}

const div = document.getElementById('controls');
const input = div.childNodes[1];

input.addEventListener('blur', () => {
  input.value;
});

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

createBtn.onclick = () => {
  if (input.value >= 1 && input.value < 101) {
    document.getElementById('boxes').append(...createBoxes(input.value)); // rozpakowujemy tablicę naszych div
  } else alert('Wprowadz poprawna wartosc od 1 do 100');
};

destroyBtn.onclick = () => {
  boxes.innerHTML = ''; // czyści divy z boxes
  input.value = ''; // czyści pole input
  counter = 0; // zeruje wielkość zmiennej w której przechowujemy wielkości box ponownie do 0
};
