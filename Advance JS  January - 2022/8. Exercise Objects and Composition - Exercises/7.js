function solve(input) {
  let output = [];
  let splitted = input.shift().split('|');
  let town = splitted[1].trim();
  let latitude = splitted[2].trim();
  let longitude = splitted[3].trim();

  for (let el of input) {
    let obj = {};
    let splittedData = el.split('|');
    obj[town] = splittedData[1].trim();
    obj[latitude] = Number(Number(splittedData[2].trim()).toFixed(2));
    obj[longitude] = Number(Number(splittedData[3].trim()).toFixed(2));
    output.push(obj);
  }
  console.log(JSON.stringify(output));
}
solve([
  '| Town | Latitude | Longitude |',
  '| Sofia | 42.696552 | 23.32601 |',
  '| Beijing | 39.913818 | 116.363625 |',
]);
solve([
  '| Town | Latitude | Longitude |',
  '| Veliko Turnovo | 43.0757 | 25.6172 |',
  '| Monatevideo | 34.50 | 56.11 |',
]);
