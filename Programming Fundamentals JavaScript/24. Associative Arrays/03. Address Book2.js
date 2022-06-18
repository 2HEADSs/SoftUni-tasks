function solve(input) {
    let adressBook = {};
    for (let entry of input) {
      entry = entry.split(":");
      let name = entry[0];
      let adress = entry[1];
      adressBook[name] = adress;
    }
    let entriesOfAdress = Object.entries(adressBook);
    let sortedAdres = entriesOfAdress.sort((a, b) => a[0].localeCompare(b[0]));
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
  