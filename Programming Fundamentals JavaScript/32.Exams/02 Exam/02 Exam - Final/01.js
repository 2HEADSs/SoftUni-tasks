function solve(input) {
  let planList = input.shift();
  let actions = {
    "Add Stop": add,
    "Remove Stop": remove,
    "Switch": swap,
  };

  while (input[0] !== "Travel") {
      let [command,first,second] = input.shift().split(":");
    // let line = input.shift().split(":");
    // let command = line[0];
    // let first = line[1];
    // let second = line[2];
    let action = actions[command];
    action(first, second);
    console.log(planList);
  }
  console.log(`Ready for world tour! Planned stops: ${planList}`);

  function add(index, string) {
    index = Number(index);
    if (indexValid(index)) {
      let left = planList.substring(0, index);
      let right = planList.substring(index);
      planList = left + string + right;
    }
  }

  function remove(start, end) {
    start = Number(start);
    end = Number(end);

    if (indexValid(start) && indexValid(end)) {
      let left = planList.substring(0, start);
      let right = planList.substring(end + 1);
      planList = left + right;
    }
  }

  function swap(oldString, newString) {
    let pattern = new RegExp(oldString, "g");
    planList = planList.replace(pattern, newString);
  }

  function indexValid(index) {
    return index >= 0 && index < planList.length;
  }
}
solve([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
