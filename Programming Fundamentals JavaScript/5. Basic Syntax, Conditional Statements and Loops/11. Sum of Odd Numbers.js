function sumOfOddNums(n) {
  let sum = 0;

  for (let i = 0; i <= 100; i++) {
    if (n > 0) {
      if (i % 2 != 0) {
        console.log(i);
        sum += i;
        n--;
      }
    }
  }
  console.log(`Sum: ${sum}`);
}
sumOfOddNums(5);
sumOfOddNums(3);
