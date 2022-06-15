function solve(input) {
  let buscuitsPerDayPerWorker = Number(input.shift());
  let countWortkers = Number(input.shift());
  let otherFactoryBiscuits = Number(input);
  let totalForMonths = 0;

  for (let day = 1; day <= 30; day++) {
    let productionPerDay = buscuitsPerDayPerWorker * countWortkers;
    if (day % 3 === 0) {
      productionPerDay = productionPerDay * 0.75;
      productionPerDay = Math.floor(productionPerDay);
    }
    totalForMonths += productionPerDay;
  }
  console.log(
    `You have produced ${totalForMonths} biscuits for the past month.`
  );
  let difference = 0;
  let percentage = 0;
  if (totalForMonths > otherFactoryBiscuits) {
    difference = totalForMonths - otherFactoryBiscuits;
    percentage = (difference / otherFactoryBiscuits) * 100;
    console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`);
  } else {
    difference = otherFactoryBiscuits - totalForMonths;
    percentage = (difference / otherFactoryBiscuits) * 100;
    console.log(`You produce ${percentage.toFixed(2)} percent less biscuits.`);
  }
  console.log();
}
solve(["78", "8", "16000"]);
console.log("-----------------");
solve(["65", "12", "26000"]);
console.log("-----------------");
solve(["163", "16", "67020"]);
