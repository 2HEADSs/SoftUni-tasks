function softUniReception(arr) {
  let firstEmployee = Number(arr[0]);
  let secondEmployee = Number(arr[1]);
  let thirdEmployee = Number(arr[2]);
  let students = Number(arr[3]);
  let totalhour = 1;
  let hour = 0;
  let total = firstEmployee + secondEmployee + thirdEmployee;
  while (students > 0) {
    let left = students - total;
    if (left <= 0) {
      break;
    }
    totalhour++;
    hour++;
    if (hour === 3) {
        totalhour++;
      hour = 0;
    }
    students = left;
  }
  console.log(`Time needed: ${totalhour}h.`);
}
softUniReception(["5", "6", "4", "20"]);
softUniReception(["1", "2", "3", "45"]);
softUniReception(["3", "2", "5", "40"]);
