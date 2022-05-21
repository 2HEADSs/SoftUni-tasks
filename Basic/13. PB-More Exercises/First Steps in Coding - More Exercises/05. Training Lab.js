function solve(input) {
  let w = Number(input[0]) * 100;
  let h = Number(input[1]) * 100 - 100;
  let desk = 70;
  let sumDesk = Math.trunc(h / desk);
  let rows = 120;
  let sumRows = Math.trunc(w / rows);
  let count = sumDesk * sumRows - 3;
  console.log(count);
}
solve(["15", "8.9"]);
solve(["8.4", "5.2"]);
