function solve(arr) {
  let result = [];
  let splitted = arr[0].split('|');
  let town = splitted[1].trim();
  let latitude = splitted[2].trim();
  let longitude = splitted[3].trim();
  for (let i = 1; i < arr.length; i++) {
    let obj = {};
    let splittedEntry = arr[i].split('|');
    obj[town] = splittedEntry[1].trim();
    obj[latitude] = Number(Number(splittedEntry[2].trim()).toFixed(2));
    obj[longitude] = Number(Number(splittedEntry[3].trim()).toFixed(2));
    result.push(obj);
  }
  return JSON.stringify(result);
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
