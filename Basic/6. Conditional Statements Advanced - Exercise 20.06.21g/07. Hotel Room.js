function solve(input) {
  let month = input[0];
  let count = Number(input[1]);
  let studio = 0;
  let apartment = 0;

  if (month === "May" || month === "October") {
    studio = count * 50;
    apartment = count * 65;
    if (count > 14) {
      studio *= 0.7;
    } else if (count > 7) {
      studio *= 0.95;
    }
  } else if (month === "June" || month === "September") {
    studio = count * 75.2;
    apartment = count * 68.7;
    if (count > 14) {
      studio *= 0.8;
    }
  } else if (month === "July" || month === "August") {
    studio = count * 76;
    apartment = count * 77;
  }
  if (count > 14) {
    apartment *= 0.9;
  }
  console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
  console.log(`Studio: ${studio.toFixed(2)} lv.`);
}
solve(["May", "15"]);
solve(["June", "14"]);
solve(["August", "20"]);
