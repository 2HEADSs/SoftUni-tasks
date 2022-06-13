function train(arr) {
  let wagons = arr.shift().split(" ").map(Number);
  let maxCapacity = Number(arr.shift());
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i].split(" ");
    if (current[0] == "Add") {
      wagons.push(Number(current[1]));
    } else {
      let passengers = Number(current);
      addAndRemove(passengers);
    }
  }
  function addAndRemove(passengers) {
    for (let i = 0; i < wagons.length; i++) {
      let currentPassInWagon = wagons[i];
      let freeSpace = maxCapacity - currentPassInWagon;
      if (passengers <= freeSpace) {
        wagons[i] = currentPassInWagon + passengers;
        passengers = 0;
      }
      if (passengers === 0) {
        break;
      }
    }
  }
  console.log(wagons.join(' '));
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
