function memoryGames(input) {
  let arr = input.shift().split(" ");
  let arrayForManipulation = input.slice(0);
  let numberOfIterate = 0;

  for (let i = 0; i < arrayForManipulation.length; i++) {
    if (arr.length < 1) {
      console.log(`You have won in ${numberOfIterate} turns!`);
      break;
    }
    numberOfIterate++;

    let current = arrayForManipulation[i].split(" ");
    let index1 = Number(current[0]);
    let index2 = Number(current[1]);
    let element1 = arr[index1];
    let element2 = arr[index2];
    if (current[0] === "end") {
      break;
    } else if (index1 === index2 || (index1 < 0 || index1 >= arr.length)||(index2 <0 || index2 >= arr.length)) {
      let middle = arr.length / 2;
      let add1 = `-${numberOfIterate}a`;
      arr.splice(middle, 0, add1, add1);
      console.log(`Invalid input! Adding additional elements to the board`);
    } else if (element1 === element2) {
      console.log(
        `Congrats! You have found matching elements - ${arr[index1]}!`
      );
      if (index1 > index2) {
        arr.splice(index1, 1);
        arr.splice(index2, 1);
      } else {
        arr.splice(index2, 1);
        arr.splice(index1, 1);
      }
    } else if (element1 !== element2) {
      console.log(`Try again!`);
    }
  }
  if (arr.length > 1) {
    console.log(`Sorry you lose :(`);
    console.log(arr.join(' '));
  }
}
memoryGames(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
console.log("--------------------");
memoryGames(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);
console.log("-----------------------");
memoryGames(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
