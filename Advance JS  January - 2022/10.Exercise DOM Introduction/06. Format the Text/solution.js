function solve() {
  let input = document.getElementById('input').value;
  let output = input.split('.').filter((s) => s !== '');
  let textPlace = document.getElementById('output');

  while (output.length > 0) {
    let text = output.splice(0, 3).join('.') + '.';
    let p = document.createElement('p');
    p.textContent = text;
    textPlace.appendChild(p);
  }
}
