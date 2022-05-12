function solve(input) {
  let examHour = Number(input[0]);
  let examMinute = Number(input[1]);
  let arrivalHour = Number(input[2]);
  let arrivalMinute = Number(input[3]);

  let totalExamMinute = examHour * 60 + examMinute;
  let totalArrivalMin = arrivalHour * 60 + arrivalMinute;

  let difference = Math.abs(totalArrivalMin - totalExamMinute);
  let hourDiff = Math.floor(difference / 60);
  let minuteDiff = difference % 60;
  if(minuteDiff === 0 ||(minuteDiff < 10 && hourDiff > 0)){
    minuteDiff = `0${minuteDiff}`
  }
  if (totalArrivalMin === totalExamMinute) {
    console.log("On time");
  } else if (totalArrivalMin > totalExamMinute && difference < 60) {
    console.log("Late");
    console.log(`${minuteDiff} minutes after the start`);
  } else if (totalArrivalMin > totalExamMinute && difference >= 60) {
    console.log("Late");
    console.log(`${hourDiff}:${minuteDiff} hours after the start`);
  } else if (difference <= 30) {
    console.log("On Time");
    console.log(`${minuteDiff} minutes before the start`);
  } else if (difference > 30 && difference < 60) {
    console.log("Early");
    console.log(`${minuteDiff} minutes before the start`);
  } else {
    console.log("Early");
    console.log(`${hourDiff}:${minuteDiff} hours before the start`);
  }
}
solve(["9", "30", "9", "50"]);
solve(["9", "00", "10", "30"]);
solve(["10", "00", "10", "00"]);
solve(["9", "00", "8", "30"]);
solve(["14", "00", "13", "55"]);
solve(["11", "30", "10", "55"]);
solve(["16", "00", "15", "00"]);
solve(["11", "30", "8", "12"]);
solve(["11", "30", "12", "29"]);
