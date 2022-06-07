function mergeArrays(firstArr, secondArr) {
  let newArr = [];
  let lengthOfFirstArr = firstArr.length;
  for (let i = 0; i < lengthOfFirstArr; i++) {
    let element;
    if (i % 2 == 0) {
      element = Number(firstArr[i]) + Number(secondArr[i]);
    } else {
      element = firstArr[i] + secondArr[i];
    }
    newArr.push(element);
  }
  let joinElement = " - ";
  console.log(newArr.join(joinElement));
}
mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
mergeArrays(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);
