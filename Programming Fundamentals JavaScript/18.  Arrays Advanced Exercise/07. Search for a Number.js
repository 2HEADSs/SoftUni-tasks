function searcForNum(originalArr, data) {
  let arrForManipulation = originalArr.slice(0, numForSlice);

  let numForSlice = data[0];
  let countSplice = data[1];
  let numberForSearc = data[2];

  arrForManipulation.splice(0, countSplice);

  let occurs = 0;
  
  for (let el of arrForManipulation) {
    if (el === numberForSearc) {
      occurs++;
    }
  }
  console.log(`Number ${numberForSearc} occurs ${occurs} times.`);
}
searcForNum([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searcForNum([7, 1, 5, 8, 2, 7], [3, 1, 5]);
