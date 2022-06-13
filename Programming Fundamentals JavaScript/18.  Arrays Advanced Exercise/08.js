function solve(arr, arr2) {
  let arr2Length = arr2.length;

  let arr3 = [];

  for (let i = 0; i < arr2Length; i++) {
    if (arr3.length > 0) {
      arr = arr3;
      arr3 = [];
    }

    let current = arr2[i].split(" ");

    switch (current[0]) {
      case "add":
        arr.splice(Number(current[1]), 0, Number(current[2]));
        break;
      case "addMany":
        let index = Number(current[1]);
        for (let j = 2; j < current.length; j++) {
          arr.splice(index, 0, Number(current[j]));
          index++;
        }
        break;
      case "contains":
        console.log(arr.indexOf(Number(current[1])));
        break;
      case "remove":
        arr.splice(Number(current[1]), 1);
        break;
      case "shift":
        for (let j = 0; j < Number(current[1]); j++) {
          arr.push(arr.shift());
        }
        break;
      case "sumPairs":
        for (let j = 0; j < arr.length; j += 2) {
          if (!Number(arr[j + 1])) {
            arr3.push(arr[j]);
            break;
          }
          arr3.push(arr[j] + arr[j + 1]);
        }
        break;
      case "print":
        if (arr3.length > 0) {
          arr = arr3;
        }
        console.log(`[ ${arr.join(", ")} ]`);
        break;
    }
  }
}
