function solve(input) {
  let voucher = Number(input[0]);
  let left = voucher;
  let sum = 0;
  let movie = 0;
  let others = 0;

  for (let i = 1; i <= input.length; i++) {
    let current = input[i];
    if (current === "End") {
      break;
    }
    if (current.length > 8) {
      sum += current.charCodeAt(0) + current.charCodeAt(1);
      if (left < sum) {
        break;
      }
      movie++;
    } else if (current.length <= 8) {
      sum += current.charCodeAt(0);
      if (left < sum) {
        break;
      }
      others++;
    }
    left -= sum;
  }
  console.log(`${movie}`);
  console.log(`${others}`);
}
solve(["300", "Captain Marvel", "popcorn", "Pepsi"]);
// solve(["1500", "Avengers: Endgame", "Bohemian Rhapsody", "Deadpool 2", "End"]);
//  let currentPrice = currentCockteil.length;
// let ch = 'a'
// let b = ch.charCodeAt(0)
