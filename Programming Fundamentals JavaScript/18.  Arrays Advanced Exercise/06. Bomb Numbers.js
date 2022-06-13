function bomb(arrOfNums, bombData) {
  let arrForManipulation = arrOfNums.slice(0);
  let bombNum = bombData[0];
  let power = bombData[1];

  while (arrForManipulation.includes(bombNum)) {
    let index = arrForManipulation.indexOf(bombNum);
    let startSliced = index - power;
    let countDeletedElements = power * 2 + 1;
    if (startSliced < 0) {
      countDeletedElements += startSliced;
      startSliced = 0;
    }
    arrForManipulation.splice(startSliced, countDeletedElements);
  }
  let sum = arrForManipulation.reduce((a, b) => {
    return a + b;
  }, 0);

  console.log(sum);
}
bomb([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bomb([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bomb([1, 7, 7, 1, 2, 3], [7, 1]);
bomb([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
