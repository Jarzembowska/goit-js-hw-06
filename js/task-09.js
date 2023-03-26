function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const span = document.querySelector('.color');
const btn = document.querySelector('.change-color');
span.textContent = '#ffffff';

btn.onclick = function changeColor() {
  const color = getRandomHexColor();
  body.setAttribute('style', 'background-color:' + color);
  span.textContent = color;
};
