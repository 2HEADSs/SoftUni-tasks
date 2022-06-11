function rotateArray(array) {
  let count = Number(array.pop());
  let output = array;
  let outputL = output.length;
  let tempOutput = [];
  
  for (let i = 0; i < count; i++) {
    let lastEl = output[outputL - 1];
    tempOutput.push(lastEl);
    for (let j = 0; j < outputL - 1; j++) {
      let element = output[j];
      tempOutput.push(element);
    }
    output = tempOutput;
    tempOutput = [];
  }
  console.log(output.join(" "));
}
rotateArray(["1", "2", "3", "4", "2"]);
rotateArray(["Banana", "Orange", "Coconut", "Apple", "15"]);
