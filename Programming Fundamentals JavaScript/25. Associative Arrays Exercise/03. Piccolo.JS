function solve(input) {
  let parking = {};

  for (element of input) {
    let [command, carNum] = element.split(", ");

    if (command === "IN") {
      parking[carNum] = command;
    } else if (command === "OUT") {
      delete parking[carNum];
    }
  }
  let arrayOfKeys = Object.keys(parking);
  let sortedCars = arrayOfKeys.sort((a, b) => {
    return a.localeCompare(b);
  });

  if (sortedCars.length === 0) {
    console.log("Parking Lot is Empty");
  } else {
    console.log(sortedCars.join("\n"));
  }
}
solve([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
