function solve(input) {
  let year = Number(input[0]);

  let snickers = year * 0.6;
  let clothes = snickers * 0.8;
  let ball = clothes / 4;
  let accesori = ball / 5;
  let total = year + snickers + clothes + ball + accesori;
  console.log(total.toFixed(2));
}
solve(["320"]);
solve(["550"]);
