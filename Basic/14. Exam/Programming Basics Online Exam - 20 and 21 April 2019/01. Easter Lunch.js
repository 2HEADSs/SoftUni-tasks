function solve(input) {
  let cakes = Number(input[0]);
  let eggsCarton = Number(input[1]);
  let biscuitsKG = Number(input[2]);

  let sumCakes = cakes * 3.2;
  let sumEggs = eggsCarton * 4.35;
  let sumBiscuits = biscuitsKG * 5.4;
  let sumPaint = eggsCarton * 12 * 0.15;
  let total = sumCakes + sumEggs + sumBiscuits + sumPaint;
  console.log(total.toFixed(2));
}
solve(["3", "2", "3"]);
solve(["4", "4", "3"]);
