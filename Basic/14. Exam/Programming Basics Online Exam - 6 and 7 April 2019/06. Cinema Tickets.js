function solve(input) {
  let movie = "";
  let index = 0;
  let type = "";
  let freeSeats = 0;

  let studentPercent = 0;
  let standardPercent = 0;
  let kidsPercent = 0;

  let sumTickets = 0;
  let sumStandard = 0;
  let sumStudent = 0;
  let sumKid = 0;

  while (movie !== "Finish") {
    movie = input[index];
    index++;
    if (movie === "Finish") {
      break;
    }
    freeSeats = Number(input[index]);
    index++;
    type = input[index];
    index++;

    let count = 0;
    let leftSeats = 0;
    let standart = 0;
    let student = 0;
    let kid = 0;
    let capacityPercent = 0;

    while (type !== "End" || leftSeats <= 0) {
      if (type === "End") {
        break;
      }
      if (type === "student") {
        student++;
      }
      if (type === "standard") {
        standart++;
      }
      if (type === "kid") {
        kid++;
      }
      count++;
      leftSeats = freeSeats - count;
      if (leftSeats <= 0) {
        break;
      }
      type = input[index];
      index++;
    }
    capacityPercent = (count / freeSeats) * 100;
    console.log(`${movie} - ${capacityPercent.toFixed(2)}% full.`);
    sumTickets += count;
    sumStudent += student;
    sumStandard += standart;
    sumKid += kid;
  }
  studentPercent = (sumStudent / sumTickets) * 100;
  standardPercent = (sumStandard / sumTickets) * 100;
  kidPercent = (sumKid / sumTickets) * 100;
  console.log(`Total tickets: ${sumTickets}`);
  console.log(`${studentPercent.toFixed(2)}% student tickets.`);
  console.log(`${standardPercent.toFixed(2)}% standard tickets.`);
  console.log(`${kidPercent.toFixed(2)}% kids tickets.`);
}
solve([
  "Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish",
]);
solve([
  "The Matrix",
  "20",
  "student",
  "standard",
  "kid",
  "kid",
  "student",
  "student",
  "standard",
  "student",
  "End",
  "The Green Mile",
  "17",
  "student",
  "standard",
  "standard",
  "student",
  "standard",
  "student",
  "End",
  "Amadeus",
  "3",
  "standard",
  "standard",
  "standard",
  "Finish",
]);
