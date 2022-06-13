function lastKNums(n, k) {
  let newArr = [1];
  while (newArr.length < n) {
    let sum = 0;
    if (newArr.length < k) {
      for(let num of newArr){
          sum += num
      }
    } else {
      for (let i = newArr.length - 1; i > newArr.length - 1 - k; i--) {
        let current = newArr[i];
        sum += current;
      }
    }
    newArr.push(sum);
  }
  console.log(newArr.join(' '));
}
lastKNums(6, 3);
lastKNums(8, 2);
