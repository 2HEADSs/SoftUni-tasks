function blackFlag(arr) {
  let days = Number(arr[0]);
  let dailyPlunder = Number(arr[1]);
  let expectedPlunder = Number(arr[2]);
  let daysOfPlunder = 0;
  let totalPlunder = 0;

  for (let i = 0; i < days; i++) {
    daysOfPlunder++;
    totalPlunder += dailyPlunder;
    if (daysOfPlunder % 3 === 0) {
      totalPlunder += dailyPlunder * 0.5;
    }
    if (daysOfPlunder % 5 == 0) {
      totalPlunder *= 0.7;
    }
  }
  if(totalPlunder >= expectedPlunder){
      console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
  } else {
      let percentage = totalPlunder / (expectedPlunder / 100)
      console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
  }
}
blackFlag(["5", "40", "100"]);
blackFlag(["10", "20", "380"]);
