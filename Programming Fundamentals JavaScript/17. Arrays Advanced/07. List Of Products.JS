function listOfProduct(arr) {
  let sortedArr = arr.sort();
  let arrL = sortedArr.length;
  for (let i = 0; i < arrL; i++) {
    console.log(`${i + 1}.${sortedArr[i]}`);
  }
}
listOfProduct(["Potatoes", "Tomatoes", "Onions", "Apples"]);
listOfProduct(["Watermelon", "Banana", "Apples"]);
