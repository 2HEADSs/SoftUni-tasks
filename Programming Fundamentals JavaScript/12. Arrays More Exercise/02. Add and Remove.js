function addAndRemove(arr) {
  let arrL = arr.length;
  let step = 0;
  let output = [];
  for (let i = 0; i < arrL; i++) {
    let element = arr[i];
    switch (element) {
      case "add":
        step += 1;
        output.push(step);
        break;
      case "remove":
        step += 1;
        output.pop();
        break;
    }
  }
  if (output.length < 1) {
    console.log("Empty");
  } else {
    console.log(output.join(" "));
  }
}
addAndRemove(["add", "add", "add", "add"]);
addAndRemove(["add", "add", "remove", "add", "add"]);
addAndRemove(["remove", "remove", "remove"]);
