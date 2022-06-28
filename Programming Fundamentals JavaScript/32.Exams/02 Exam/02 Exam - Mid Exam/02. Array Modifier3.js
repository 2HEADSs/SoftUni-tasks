function arrMod(input) {
  let arr = input.shift().split(" ").map(Number);

  for (let i = 0; i < input.length; i++) {
    let current = input[i].split(" ");
    let command = current[0];
    let firstIndex = +current[1];
    let secondIndex = +current[2];

    if (command === "swap") {
      let temp1 = arr[firstIndex];
      let temp2 = arr[secondIndex];
      arr[firstIndex] = temp2;
      arr[secondIndex] = temp1;
    } else if (command === "multiply") {
      let sum = arr[firstIndex] * arr[secondIndex];
      arr[firstIndex] = sum;
    } else if (command === "decrease") {
      for (let j = 0; j < arr.length; j++) {
        arr[j] -= 1;
      }
    } else if (command === "end"){
        console.log(arr.join(", "));
    }
  }
}
arrMod([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
arrMod([
  "1 2 3 4",
  "swap 0 1",
  "swap 1 2",
  "swap 2 3",
  "multiply 1 2",
  "decrease",
  "end",
]);
