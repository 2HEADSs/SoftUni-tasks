function solve(input) {
  let fruit = input[0];
  let size = input[1];
  let count = Number(input[2]);
  let sum = 0;

  if (fruit === "Watermelon") {
    if (size === "small") {
      sum = 2 * 56 * count;
    } else {
      sum = 5 * 28.7 * count;
    }
  } else if (fruit === "Mango") {
    if (size === "small") {
      sum = 2 * 36.66 * count;
    } else {
      sum = 5 * 19.6 * count;
    }
  } else if (fruit === "Pineapple") {
    if (size === "small") {
      sum = 2 * 42.1 * count;
    } else {
      sum = 5 * 24.8 * count;
    }
  } else if (fruit === "Raspberry") {
    if (size === "small") {
      sum = 2 * 20 * count;
    } else {
      sum = 5 * 15.2 * count;
    }
  }
  if (sum >= 400 && sum <= 1000) {
    sum *= 0.85;
  } else if (sum > 1000) {
    sum *= 0.5;
  }
  console.log(`${sum.toFixed(2)} lv.`);
}
solve(["Watermelon", "big", "4"]);
solve(["Pineapple", "small", "1"]);
solve(["Raspberry", "small", "50"]);
solve(["Mango", "big", "8"]);
