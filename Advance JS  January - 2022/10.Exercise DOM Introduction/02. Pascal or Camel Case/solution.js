function solve() {
  let textForChange = document.getElementById('text').value;
  let type = document.getElementById('naming-convention').value;
  textForChange = textForChange.split(' ');
  let result = '';

  for (let word of textForChange) {
    if (type === 'Camel Case') {
      if (result.length === 0) {
        result += word[0].toLowerCase() + word.slice(1).toLowerCase();
      } else {
        result += word[0].toUpperCase() + word.slice(1).toLowerCase();
      }
    } else if (type === 'Pascal Case') {
      result += word[0].toUpperCase() + word.slice(1).toLowerCase();
    } else {
      result = 'Error!';
    }
  }
  let textResult = document.getElementById('result');
  textResult.textContent = result;
}
