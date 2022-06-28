function solve(input) {
  let planList = input.shift();
  while (input[0] !== "Travel") {
    let [command, first, second] = input.shift().split(":");

    if (command === "Add Stop") {
      let index = Number(first);
      if (index >= 0 && index < planList.length) {
        let left = planList.substring(0, first);
        let right = planList.substring(first);
        planList = left + second + right;
      }
    } else if (command === "Remove Stop") {
      let start = Number(first);
      let end = Number(second);
      if (
        start >= 0 &&
        start < planList.length &&
        end >= 0 &&
        end < planList.length
      ) {
        let left = planList.substring(0, start);
        let right = planList.substring(end + 1);
        planList = left + right;
      }
    } else if (command === "Switch") {
      let oldString = new RegExp(first, "g");
      let newString = second;
      planList = planList.replace(oldString, newString);
    }
    console.log(planList);
  }
  console.log(`Ready for world tour! Planned stops: ${planList}`);
}
solve([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
