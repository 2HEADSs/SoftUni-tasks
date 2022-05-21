function solve(input) {
  let bakes = Number(input[0]);
  let sugar = 0;
  let flour = 0;
  let sugarPacket = 0;
  let flourPacket = 0;
  let index = 1;
  let maxFlour = Number.MIN_SAFE_INTEGER;
  let maxSugar = Number.MIN_SAFE_INTEGER;

  while (index <= bakes * 2) {
    let current = Number(input[index++]);
    sugar += current;
    if (current > maxSugar) {
      maxSugar = current;
    }
    current = Number(input[index++]);
    flour += current;
    if (current > maxFlour) {
      maxFlour = current;
    }
  }
  sugarPacket = sugar / 950;
  flourPacket = flour / 750;

  console.log(`Sugar: ${Math.ceil(sugarPacket)}`);
  console.log(`Flour: ${Math.ceil(flourPacket)}`);
  console.log(
    `Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`
  );
}
solve(["3", "400", "350", "250", "300", "450", "380"]);
solve(["4", "500", "350", "560", "430", "600", "345", "578", "543"]);
