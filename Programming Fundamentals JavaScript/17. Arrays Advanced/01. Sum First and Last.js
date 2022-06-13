function sumFirstAndLast(array) {
  let arrForManipulation = array.slice(0).map(Number);

  let first = arrForManipulation.shift();
  let last = arrForManipulation.pop();
  let sum = first + last;
  console.log(sum);
}
sumFirstAndLast(["20", "30", "40"]);
sumFirstAndLast(["5", "10"]);
