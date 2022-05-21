function solve(input) {
  let food = Number(input[0])*1000;
  let index = 1;
  let current = input[index];

  while (current !== "Adopted") {
    current = Number(input[index]);
    food -= current;
    index++;
    current = input[index];
  }
  if (food >= 0) {
    console.log(`Food is enough! Leftovers: ${food} grams.`);
  } else {
    console.log(`Food is not enough. You need ${Math.abs(food)} grams more.`);
  }
}
solve(["4", "130", "345", "400", "180", "230", "120", "Adopted"]);
