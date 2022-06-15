function bonusScoringSystem(arr) {
  let countStudents = Number(arr.shift());
  let countLectures = Number(arr.shift());
  let bonus = Number(arr.shift());
  let totalBonus = 0;
  let maxPoint = Number.MIN_SAFE_INTEGER;
  let maxAttendances = 0;

  for (let i = 0; i < arr.length; i++) {
    let attendances = Number(arr[i]);
    if (attendances > maxPoint) {
      maxPoint = attendances;
      maxAttendances = attendances;
      totalBonus = (attendances / countLectures) * (5 + bonus);
    }
  }
  console.log(`Max Bonus: ${Math.ceil(totalBonus)}.`);
  console.log(
    `The student has attended ${Math.ceil(maxAttendances)} lectures.`
  );
}
bonusScoringSystem(["5", "25", "30", "12", "19", "24", "16", "20"]);
// bonusScoringSystem([
//   "10",
//   "30",
//   "14",
//   "8",
//   "23",
//   "27",
//   "28",
//   "15",
//   "17",
//   "25",
//   "26",
//   "5",
//   "18",
// ]);
