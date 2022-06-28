function movingTarget(input) {
  let arr = input.shift().split(" ").map(Number);


  for (let i = 0; i < input.length; i++) {
    let current = input[i].split(" ");
    let command = current[0];
    let firstIndex = +current[1];
    let secondIndex = +current[2];

    if (command === "End") {
      break;
    } else if (command === "Shoot") {
      if (firstIndex in arr) {
        arr[firstIndex] -= secondIndex;
        if (arr[firstIndex] <= 0) {
          arr.splice(firstIndex, 1);
        }
      }
    } else if (command === "Add") {
      if (firstIndex in arr) {
        arr.splice(firstIndex, 0, secondIndex);
      } else {
        console.log(`Invalid placement!`);
      }
    } else if (command === "Strike") {
      let start = firstIndex - secondIndex;
      let end = secondIndex * 2 + 1;
      if (start in arr && end in arr) {
        arr.splice(start, end);
      } else {
        console.log(`Strike missed!`);
      }
    }
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
