function harvest(input) {
  let squeare = Number(input[0]);
  let grapesForOneSq = Number(input[1]);
  let littersNeed = Number(input[2]);
  let countWorkers = Number(input[3]);
  let sumGrapes = grapesForOneSq * squeare;
  let littersWine = (sumGrapes * 0.4) / 2.5;
  let leftPerWorker = (littersWine - littersNeed) / countWorkers;
  if (littersWine < littersNeed) {
    console.log(`It will be a tough winter! More ${Math.trunc(littersNeed - littersWine)} liters wine needed.`);
  } else {
    console.log(`Good harvest this year! Total wine: ${Math.trunc(littersWine)} liters.`);
    console.log(`${Math.ceil(littersWine - littersNeed)} liters left -> ${Math.ceil(leftPerWorker)} liters per person.`);
  }
}
harvest(["650", "2", "175", "3"]);
harvest(["1020", "1.5", "425", "4"]);
