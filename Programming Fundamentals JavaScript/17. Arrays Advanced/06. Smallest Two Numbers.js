function smallestTwoNums(arr) {
  let arrForManipulation = arr.slice(0);
  let sortedArr = arrForManipulation.sort((a, b) => {
    return a - b;
  });
  let output = sortedArr.slice(0,2);
  console.log(output.join(' '));
}
smallestTwoNums([30, 15, 50, 5]);
smallestTwoNums([3, 0, 10, 4, 7, 3]);
