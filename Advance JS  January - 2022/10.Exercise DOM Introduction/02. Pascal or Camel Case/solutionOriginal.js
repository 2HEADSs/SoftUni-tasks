function solve() {
  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let result = '';
  if (convention === 'Camel Case') {
    for (let i = 0; i < text.length; i++) {
      let current = text[i];
      if (current === ' ') {
        i++;
        current = text[i];
        current = current.toUpperCase();
        result += current;
      } else {
        result += current.toLowerCase();
      }
    }
  } else if (convention === 'Pascal Case') {
    for (let i = 0; i < text.length; i++) {
      if (i === 0) {
        result += text[i].toUpperCase();
      } else if (text[i] === ' ') {
        i++;
        result += text[i].toUpperCase();
      } else {
        result += text[i].toLowerCase();
      }
    }
  } else {
    result = 'Error!';
  }
  let resultPlace = document.getElementById('result');
  resultPlace.textContent += result;
}
// solve('this is an example', 'Camel Case');
// solve('secOND eXamPLE', 'Pascal Case');
// solve('Invalid Input', 'Another Case');
