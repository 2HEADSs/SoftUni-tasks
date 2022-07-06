function solve(month, year) {
  let output = new Date(year,month,0).getDate();
  console.log(output);
}
solve(1, 2012);
solve(2, 2021);
