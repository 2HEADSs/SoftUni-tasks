function solve(input) {
  let celsius = Number(input[0]);
  let farenheit = (celsius / 5) * 9 + 32;
  console.log(farenheit.toFixed(2));
}
solve(["25"]);
solve(["0"]);
solve(["-5.5"]);
solve(["32.3"]);
