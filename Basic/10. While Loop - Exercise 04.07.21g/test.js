function whileDemo() {
  let a = 0;
  while (a < 5) {
      a++
    if (a === 3) {
      console.log("You hit 3");
      continue;
    }
    console.log(a);
  }
}
whileDemo();
