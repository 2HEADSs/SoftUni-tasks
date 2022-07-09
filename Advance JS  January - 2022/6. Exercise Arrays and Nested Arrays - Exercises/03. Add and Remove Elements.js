function solve(arr) {
  let result = arr.reduce((acc, el, index) => {
    if (el === 'add') {
      acc.push(index + 1);
    } else if (el === 'remove') {
      acc.pop();
    }
    return acc;
  }, []);
  console.log(result);
  // if (result.length === 0) {
  //   console.log('Empty');
  // } else {
  //   result.forEach((el) => console.log(`${el}`));
  // }
}
solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove']);
