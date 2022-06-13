function carWash(array) {
  let percentClean = 0;
  let long = array.length;

  for (let i = 0; i < long; i++) {
    let currentCommand = array[i];

    switch (currentCommand) {
      case "soap":
        percentClean += 10;
        break;
      case "water":
        percentClean *= 1.2;
        break;
      case "vacuum cleaner":
        percentClean *= 1.25;
        break;
      case "mud":
        percentClean *= 0.9;
        break;
    }
  }
  console.log(`The car is ${percentClean.toFixed(2)}% clean.`);
}
carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])
