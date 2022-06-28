function solve(input) {
  let arr = input.shift().split(" ").map(Number);
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    let index = input[i];
    if (index === "End") {
      break;
    } else {
      index = +index;
    }
    if (index in arr) {
      if (arr[index] !== -1) {
        let tempPoint = arr[index];
        arr[index] = -1;
        count++;
        for (let j = 0; j < arr.length; j++) {
          let current = arr[j];
          if (current !== -1) {
            if (current > tempPoint) {
              current -= tempPoint;
              arr[j] = current;
            } else {
              current += tempPoint;
              arr[j] = current;
            }
          }
        }
      }
    }
  }

  console.log(`Shot targets: ${count} -> ${arr.join(" ")}`);
}
solve(["24 50 36 70", "0", "4", "3", "1", "End"]);
solve(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
