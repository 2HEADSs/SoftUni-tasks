function solve(input) {
  let h = Number(input[0]);
  let l = Number(input[1]);
  let percent = Number(input[2]) / 100;
  let sumWallForPaint = h * l * 4 - h * l * 4 * percent;

  let inputL = input.length;
  for (let i = 3; i <= inputL; i++) {
    let current = input[i];
    if (current === "Tired!") {
      console.log(`${Math.ceil(sumWallForPaint)} quadratic m left.`);
      break;
    }
    current = Number(input[i]);
    sumWallForPaint -= current;
    if (sumWallForPaint < 0) {
      console.log(`All walls are painted and you have ${Math.abs(
        sumWallForPaint.toFixed(2)
      )} l paint left!
       `);
    } else if (sumWallForPaint === 0) {
      console.log(`All walls are painted! Great job, Pesho!`);
    }
  }
}
solve(["3", "5", "10", "2", "3", "4", "Tired!"]);
