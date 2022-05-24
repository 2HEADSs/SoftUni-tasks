function bitcoinMining(input) {
  let firstDayBuyBitcoin = 0;
  let day = 0;
  let diggingGoldPerDaY = 0;
  let money = 0;
  let bitcoins = 0;
  for (let i = 0; i < input.length; i++) {
    day++;
    let current = Number(input[i]);

    if (day % 3 == 0) {
      diggingGoldPerDaY = current * 0.7;
    } else {
      diggingGoldPerDaY = current;
    }
    money += diggingGoldPerDaY * 67.51;
    if (money >= 11949.16) {
      money -= 11949.16;
      bitcoins++;
    }
    if (bitcoins == 1) {
      firstDayBuyBitcoin = day;
    }
  }
  while (money > 11949.16) {
    money -= 11949.16;
    bitcoins++;
  }
  console.log(`Bought bitcoins: ${bitcoins}`);
  if (bitcoins !== 0) {
    console.log(`Day of the first purchased bitcoin: ${firstDayBuyBitcoin}`);
  }
  console.log(`Left money: ${money.toFixed(2)} lv.`);
}
bitcoinMining([3124.15, 504.212, 2511.124]);
/*
1 Bitcoin = 11949.16 lv.
1 g of gold = 67.51 lv.
*/
