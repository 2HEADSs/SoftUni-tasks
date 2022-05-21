function solve(input) {
  let bitCoins = Number(input[0]);
  let chineJuan = Number(input[1]);
  let comission = Number(input[2]);

  let bitLv = bitCoins * 1168;
  let chinese = chineJuan * 0.15;
  let chineseLv = chinese * 1.76;
  let total = (bitLv + chineseLv) / 1.95;
  comission = (total * comission) / 100;

  total -= comission;
  console.log(total.toFixed(2));
}
solve(["1", "5", "5"]);
solve(["20", "5678", "2.4"]);
