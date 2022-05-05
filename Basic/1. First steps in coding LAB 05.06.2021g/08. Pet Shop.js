function solve(input) {
  let dogs = Number(input[0]);
  let other = Number(input[1]);
  let foodDogs = dogs * 2.5;
  let foodOther = other * 4;
  let sum = foodDogs + foodOther;
  console.log(`${sum} lv.`);
}
solve(["5", "4"]);
console.log("-------------");
solve(["13", "9"]);
// "{крайната сума} lv."
