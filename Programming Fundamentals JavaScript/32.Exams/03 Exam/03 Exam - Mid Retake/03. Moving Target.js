function movingTarget(input) {
  let arr = input.shift().split(" ").map(Number);

  let inxLoop = 0;
  let current = input[inxLoop];

  while (current !== "End") {
    let action = current.split(" ");
    let command = action[0];
    let index = Number(action[1]);
    let power = Number(action[2]);

    if (command === "Shoot") {
      if (index >= 0 && index < arr.length) {
        let num = arr[index];
        let difference = num - power;
        if (difference <= 0) {
          arr.splice(index, 1);
        } else {
          arr[index] = difference;
        }
      }
    } else if (command === "Add") {
      if (index >= 0 && index < arr.length) {
        arr.splice(index, 0, power);
      } else {
        console.log("Invalid placement!");
      }
    } else if (command === "Strike") {
      let start = index - power;
      let end = power * 2 + 1;
      if (start < 0 || end > arr.length) {
        console.log("Strike missed!");
      } else if (start >= 0 && end <= arr.length) {
        arr.splice(start, end);
      }
    }
    inxLoop++;
    current = input[inxLoop];
  }
  console.log(arr.join("|"));
}
movingTarget([
  "52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 22 3",
  "End",
]);
movingTarget(["1 2 3 4 5", "Strike 0 1", "End"]);
