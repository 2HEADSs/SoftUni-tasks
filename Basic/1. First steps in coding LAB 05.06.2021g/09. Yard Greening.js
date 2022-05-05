function solve(input) {
  let square = Number(input[0]);
  let sum = square * 7.61;
  let totalSum = sum * 0.82;
  let discount = sum * 0.18;
  console.log(`The final price is: ${totalSum.toFixed(2)} lv.`);
  console.log(`The discount is: ${discount.toFixed(2)} lv.`);
}
solve(["550"]);
solve(["150"]);
// "The final price is: {крайна цена на услугата} lv."
// "The discount is: {отстъпка} lv."
