function solve(input) {
  let allGarages = new Map();
  for (let line of input) {
    line = line.split(" - ");

    let currentGarage = line[0];
    let currentCar = line[1];

    if (!allGarages.has(currentGarage)) {
      allGarages.set(currentGarage, []);
    }
    allGarages.get(currentGarage).push(currentCar);
  }

  for (let entry of allGarages) {
    console.log(`Garage № ${entry[0]}`);
    for (let singleCar of entry[1]) {
      while (singleCar.includes(":")) {
        singleCar = singleCar.replace(":", " -");
      }
      console.log(`--- ${singleCar}`);
    }
  }
}
solve([
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);
