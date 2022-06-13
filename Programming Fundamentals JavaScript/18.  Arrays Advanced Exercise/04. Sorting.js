function sorting(arr) {
    let arrManipulationAscend = arr.slice(0);
    let arrManipulationDescend = arr.slice(0);
    let sortedArAscend = arrManipulationAscend.sort((a, b) => {
      return a - b;
    });
    let sortedArDescend = arrManipulationDescend.sort((a, b) => {
      return b - a;
    });
    let long = arr.length;
    let outputArr = [];
    for (let i = 0; i < long; i++) {
      if (i % 2 === 0) {
        outputArr.push(sortedArDescend[0]);
        sortedArDescend.shift();
      } else {
        outputArr.push(sortedArAscend[0]);
        sortedArAscend.shift();
      }
    }
    console.log(outputArr.join(" "));
  }
  sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
  sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
  