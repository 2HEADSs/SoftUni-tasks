function oddNums(arr) {
  let arrForManipulation = arr.slice(0);
  let longArr = arrForManipulation.length;
  let outputArr = []
  for (let i = 0; i < longArr; i++) {
    let element = arrForManipulation[i];
    if(i % 2 !== 0){
        outputArr.push(element *2)
    }
  }
  console.log(outputArr.reverse().join(' '));
}
oddNums([10, 15, 20, 25]);
oddNums([3, 0, 10, 4, 7, 3]);
