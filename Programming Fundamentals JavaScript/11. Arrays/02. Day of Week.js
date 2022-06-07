function dayOfWeek(num) {
  let day = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  if(num >=1 && num <=7){
      console.log(day[num-1]);
  } else {
      console.log('Invalid day!');
  }
}
dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);
