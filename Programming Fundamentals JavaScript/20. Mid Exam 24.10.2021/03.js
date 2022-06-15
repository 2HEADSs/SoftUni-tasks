function solve(input) {
  let arr = input.shift().split(", ");

  for (let i = 0; i < input.length; i++) {
    let current = input[i].split(" - ");
    let command = current[0];
    let first = current[1];

    if (command === "End") {
      break;
    } else if (command === "Add") {
      let exist = false;
      for (let j = 0; j < arr.length; j++) {
        let phone = arr[j];
        if (phone === first) {
          exist = true;
        }
      }
      if (!exist) {
        arr.push(first);
      }
    } else if (command === "Remove") {
      for (let k = 0; k < arr.length; k++) {
        let phone = arr[k];
        if (phone === first) {
          arr.splice(k, 1);
        }
      }
    } else if (command === "Bonus phone") {
      let currentCommand = first.split(":");
      let phone = currentCommand[0];
      let bonus = currentCommand[1];

      for (let l = 0; l < arr.length; l++) {
        let currentPhone = arr[l];
        if (currentPhone === phone) {
          arr.splice(l + 1, 0, bonus);
        }
      }
    } else if (command === "Last") {
      for (let m = 0; m < arr.length; m++) {
        let currentPhone = arr[m];
        if (currentPhone === first) {
          arr.splice(m, 1);
          arr.push(currentPhone);
        }
      }
    }
  }
  console.log(arr.join(", "));
}
solve([
  "SamsungA50, MotorolaG5, IphoneSE",
  "Add - Iphone10",
  "Remove - IphoneSE",
  "End",
]);

solve([
  "HuaweiP20, XiaomiNote",
  "Remove - Samsung",
  "Bonus phone - XiaomiNote:Iphone5",
  "End",
]);

solve([
  "SamsungA50, MotorolaG5, HuaweiP10",
  "Last - SamsungA50",
  "Add - MotorolaG5",
  "End",
]);
