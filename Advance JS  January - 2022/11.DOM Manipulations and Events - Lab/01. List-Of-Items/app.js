function addItem() {
  let ulElement = document.getElementById('items');
  let inputElement = document.getElementById('newItemText');

  let newLiElement = document.createElement('li');
  let inputText = inputElement.value;
  newLiElement.textContent = inputText;
  ulElement.appendChild(newLiElement);

//   //Second Way
//   let inputElement = document.getElementById('newItemText');
//   let liElement = document.createElement('li');
//   liElement.textContent = inputElement.value;
//   document.getElementById('items').appendChild(liElement);

  //Nice to have 
  inputElement.value = ''
}
