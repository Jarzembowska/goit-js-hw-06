function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const div = document.getElementById('controls');
console.log(div.childNodes[1]);
const input = div.childNodes[1];
input.addEventListener('blur', () => {
  input.value;
  // console.log(number);
});

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
let width = 30;
let height = 30;

createBtn.onclick = () => {
  // console.log(input.value);
  if (input.value < 101) {
    for (let i = 0; i < input.value; i += 1) {
      let newElem = document.createElement('div');

      newElem.setAttribute(
        'style',
        'height:' +
          height +
          'px' +
          '; width:' +
          width +
          'px ' +
          ' ;background-color: ' +
          getRandomHexColor()
      );
      boxes.append(newElem);
      width = width + 10;
      height = height + 10;
    }
    console.log(boxes.childNodes);
  } else alert('Wprowadz poprawna wartosc od 1 do 100');
};
const boxes = document.getElementById('boxes');

destroyBtn.onclick = () => {
  boxes.innerHTML = '';
  width = 30;
  height = 30;
};
