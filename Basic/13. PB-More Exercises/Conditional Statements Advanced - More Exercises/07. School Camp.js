function solve(input) {
  let season = input[0];
  let gender = input[1];
  let count = Number(input[2]);
  let nights = Number(input[3]);
  let sport = "";
  let sum = 0;

  if (season === "Winter") {
    if (gender === "girls") {
      sum = count * nights * 9.6;
      sport = "Gymnastics";
    } else if (gender === "boys") {
      sum = count * nights * 9.6;
      sport = "Judo";
    } else if (gender === "mixed") {
      sum = count * nights * 10;
      sport = "Ski";
    }
  } else if (season === "Spring") {
    if (gender === "girls") {
      sum = count * nights * 7.2;
      sport = "Athletics";
    } else if (gender === "boys") {
      sum = count * nights * 7.2;
      sport = "Tennis";
    } else if (gender === "mixed") {
      sum = count * nights * 9.5;
      sport = "Cycling";
    }
  } else if (season === "Summer") {
    if (gender === "girls") {
      sum = count * nights * 15;
      sport = "Volleyball";
    } else if (gender === "boys") {
      sum = count * nights * 15;
      sport = "Football";
    } else if (gender === "mixed") {
      sum = count * nights * 20;
      sport = "Swimming";
    }
  }
  if (count >= 50) {
    sum *= 0.5;
  } else if (count >= 20) {
    sum *= 0.85;
  } else if (count >= 10) {
    sum *= 0.95;
  }
  console.log(`${sport} ${sum.toFixed(2)} lv.`);
}
solve(["Spring", "girls", "20", "7"]);
solve(["Winter", "mixed", "9", "15"]);
solve(["Summer", "boys", "60", "7"]);
solve(["Spring", "mixed", "17", "14"]);
