function solve(input) {
  let pairs = 0;

  for (let i = 0; i < input.length; i++) {
    let currentLine = input[i];
    for (let k = 0; k < currentLine.length; k++) {
      let firstElement = currentLine[k];
      if (k !== currentLine.lengh - 1) {
        let secondElement = currentLine[k + 1];
        if (firstElement === secondElement) {
          pairs++;
        }
      }
      if (i !== input.length - 1) {
        let secondLine = input[i + 1];
        let secondLineElement = secondLine[k];
        if (firstElement === secondLineElement) {
          pairs++;
        }
      }
    }
    // if ((i == input.length - 1)) {
    //   break;
    // }
  }
  return pairs;
}
solve([
  ['2', '3', '4', '7', '0'],
  ['4', '0', '5', '3', '4'],
  ['2', '3', '5', '4', '2'],
  ['9', '8', '7', '5', '4'],
]);
solve([
  ['test', 'yes', 'yo', 'ho'],
  ['well', 'done', 'yo', '6'],
  ['not', 'done', 'yet', '5'],
]);
