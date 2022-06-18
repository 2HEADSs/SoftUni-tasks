function meeting(arr) {
  let meetingList = {};

  for (let line of arr) {
    line = line.split(" ");
    let weekday = line[0];
    let person = line[1];

    if (!meetingList.hasOwnProperty(weekday)) {
      meetingList[weekday] = person;
      console.log(`Scheduled for ${weekday}`);
    } else {
      console.log(`Conflict on ${weekday}!`);
    }
  }

  for (let keyOfList in meetingList) {
    console.log(`${keyOfList} -> ${meetingList[keyOfList]}`);
  }
}
meeting(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
// meeting([
//   "Friday Bob",
//   "Saturday Ted",
//   "Monday Bill",
//   "Monday John",
//   "Wednesday George",
// ]);
