function oddNums(arr) {
    let arrForManipulation = arr.slice(0);
    let longArr = arrForManipulation.length;
    let outputArr = [];
    for (let i = longArr - 1; i > 0; i--) {
      let element = arrForManipulation[i];
      if (i % 2 !== 0) {
        element *= 2;
        outputArr.push(element);
      }
    }
    console.log(outputArr.join(' '));
  }
  oddNums([10, 15, 20, 25]);
  oddNums([3, 0, 10, 4, 7, 3]);
  