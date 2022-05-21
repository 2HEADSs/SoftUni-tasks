function cinemaTickets(input) {
  let movie = "";
  let freeSeats = 0;
  let type = "";
  let index = 0;

  let studentPercent = 0;
  let standardPercent = 0;
  let kidPercent = 0;

  let sumTickets = 0;
  let sumStudent = 0;
  let sumKid = 0;
  let sumStandard = 0;

  while (movie !== "Finish") {
    movie = input[index++];
    if (movie === "Finish") {
      break;
    }
    freeSeats = Number(input[index++]);
    type = input[index++];
    let count = 0;
    let leftSeats = 0;
    let student = 0;
    let standard = 0;
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
        standard++;
      }
      if (type === "kid") {
        kid++;
      }
      count++;
      leftSeats = freeSeats - count;
      if (leftSeats <= 0) {
        break;
      }
      type = input[index++];
    }
    capacityPercent = (count / freeSeats) * 100;
    console.log(`${movie} - ${capacityPercent.toFixed(2)}% full.`);
    sumTickets += count;
    sumStudent += student;
    sumStandard += standard;
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
cinemaTickets([
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
