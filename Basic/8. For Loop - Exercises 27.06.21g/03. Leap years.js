function solve(input) {
  let startYear = Number(input[0]);
  let endYear = Number(input[1]);
  for (let i = startYear; i <= endYear; i += 4) {
    console.log(i);
  }
}
solve(["1908", "1919"]);
console.log("-------------");
solve(["2000", "2011"]);
console.log("-------------");
solve(["1584", "1597"]);
