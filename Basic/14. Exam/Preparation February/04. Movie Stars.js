function stars(input) {
  let budget = Number(input[0]);
  let index = 1;
  let currant = input[index];
  let isFalit = false;
  let salary = 0;
  while (currant !== "ACTION") {
    let name = currant;
    if (name.length <= 15) {
      index++;
      salary = Number(input[index]);
      budget -= salary;
    } else {
      salary = budget * 0.2;
      budget -= salary;
    }
    index++;
    currant = input[index];
    if (budget <= 0) {
      isFalit = true;
      break;
    }
  }

  if (!isFalit) {
    console.log(`We are left with ${budget.toFixed(2)} leva.`);
  } else {
    console.log(`We need ${(Math.abs(budget).toFixed(2))} leva for our actors.`);
  }
}
stars(["1000",
    "John Cena",
    "800",
    "Freddy Kim",
    "3000",
    "ACTION"])
// stars([
//   "90000",
//   "Christian Bale",
//   "70000.50",
//   "Leonard DiCaprio",
//   "Kevin Spacey",
//   "24000.99",
// ]);
// stars([
//   "170000",
//   "Ben Affleck",
//   "40000.50",
//   "Zahari Baharov",
//   "80000",
//   "Tom Hanks",
//   "2000.99",
//   "ACTION",
// ]);
