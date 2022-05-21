function solve(input) {
  let day = Number(input[0]);
  let hour = Number(input[1]);
  let totalMoney = 0;
  for (let i = 1; i <= day; i++) {
    let money = 0;
    for (let j = 1; j <= hour; j++) {
      if (i % 2 === 0 && j % 2 !== 0) {
        money += 2.5;
      } else if (i % 2 !== 0 && j % 2 === 0) {
        money += 1.25;
      } else {
        money += 1;
      }
    }
    totalMoney += money;
    console.log(`Day: ${i} - ${money.toFixed(2)} leva`);
  }
  console.log(`Total: ${totalMoney.toFixed(2)} leva`);
}
solve(["2", "5"]);
solve(["5", "2"]);
