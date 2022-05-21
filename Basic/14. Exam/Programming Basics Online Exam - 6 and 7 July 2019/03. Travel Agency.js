function solve(input) {
  let town = input[0];
  let extra = input[1];
  let type = input[2];
  let count = Number(input[3]);
  let sum = 0;

  if (count >= 1) {
    if (town === "Bansko" || town === "Borovets") {
      if (extra === "withEquipment") {
        if (count > 7) {
          count--;
        }
        sum = count * 100;
        if (type === "yes") {
          sum *= 0.9;
        }
        console.log(`The price is ${sum.toFixed(2)}lv! Have a nice time!`);
      } else if (extra === "noEquipment") {
        if (count > 7) {
          count--;
        }
        sum = count * 80;
        if (type === "yes") {
          sum *= 0.95;
        }
        console.log(`The price is ${sum.toFixed(2)}lv! Have a nice time!`);
      } else {
        console.log(`Invalid input!`);
      }
    } else if (town === "Varna" || town === "Burgas") {
      if (extra === "withBreakfast") {
        sum = count * 130;
        if (type === "yes") {
          sum *= 0.88;
        }
        console.log(`The price is ${sum.toFixed(2)}lv! Have a nice time!`);
      } else if (extra === "noBreakfast") {
        sum = count * 100;
        if (type === "yes") {
          sum *= 0.93;
        }
        console.log(`The price is ${sum.toFixed(2)}lv! Have a nice time!`);
      } else {
        console.log(`Invalid input!`);
      }
    } else {
      console.log(`Invalid input!`);
    }
  } else if (count < 1) {
    console.log(`Days must be positive number!`);
  }
}
solve(["Borovets", "noEquipment", "yes", "6"]);
solve(["Bansko", "withEquipment", "no", "2"]);
solve(["Varna", "withBreakfast", "yes", "5"]);
solve(["Burgas", "noBreakfast", "no", "4"]);
solve(["Varna", "withBreakfast", "no", "0"]);
solve(["Gabrovo", "noBreakfast", "no", "2"]);
