function reverse(n, arr) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
      newArr.push(arr[i]);
    }
    newArr = newArr.reverse();
    console.log(newArr.join(' '));
  }
  reverse(3, [10, 20, 30, 40, 50]);
  reverse(4, [-1, 20, 99, 5]);
  reverse(2, [66, 43, 75, 89, 47]);
  