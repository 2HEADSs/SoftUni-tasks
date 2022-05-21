function solve(input) {
  let restDays = Number(input[0]);
  let normSleep = 30000;
  let workDays = 365 - restDays;
  let workDaysPlay = workDays * 63;
  let restDaysPlays = restDays * 127;
  let sumPlayTime = workDaysPlay + restDaysPlays;
  let morePlay = sumPlayTime - normSleep;
  let hoursMore = Math.abs(Math.trunc(morePlay / 60));
  let minutesMore = Math.abs(morePlay % 60);

  if (sumPlayTime > normSleep) {
    console.log(`Tom will run away`);
    console.log(`${hoursMore} hours and ${minutesMore} minutes more for play`);
  } else {
    console.log(`Tom sleeps well`);
    console.log(`${hoursMore} hours and ${minutesMore} minutes less for play`);
  }
}
solve(["20"]);
solve(["113"]);
