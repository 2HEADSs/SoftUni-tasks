function arrayModifier(arr) {
  let startArray = arr.shift().split(" ");
  let newArr = [];

  let line = arr.shift();
  while (line !== "end") {
    line = line.split(" ");
    let command = line[0];
    let first = Number(line[1]);
    let second = Number(line[2]);

    switch (command) {
      case "swap":
        swap(first, second);
        break;
      case "multiply":
        multiply(first, second);
        break;
      case "decrease":
        decrease(startArray);
        break;
    }
    line = arr.shift();
  }
  console.log(startArray.join(", "));

  function swap(firstIndex, secondIndex) {
    let temp = startArray[firstIndex];
    startArray[firstIndex] = startArray[secondIndex];
    // let spliced = startArray.splice(firstIndex, 1);
    startArray[secondIndex] = temp;
  }
  function multiply(firstIndex, secondIndex) {
    startArray[firstIndex] =
      Number(startArray[firstIndex]) * Number(startArray[secondIndex]);
  }
  function decrease(tempArr) {
    for (let index of tempArr) {
      index = Number(index);
      index -= 1;
      newArr.push(index);
    }
    startArray = newArr;
  }
}
arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
arrayModifier([
  "1 2 3 4",
  "swap 0 1",
  "swap 1 2",
  "swap 2 3",
  "multiply 1 2",
  "decrease",
  "end",
]);
