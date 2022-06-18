function solve(input) {
  let adresBook = {};

  for (let line of input) {
    line = line.split(":");
    let name = line[0];
    let adres = line[1];
    adresBook[name] = adres;
  }
  let entries = Object.entries(adresBook);
  let sortedAdres = entries.sort((a, b) => a[0].localeCompare(b[0]));
  for (let person of sortedAdres) {
    console.log(`${person[0]} -> ${person[1]}`);
  }
}
solve([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
