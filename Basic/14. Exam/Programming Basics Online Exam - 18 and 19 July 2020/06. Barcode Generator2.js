function solve(input) {
    let startNumber = "" + input[0];
    let endNumber = "" + input[1];
    
    let startPart1 = Number(startNumber[0]);
    let startPart2 = Number(startNumber[1]);
    let startPart3 = Number(startNumber[2]);
    let startPart4 = Number(startNumber[3]);
  
    let endPart1 = Number(endNumber[0]);
    let endPart2 = Number(endNumber[1]);
    let endPart3 = Number(endNumber[2]);
    let endPart4 = Number(endNumber[3]);
  
    let buff = "";
  
    for (let a = startPart1; a <= endPart1; a++) {
      for (let b = startPart2; b <= endPart2; b++) {
        for (let c = startPart3; c <= endPart3; c++) {
          for (let d = startPart4; d <= endPart4; d++) {
            if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0) {
              buff += "" + a + b + c + d + " ";
            }
          }
        }
      }
    }
    console.log(buff);
  }
  solve(["2345", "6789"]);