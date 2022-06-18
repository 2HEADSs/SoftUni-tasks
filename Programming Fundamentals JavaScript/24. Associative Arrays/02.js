function solve(input) {
  let meetingList = {};

  for (let el of input) {
    let [weekday, person] = el.split(" ");
    if (!meetingList.hasOwnProperty(weekday)) {
      meetingList[weekday] = person;
      console.log(`Scheduled for ${weekday}`);
    } else {
      console.log(`Conflict on ${weekday}!`);
    }
  }
  for(let day in meetingList){
      console.log(`${day} -> ${meetingList[day]}`);
  }
}
solve(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
