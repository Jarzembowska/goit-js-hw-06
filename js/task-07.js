const input = document.getElementById('font-size-control');
const text = document.getElementById('text');

text.setAttribute('style', 'font-size: ' + input.value + 'px');
// console.log(input.value);
input.addEventListener('input', () => {
  // text.toggleAttribute('fon-size');
  text.setAttribute('style', 'font-size: ' + input.value + 'px');
  // text.style.fontSize = parseInt(input.value);
  // console.log(text);
});
