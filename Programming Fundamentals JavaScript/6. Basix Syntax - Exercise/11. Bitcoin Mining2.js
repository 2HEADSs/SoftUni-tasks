function mining(input) {
  let bitcoins = 0;
  let dayOfFirstBtc = 0;
  let money = 0;
  let trigger = false;
  const btcPrice = 11949.16;
  const goldPrice = 67.51;

  for (i = 1; i <= input.length; i++) {
    // Every 3rd day 30% less
    if (i % 3 == 0) money += input[i - 1] * 0.7 * goldPrice;
    else money += input[i - 1] * goldPrice;
    // Buy BTC when possible
    while (true) {
      if (money >= btcPrice) {
        money -= btcPrice;
        if (trigger == false) {
          dayOfFirstBtc = i;
          trigger = true;
        }
        bitcoins++;
      } else {
        break;
      }
    }
  }

  console.log(`Bought bitcoins: ${bitcoins}`);
  if (dayOfFirstBtc > 0)
    console.log(`Day of the first purchased bitcoin: ${dayOfFirstBtc}`);
  console.log(`Left money: ${money.toFixed(2)} lv.`);
}
mining([3124.15, 504.212, 2511.124]);