function nextDay(year, month, day) {
  let thisDay = new Date(year, (month -= 1), (day += 1));
  let newYear = thisDay.getFullYear();
  let newMonth = thisDay.getMonth();
  let newDate = thisDay.getDate();
  console.log(`${newYear}-${newMonth + 1}-${newDate}`);
}

nextDay(2016, 9, 30);
