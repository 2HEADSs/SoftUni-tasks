function solve(input) {
  let startList = input.shift();
  let wholeCommand = input.shift();
  while (wholeCommand !== "Travel") {
    let [command, first, second] = wholeCommand.split(":");
    if (command === "Add Stop") {
      first = Number(first);
      if (first >= 0 && first <= startList.length) {
        let left = startList.substring(0, first);
        let right = startList.substring(first);
        startList = left + second + right;
      }
    } else if (command === "Remove Stop") {
      let start = Number(first);
      let end = Number(second);
      if (
        start >= 0 &&
        start < startList.length &&
        end >= 0 &&
        end < startList.length
      ) {
        let left = startList.substring(0, start);
        let right = startList.substring(end + 1);
        startList = left + right;
      }
    } else if (command === "Switch") {
      let pattern = new RegExp(first, "g");
      let newString = second;
      startList = startList.replace(pattern, newString);
    }
    wholeCommand = input.shift();
  }
  console.log(`Ready for world tour! Planned stops: ${startList}`);
}
solve([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
