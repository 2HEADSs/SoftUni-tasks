function fuelMoney(distance, passengers, price) {
  let neededFuel = (distance / 100) * 7;
  neededFuel += passengers * 0.1;
  let neededMoney = neededFuel * price;
  console.log(`Needed money for that trip is ${neededMoney} lv.`);
}
fuelMoney(260, 9, 2.49);
fuelMoney(90, 14, 2.88);
