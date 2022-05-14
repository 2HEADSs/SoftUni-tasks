function solve(input) {
  let index = 0;
  let current = input[index];
  let total = 0;

  while (current !== "NoMoreMoney") {
    let money = Number(current);

    if (money < 0) {
      console.log(`Invalid operation!`);
      break;
    }
    total += money;
    console.log(`Increase: ${money.toFixed(2)}`);

    index++;
    current = input[index];
  }
  console.log(`Total: ${total.toFixed(2)}`);
}
solve(["5.51", "69.42", "100", "NoMoreMoney"]);
solve(["120", "45.55", "-150"]);
