function solve(input) {
  let type = input[0];
  let liters = Number(input[1]);
  if (type === "Diesel") {
    if (liters >= 25) {
      console.log(`You have enough diesel.`);
    } else {
      console.log(`Fill your tank with diesel!`);
    }
  } else if (type === "Gasoline") {
    if (liters >= 25) {
      console.log(`You have enough gasoline.`);
    } else {
      console.log(`Fill your tank with gasoline!`);
    }
  } else if (type === "Gas") {
    if (liters >= 25) {
      console.log(`You have enough gas.`);
    } else {
      console.log(`Fill your tank with gas!`);
    }
  } else {
    console.log(`Invalid fuel!`);
  }
}
solve(["Diesel", "10"]);
solve(["Gasoline", "40"]);
solve(["Gas", "25"]);
solve(["Kerosene", "200"]);
