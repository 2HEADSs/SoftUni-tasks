function solve(input) {
  let index = 0;
  let element = input[index];
  let output = [];
  while (element !== "end") {
    element = element.split(":");
    let symbol = element[0];
    let positions = element[1].split("/").map(Number);
    for (let num of positions) {
      output[num] = symbol;
    }

    index++;
    element = input[index];
  }
  console.log(output.join(""));
}
solve(["a:0/2/4/6", "b:1/3/5", "end"]);
solve(['a:0/3/5/11',
'v:1/4',
'j:2',
'm:6/9/15',
's:7/13',
'd:8/14',
'c:10',
'l:12',
'end']
)
