function primeNumberChecker(num) {
  let isTrue = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isTrue = false;
    }
  }
  console.log(isTrue);
}
primeNumberChecker(7);
primeNumberChecker(8);
primeNumberChecker(81);
