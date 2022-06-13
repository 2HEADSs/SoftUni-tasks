function buildAWall(input) {
  let arr = input.sort((a, b) => a - b);
  //   for (let i = 0; i < input.length; i++) {
  //     let current = Number(input[0]);
  //     arr.push(current);
  //   }
  let output = [];
  let concreteForYard = 195;
  let totalConcrete = 0;
  let peaceNotDone = false;
  while (Number(arr[0]) < 30) {
    let sumAllCrewForDay = 0;
    for (let i = 0; i < arr.length; i++) {
      let currentPeaceOfTheWall = Number(arr[i]);
      if (currentPeaceOfTheWall < 30) {
        arr[i] = currentPeaceOfTheWall + 1;
        sumAllCrewForDay += concreteForYard;
        peaceNotDone = true;
      }
    }
    if (peaceNotDone) {
      totalConcrete += sumAllCrewForDay;
      output.push(sumAllCrewForDay);
      //   console.log(sumAllCrewForDay);
    }
  }
  output.toString();
  let sum = totalConcrete * 1900;
  console.log(output.join(", "));
  console.log(`${sum} pesos`);
}
buildAWall([17]);
buildAWall([17, 22, 17, 19, 17]);
