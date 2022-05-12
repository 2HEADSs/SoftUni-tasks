function solve(input) {
  let type = input[0];
  let rows = Number(input[1]);
  let columns = Number(input[2]);
  let premierPrice = 12;
  let normalPrice = 7.5;
  let discountPrice = 5;
  let sum = 0;

  switch (type) {
    case "Premiere":
      sum = rows * columns * premierPrice;
      break;
    case "Normal":
      sum = rows * columns * normalPrice;
      break;
    case "Discount":
      sum = rows * columns * discountPrice;
      break;
  }
  console.log(`${sum.toFixed(2)} leva`);
}
solve(["Normal", "21", "13"]);
solve(["Discount", "12", "30"]);
solve[("Premiere", "10", "12")];