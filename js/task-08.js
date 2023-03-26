const form = document.querySelector('.login-form');
// console.log(form);
let data = {};
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === '' || password.value === '') {
    return alert('Please fill all the fields!');
  }
  data.email = email.value;
  data.password = password.value;

  console.log(data);
  event.currentTarget.reset();
});
