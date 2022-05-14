function solve(input) {
  let index = 0;
  let command = input[index];
  index++;

  while (command !== "Stop") {
    let name = command;
    console.log(name);
    command = input[index];
    index++;
  }
}
solve([
  "Nakov",
  "SoftUni",
  "Sofia",
  "Bulgaria",
  "SomeText",
  "Stop",
  "AfterStop",
  "Europe",
  "HelloWorld",
]);
console.log("-----------------");
solve([
  "Sofia",
  "Berlin",
  "Moscow",
  "Athens",
  "Madrid",
  "London",
  "Paris",
  "Stop",
  "AfterStop",
]);
