function solve(input) {
  let parking = {};
  for (let line of input) {
    line = line.split(", ");
    let command = line[0];
    let car = line[1];

    if (command === "IN") {
      parking[car] = command;
    } else {
      delete parking[car];
    }
  }
  let keys = Object.keys(parking);
  let sorted = keys.sort((a, b) => a[0].localeCompare(b[0]));
  if (sorted.length === 0) {
    console.log("Parking Lot is Empty");
  } else {
      console.log(sorted.join("\n"));
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
