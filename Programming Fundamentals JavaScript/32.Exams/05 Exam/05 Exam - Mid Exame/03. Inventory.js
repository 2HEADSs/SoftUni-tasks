function solve(input) {
  let itemsArr = input.shift().split(", ");
  let index = 0;
  for (let i = 0; i < input.length; i++) {
    let current = input[i].split(" - ");
    if (current == "Craft!") {
      break;
    }
    let command = current[0];
    let type = current[1];

    if (command === "Collect") {
      if (itemsArr.indexOf(type) < 0) {
        itemsArr.push(type);
      }
    } else if (command === "Drop") {
      index = itemsArr.indexOf(type);
      if (index >= 0) {
        itemsArr.splice(index, 1);
      }
    } else if (command === "Combine Items") {
      let modified = type.split(":");
      let oldItem = modified[0];
      let newItem = modified[1];
      index = itemsArr.indexOf(oldItem);
      if (index >= 0) {
        itemsArr.splice(index + 1, 0, newItem);
      }
    } else if (command === "Renew") {
      index = itemsArr.indexOf(type);
      if (index >= 0) {
        let tempItem = itemsArr.slice(index, index + 1);
        itemsArr.splice(index, 1);
        itemsArr.push(tempItem);
      }
    }
  }
  console.log(itemsArr.join(", "));
}
solve(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);
solve([
  "Iron, Sword",
  "Drop - Bronze",
  "Combine Items - Sword:Bow",
  "Renew - Iron",
  "Craft!",
]);
