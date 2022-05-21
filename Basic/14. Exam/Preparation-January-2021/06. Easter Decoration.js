function decoration(input) {
  let index = 0;
  let countPeople = Number(input[index]);
  index++;
  let totalSum = 0;
  let command = input[index];
  //   index++;
  for (let i = 1; i <= countPeople; i++) {
    let productCount = 0;
    let currantBill = 0;
    while (command !== "Finish") {
      let product = command;
      switch (product) {
        case "basket":
          currantBill += 1.5;
          break;
        case "wreath":
          currantBill += 3.8;
          break;
        case "chocolate bunny":
          currantBill += 7;
          break;
      }
      productCount++;
      index++;
      command = input[index];
    }
    if (productCount % 2 == 0) {
      currantBill *= 0.8;
    }
    console.log(
      `You purchased ${productCount} items for ${currantBill.toFixed(2)} leva.`
    );
    index++;
    command = input[index];
    totalSum += currantBill;
  }
  totalSum = totalSum / countPeople;
  console.log(`Average bill per client is: ${totalSum.toFixed(2)} leva.`);
}
decoration([
  "2",
  "basket",
  "wreath",
  "chocolate bunny",
  "Finish",
  "wreath",
  "chocolate bunny",
  "Finish",
]);
decoration([
  "1",
  "basket",
  "wreath",
  "chocolate bunny",
  "wreath",
  "basket",
  "chocolate bunny",
  "Finish",
]);
