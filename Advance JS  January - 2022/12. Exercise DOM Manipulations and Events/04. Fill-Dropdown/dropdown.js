function addItem() {
    let textElement = document.getElementById('newItemText');
    let valueElement = document.getElementById('newItemValue');
    let option = document.createElement('option');
    option.value = valueElement.value;
    option.text = textElement.value;

    let dropMenu = document.getElementById('menu');
    dropMenu.appendChild(option);
    textElement.value = '';
    valueElement.value = '';
  }


/*
function addItem() {
    let dropdownMenu = document.querySelector('#menu');
    let textField = document.querySelector('#newItemText');
    let valueField = document.querySelector('#newItemValue');

    let optionElement = document.createElement('option');
    optionElement.text = textField.value;
    optionElement.value = valueField.value;
    dropdownMenu.appendChild(optionElement);

    textField.value = '';
    valueField.value = '';
}
*/