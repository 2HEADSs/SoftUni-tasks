function solve(input) {
  let index = 0;
  let command = input[index];

  while (command !== "Stop") {
    let name = command;
    console.log(name);
    index++;
    command = input[index];
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
