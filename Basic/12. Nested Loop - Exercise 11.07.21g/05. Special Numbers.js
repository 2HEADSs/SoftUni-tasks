function solve(input) {
  let ourNum = Number(input[0]);
  let output = "";
  for (i = 1; i <= 9; i++) {
    for (j = 1; j <= 9; j++) {
      for (k = 1; k <= 9; k++) {
        for (l = 1; l <= 9; l++) {
            if(ourNum % i === 0 && ourNum % j === 0 && 
                ourNum % k === 0 && ourNum % l === 0){
                    output += `${i}${j}${k}${l} `
                }   
        }
      }
    }
  }
  console.log(output);
}
solve(["3"]);
console.log("----------");
solve(["11"]);
