function solve(input) {
    let arr = input.shift().split(" ").map(Number);
  
    for (let i = 0; i < input.length; i++) {
      let current = input[i].split(" ");
      let command = current[0];
      let firstIndex = Number(current[1]);
      let secondIndex = Number(current[2]);
      let index = 0;
  
      if (command === "Add") {
        arr.push(firstIndex);
      } else if (command === "Remove") {
        index = arr.indexOf(firstIndex);
        if (index > -1) {
          arr.splice(index, 1);
        }
      } else if (command === "Replace") {
        index = arr.indexOf(firstIndex);
        if (index > -1) {
          arr[index] = secondIndex;
        }
      } else if (command === "Collapse") {
        let length = arr.length;
        for (let j = 0; j < length; j++) {
          let num = arr[j];
          if (num < firstIndex) {
            arr.splice(j, 1);
            j = -1;
          }
        }
      } else if (command === "Finish") {
        console.log(arr.join(" "));
        break;
      }
    }
  }
solve(["1 4 5 19", "Add 1", "Remove 4", "Finish"]);
solve(["1 20 -1 10", "Collapse 8", "Finish"]);
solve(["5 9 70 -56 9 9", "Replace 9 10", "Remove 9", "Finish"]);
