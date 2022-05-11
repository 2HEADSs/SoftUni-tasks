function solve(input) {
  let hour = Number(input[0]);
  let day = input[1];

  if (day !== "Sunday" && hour >= 10 && hour <= 18) {
    console.log("open");
  } else {
    console.log("closed");
  }
}
solve(["11", "Monday"]);
solve(["19", "Friday"]);
solve(["11", "Sunday"]);
