function solve(input) {
  let neighbourhoods = new Map();

  let currentNeibourhoods = input.shift().split(", ");

  for (let neighbourhood of currentNeibourhoods) {
    neighbourhoods.set(neighbourhood, []);
  }

  for (let currentPerson of input) {
    currentPerson = currentPerson.split(" - ");
    let personNeibourhood = currentPerson[0];
    let personName = currentPerson[1];

    if (neighbourhoods.has(personNeibourhood)) {
      neighbourhoods.get(personNeibourhood).push(personName);
    }
  }

  let sortedNeighbourhoods = Array.from(neighbourhoods.entries());
  sortedNeighbourhoods.sort((a, b) => b[1].length - a[1].length);

  for (let currentNeibourhood of sortedNeighbourhoods) {
      let neighbourhoodForPrint = currentNeibourhood[0];
      let personForPrint = currentNeibourhood[1]
    console.log(`${neighbourhoodForPrint}: ${personForPrint.length}`);

    for(let currentPerson of personForPrint){
        console.log(`--${currentPerson}`);
    }
  }
}
solve([
  "Abbey Street, Herald Street, Bright Mews",
  "Bright Mews - Garry",
  "Bright Mews - Andrea",
  "Invalid Street - Tommy",
  "Abbey Street - Billy",
]);
