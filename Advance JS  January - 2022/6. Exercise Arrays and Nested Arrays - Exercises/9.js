function solve(arr) {
  let bool = true;
  let arrOfSum = [];
  let colOne = [];
  let colTwo = [];
  let colThree = [];

  for (let i = 0; i < arr.length; i++) {
    let sumRow = arr[i].reduce((acc, el) => acc + el, 0);

    colOne.push(arr[i][0]);
    colTwo.push(arr[i][1]);
    colThree.push(arr[i][2]);

    arrOfSum.push(sumRow);
  }
  colOne = colOne.reduce((acc, el) => acc + el, 0);
  colTwo = colTwo.reduce((acc, el) => acc + el, 0);
  colThree = colThree.reduce((acc, el) => acc + el, 0);
//   console.log(arrOfSum);
  console.log(arrOfSum.every((el) => el === colOne));
}
solve([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
solve([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
solve([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]);
