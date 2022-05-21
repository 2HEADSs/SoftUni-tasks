function solve(input) {
  let weather = input[0];
  let sudgest = " ";
  if (weather === "sunny") {
    console.log(`It's warm outside!`);
  } else if (weather === "cloudy") {
    console.log(`It's cold outside!`);
  } else {
    console.log(`It's cold outside!`);
  }
}
solve(["sunny"]);
solve(["cloudy"]);
solve(["snowy"]);
