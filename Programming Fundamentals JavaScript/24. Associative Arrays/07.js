function solve(input) {
  let listOfNeighborhoods = input.shift().split(", ");
  let neighbourObject = {};

  for (let el of listOfNeighborhoods) {
    neighbourObject[el] = [];
  }

  for (let data of input) {
    data = data.split(" - ");
    let neighbourhood = data[0];
    let person = data[1];
    if (neighbourObject.hasOwnProperty(neighbourhood)) {
      neighbourObject[neighbourhood].push(person);
    }
  }
  let sorted = Object.entries(neighbourObject);
  sorted.sort((a, b) => b[1].length - a[1].length);

  for (let sortedList of sorted) {
    let neighbourhoodForPrint = sortedList[0];
    let countInhabitants = sortedList[1];
    
    console.log(`${neighbourhoodForPrint}: ${countInhabitants.length}`);
    for(let person of countInhabitants){
        console.log(`--${person}`);
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
