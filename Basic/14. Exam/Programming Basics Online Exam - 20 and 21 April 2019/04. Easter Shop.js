function solve(input) {
  let starCount = Number(input[0]);
  let inputL = input.length;
  let sold = 0;
  let left = starCount;

  for (let i = 1; i <= inputL; i++) {
    let current = input[i];
    if (current === "Close") {
      console.log(`Store is closed!`);
      console.log(`${sold} eggs sold.`);
      break;
    }
    if (current === "Buy") {
      i++;
      current = Number(input[i]);
      if (current > left) {
        console.log(`Not enough eggs in store!`);
        console.log(`You can buy only ${left}.`);
        break;
      }
      sold += current;
      left -= current;
    }
    if (current === "Fill") {
      i++;
      current = Number(input[i]);
      left += current;
    }
  }
}
solve(["13", "Buy", "8", "Fill", "3", "Buy", "10"]);
solve(["20", "Fill", "30", "Buy", "15", "Buy", "20", "Close"]);
