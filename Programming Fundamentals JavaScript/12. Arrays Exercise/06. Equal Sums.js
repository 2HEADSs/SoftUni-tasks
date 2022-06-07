function equalSum(arr) {
  let index = 0;
  let length = arr.length;
  let sumLeft = 0;
  let sumRight = 0;
  let currentNum = 0;
  let iscoincidence = false;

  for (let i = 0; i < length; i++) {
    sumLeft = 0;
    sumRight = 0;
    currentNum = arr[i];
    index = i;
    for (let j = 0; j < i; j++) {
      let currentLeft = arr[j];
      sumLeft += currentLeft;
    }

    for (let k = i + 1; k < length; k++) {
      let currentRight = arr[k];
      sumRight += currentRight;
    }
    if (sumLeft === sumRight ) {
      console.log(index);
      iscoincidence = true;
    }
  }
  if(!iscoincidence){
      console.log('no');
  }
}
equalSum([1, 2, 3, 3]);
equalSum([1, 2]);
equalSum([1]);
equalSum([1, 2, 3]);
equalSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
