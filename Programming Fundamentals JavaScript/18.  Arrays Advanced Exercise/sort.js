function sorting(input) {
    let arr = input.slice();
    let bigToSmall = arr.slice();
    bigToSmall = bigToSmall.sort((a, b) => b - a);
    let smallToBig = arr.slice();
    smallToBig = smallToBig.sort((a, b) => a - b);
    let result = [];
   
    for (let i = 0; i < arr.length / 2; i++) {
      result.push(bigToSmall[i]);
      result.push(smallToBig[i]);
    }
    console.log(result.join(" "));
  }
  sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);