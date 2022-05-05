function solve(input) {
  let name = input[0];
  let count = Number(input[1]);
  let sum = count * 3;
  console.log(
    `The architect ${name} will need ${sum} hours to complete ${count} project/s.`
  );
}
solve(["George", "4"]);
console.log("----------------");
solve(["Sanya", "9"]);
