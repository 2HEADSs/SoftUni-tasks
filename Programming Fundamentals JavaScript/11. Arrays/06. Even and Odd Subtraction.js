function evenAndOdd(arr) {
  let sumEven = 0;
  let sumOdd = 0;
  let sum = 0;
  for (const num of arr) {
    let current = Number(num);
    if (current % 2 === 0) {
      sumEven += current;
    } else {
      sumOdd += current;
    }
  }
  sum = sumEven - sumOdd;
  console.log(sum);
}
evenAndOdd([1,2,3,4,5,6]);
evenAndOdd([3,5,7,9]);
evenAndOdd([2,4,6,8,10]);
