const listWithId = document.querySelectorAll('.item');
console.log('Number of catagories:' + listWithId.length);
console.log('');
listWithId.forEach((elem) => {
  console.log('Category: ' + elem.querySelectorAll('h2').textContent);
  console.log('Elements: ' + elem.querySelectorAll('li').length);
  console.log('');
});
