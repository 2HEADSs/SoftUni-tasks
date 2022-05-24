function triangleOfNums(n) {
  for (let i = 1; i <= n; i++) {
      sum = ''
    for (let j = 1; j <= i; j++) {
        sum += `${i} `
    }
    console.log(sum);
  }
}
triangleOfNums(3);
triangleOfNums(5);
// triangleOfNums(6);
