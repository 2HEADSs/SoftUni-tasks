function solve(input) {
  let budget = Number(input[0]);
  let yearEnd = Number(input[1]);
  let firstYear = 1800;
  let ivanchoAge = 18;

  for (let year = firstYear; year <= yearEnd; year++) {
    if (year % 2 === 0) {
      budget -= 12000;
    } else {
      budget -= 12000 + 50 * ivanchoAge;
    }
    ivanchoAge++;
  }
  if (budget >= 0) {
    console.log(
      `Yes! He will live a carefree life and will have ${(Math.abs(budget)).toFixed(2)} dollars left.`
    );
  } else {
    console.log(`He will need ${(Math.abs(budget)).toFixed(2)} dollars to survive.`);
  }
}
solve(["50000", "1802"]);
solve(["100000.15", "1808"]);
