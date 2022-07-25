function addItem() {
  let ulElement = document.getElementById('items');
  let inputElement = document.getElementById('newItemText');
  let newLiElement = document.createElement('li');
  let inputText = inputElement.value;
  newLiElement.textContent = inputText;

  let button = document.createElement('a');
  button.href = '#';
  button.textContent = '[Delete]';
  newLiElement.appendChild(button);
  button.addEventListener('click', removeElement);

  ulElement.appendChild(newLiElement);

  //   //Second Way
  //   let inputElement = document.getElementById('newItemText');
  //   let liElement = document.createElement('li');
  //   liElement.textContent = inputElement.value;
  //   document.getElementById('items').appendChild(liElement);

  //Nice to have
  inputElement.value = '';

  function removeElement(e) {
    let parent = e.target.parentNode;
    parent.remove();
  }
}
