function solve(input) {
  let index = 0;

  let current = input[index];
  while (current !== "End") {
    let destination = current;
    index++;
    let price = Number(input[index]);
    index++;
    let saved = Number(input[index]);
    while (saved < price) {
      index++;
      saved += Number(input[index]);
    }
    console.log(`Going to ${destination}!`);
    index++;
    current = input[index];
  }
}
solve([
  "Greece",
  "1000",
  "200",
  "200",
  "300",
  "100",
  "150",
  "240",
  "Spain",
  "1200",
  "300",
  "500",
  "193",
  "423",
  "End",
]);
solve([
  "France",
  "2000",
  "300",
  "300",
  "200",
  "400",
  "190",
  "258",
  "360",
  "Portugal",
  "1450",
  "400",
  "400",
  "200",
  "300",
  "300",
  "Egypt",
  "1900",
  "1000",
  "280",
  "300",
  "500",
  "End",
]);
