function solve(input) {
  let adressBook = {};
  for (let entry of input) {
    entry = entry.split(":");
    let name = entry[0];
    let adress = entry[1];
    adressBook[name] = adress;
  }
  let entriesOfAdress = Object.entries(adressBook);
  let sortedAdres = entriesOfAdress.sort((a, b) => {
    keyA = a[0];
    keyB = b[0];
    return keyA.localeCompare(keyB);
  });
  for(let person of sortedAdres){
      console.log(`${person[0]} -> ${person[1]}`);
  }
}
solve([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
