function solve(input) {
  let actor = input[0];
  let total = Number(input[1]);
  let jury = Number(input[2]);
  let index = 3;
  let isValid = false;
  let current = 1;

  while (current <= jury) {
    let command = input[index];
    command = command.length;
    index++;
    let points = Number(input[index]);
    total += (command * points) / 2;
    index++;
    current++;
    if (total > 1205) {
      console.log(
        `Congratulations, ${actor} got a nominee for leading role with ${total.toFixed(
          1
        )}!`
      );
      isValid = true;
      break;
    }
  }
  let difference = Math.abs(1250.5 - total);
  if (isValid === false) {
    console.log(`Sorry, ${actor} you need ${difference.toFixed(1)} more!`);
  }
}
solve([
  "Jonny Depp",
  "450",
  "2",
  "Konstantin Velichkov",
  "42.90",
  "Grigor",
  "23.49",
]);
solve([
  "MJ",
  "430",
  "4",
  "Fyre Sofia",
  "50",
  "Black Angus",
  "43",
  "John Snow",
  "39",
  "Freddie Mercury",
  "40",
]);
// solve([
//   "Zahari Baharov",
//   "205",
//   "4",
//   "Johnny Depp",
//   "45",
//   "Will Smith",
//   "29",
//   "Jet Lee",
//   "10",
//   "Matthew Mcconaughey",
//   "39",
// ]);
// solve([
//   "Sandra Bullock",
//   "340",
//   "5",
//   "Robert De Niro",
//   "50",
//   "Julia Roberts",
//   "40.5",
//   "Daniel Day-Lewis",
//   "39.4",
//   "Nicolas Cage",
//   "29.9",
//   "Stoyanka Mutafova",
//   "33",
// ]);
