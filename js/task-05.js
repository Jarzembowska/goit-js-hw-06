const nameimput = document.getElementById('name-input');
const nameoutput = document.getElementById('name-output');

nameimput.addEventListener('input', (event) => {
  nameoutput.textContent = event.currentTarget.value;
  if (nameoutput.textContent.length === 0) nameoutput.textContent = 'Anonimus';
});
