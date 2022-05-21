function firm(input) {
  let hoursNeeded = Number(input[0]);
  let days = Number(input[1]);
  let workers = Number(input[2]);
  let sumDays = days * 0.9;
  let overTime = workers * days * 2;
  let sumTime = overTime + sumDays * 8;
  let timeDifference = Math.floor(sumTime - hoursNeeded);
  if (sumTime >= hoursNeeded) {
    console.log(`Yes!${timeDifference} hours left.`);
  } else {
    console.log(`Not enough time!${Math.abs(timeDifference)} hours needed.`);
  }
}
firm(["90", "7", "3"]);
firm(["99", "3", "1"]);
