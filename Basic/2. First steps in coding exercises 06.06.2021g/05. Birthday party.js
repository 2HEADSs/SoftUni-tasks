function solve(input) {
  let hallPrice = Number(input[0]);
  let cake = hallPrice * 0.2;
  let drinks = cake * 0.55;
  let animator = hallPrice / 3;
  let sum = hallPrice + cake + drinks + animator;
  console.log(sum);
}
solve(["2250"]);
solve(["3720"]);
