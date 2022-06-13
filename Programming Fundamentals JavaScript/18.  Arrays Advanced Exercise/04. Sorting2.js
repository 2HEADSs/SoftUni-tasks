function sorting(arr) {
  let sorted = arr.sort((a, b) => {
    return a - b;
  });

  let outputArr = [];
  while (sorted.length !== 0) {
    let biggestNum = sorted.pop();
    let smallest = sorted.shift();

    outputArr.push(biggestNum);
    outputArr.push(smallest);
  }

  console.log(outputArr.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
