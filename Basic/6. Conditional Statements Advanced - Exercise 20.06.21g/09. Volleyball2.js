function solve(input) {
  let type = input[0];
  let holidays = Number(input[1]);
  let weekends = Number(input[2]);

  let weekendsInSf = 48 - weekends;
  let playSf = (weekendsInSf * 3) / 4;
  let holidaysSf = (holidays * 2) / 3;
  let sum = playSf + holidaysSf + weekends;
  if(type === "leap"){
    sum *= 1.15;
  }
  console.log(Math.floor(sum));
}
solve(["leap", "5", "2"]);
solve(["normal", "3", "2"]);
solve(["leap", "2", "3"]);
solve(["normal", "11", "6"]);
solve(["leap", "0", "1"]);
solve(["normal", "6", "13"]);
