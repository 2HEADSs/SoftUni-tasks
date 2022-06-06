function biggestOf3(a, b, c) {
  let newNum = [a, b, c];
  let biggest = Number.MIN_SAFE_INTEGER;
  for (const n of newNum) {
    if (n > biggest) {
      biggest = n;
    }
  }
  console.log(biggest);
}
biggestOf3(-2, 7, 3);
biggestOf3(130, 5, 99);
biggestOf3(43, 43.2, 43.1);
