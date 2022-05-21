function solve(input) {
  let countPeople = Number(input[0]);
  let p9 = 0;
  let p19 = 0;
  let p29 = 0;
  let p39 = 0;
  let p50 = 0;
  let inValid = 0;
  let totalPoint = 0;

  for (i = 1; i <= countPeople; i++) {
    let currentPoints = Number(input[i]);

    if (currentPoints >= 0 && currentPoints <= 9) {
      p9++;
      totalPoint += currentPoints * 0.2;
    } else if (currentPoints >= 10 && currentPoints <= 19) {
      p19++;
      totalPoint += currentPoints * 0.3;
    } else if (currentPoints >= 20 && currentPoints <= 29) {
      p29++;
      totalPoint += currentPoints * 0.4;
    } else if (currentPoints >= 30 && currentPoints <= 39) {
      p39++;
      totalPoint += 50;
    } else if (currentPoints >= 40 && currentPoints <= 50) {
      p50++;
      totalPoint += 100;
    } else if (currentPoints < 0 || currentPoints > 50) {
      inValid++;
      totalPoint /= 2;
    }
  }
  p9 = (p9 / countPeople) * 100;
  p19 = (p19 / countPeople) * 100;
  p29 = (p29 / countPeople) * 100;
  p39 = (p39 / countPeople) * 100;
  p50 = (p50 / countPeople) * 100;
  inValid = (inValid / countPeople) * 100;
  console.log(totalPoint.toFixed(2));
  console.log(`From 0 to 9: ${p9.toFixed(2)}%`);
  console.log(`From 10 to 19: ${p19.toFixed(2)}%`);
  console.log(`From 20 to 29: ${p29.toFixed(2)}%`);
  console.log(`From 30 to 39: ${p39.toFixed(2)}%`);
  console.log(`From 40 to 50: ${p50.toFixed(2)}%`);
  console.log(`Invalid numbers: ${inValid.toFixed(2)}%`);
}
// solve(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"]);
solve(["3", "12", "-23", "46"]);
