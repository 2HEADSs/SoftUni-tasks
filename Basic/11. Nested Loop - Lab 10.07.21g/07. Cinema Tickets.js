function solve(input) {
  let index = 0;
  let command = input[index];
  index++;
  let totalTicket = 0;
  let students = 0;
  let standart = 0;
  let kids = 0;

  while (command !== "Finish") {
    let name = command;
    let freeSpace = input[index];
    index++;
    let type = input[index];
    index++;
    let countTicekts = 0;
    while (type !== "End") {
      countTicekts++;
      switch (type) {
        case "student":
          students++;
          break;
        case "standard":
          standart++;
          break;
        case "kid":
          kids++;
          break;
      }
      if (countTicekts >= freeSpace) {
        break;
      }
      type = input[index];
      index++;
    }
    totalTicket += countTicekts;
    let result = (countTicekts / freeSpace) * 100;
    console.log(`${name} - ${result.toFixed(2)}% full.`);
    command = input[index];
    index++;
  }
  students = (students / totalTicket) * 100;
  standart = (standart / totalTicket) * 100;
  kids = (kids / totalTicket) * 100;
  console.log(`Total tickets: ${totalTicket}`);
  console.log(`${students.toFixed(2)}% student tickets.`);
  console.log(`${standart.toFixed(2)}% standard tickets.`);
  console.log(`${kids.toFixed(2)}% kids tickets.`);
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
