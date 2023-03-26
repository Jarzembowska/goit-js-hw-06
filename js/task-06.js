const textInput = document.getElementById('validation-input');

textInput.addEventListener('blur', () => {
  if (textInput.value.length === parseInt(textInput.dataset.length)) {
    textInput.classList.add('valid');
    textInput.classList.remove('invalid');
  } else {
    textInput.classList.add('invalid');
    textInput.classList.remove('valid');
  }
});
