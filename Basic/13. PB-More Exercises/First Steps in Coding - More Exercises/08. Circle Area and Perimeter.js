function solve(input) {
  let r = Number(input[0]);
  let area = Math.PI * r * r;
  let perimeter = 2 * Math.PI * r;
  console.log(area.toFixed(2));
  console.log(perimeter.toFixed(2));
}
solve([3]);
solve([4.5]);
