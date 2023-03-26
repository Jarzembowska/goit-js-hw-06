const textInput = document.getElementById('validation-input');

textInput.addEventListener('blur', () => {
  if (textInput.ariaValueMax.length === parseInt(textInput.database.length)) {
    textInput.classList.add('valid');
    textInput.classList.remove('invalid');
  } else {
    textInput.classList.add('invalid');
    textInput.classList.remove('valid');
  }
});
