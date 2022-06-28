function arrayModifier(arr) {
  let startArray = arr.shift().split(" ");
  let newArr = [];

  for (const element of arr) {
    let current = element.split(" ");
    let command = current[0];
    let firstIndex = Number(current[1]);
    let secondIndex = Number(current[2]);

    if (command == "swap") {
      for (let i = 0; i < startArray.length; i++) {
        if (newArr.length == startArray.length) {
          break;
        }
        let tempOne = 0;
        let tempTwo = 0;
        if (i == firstIndex) {
          tempOne = startArray[firstIndex];
          tempTwo = startArray[secondIndex];
          newArr[i] = tempTwo;
          for (let j = i + 1; j < startArray.length; j++) {
            if (j == secondIndex) {
              newArr.push(tempOne);
            } else {
              newArr.push(startArray[j]);
            }
          }
        } else if (i == secondIndex) {
          tempOne = startArray[firstIndex];
          tempTwo = startArray[secondIndex];
          newArr[i] = tempTwo;
        } else {
          newArr.push(startArray[i]);
        }
      }
    }
    if (command == "multiply") {
      for (let i = 0; i < startArray.length; i++) {
        let tempOne = 0;
        if (i == firstIndex) {
          tempOne = startArray[i];
          let tempTwo = startArray[secondIndex];
          newArr[i] = tempOne * tempTwo;
        }
        if (i == secondIndex) {
          newArr[secondIndex] = tempOne;
        } else {
          newArr.push(startArray[i]);
        }
      }
    }
    startArray = newArr;
    newArr = [];
  }
  console.log(newArr);
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
// arrayModifier();
