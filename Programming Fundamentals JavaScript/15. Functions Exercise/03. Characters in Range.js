function charInRange(firstChar, secondChar) {
  let result = [];
  let fisrtSymbolAsNumber = firstChar.charCodeAt(0);
  let secondSymbolAsNumber = secondChar.charCodeAt(0);
  let start = Math.min(fisrtSymbolAsNumber, secondSymbolAsNumber);
  let end = Math.max(fisrtSymbolAsNumber, secondSymbolAsNumber);

  for (let i = start + 1; i < end; i++) {
    let currentElement = String.fromCharCode(i);
    result.push(currentElement);
  }
  console.log(result.join(" "));
}
charInRange("a", "d");
charInRange("#", ":");
charInRange("C", "#");
