function solve(input) {
  let v = Number(input[0]);
  let p1 = Number(input[1]);
  let p2 = Number(input[2]);
  let hour = Number(input[3]);
  let p1Deb = p1 * hour;
  let p2Deb = p2 * hour;
  let sumPipe = p1Deb + p2Deb;
  let debitPercent = (sumPipe / v) * 100;
  if (v >= sumPipe) {
    console.log(`The pool is ${debitPercent.toFixed(2)}% full. 
        Pipe 1: ${((p1Deb / sumPipe) * 100).toFixed(2)}%. 
        Pipe 2: ${((p2Deb / sumPipe) * 100).toFixed(2)}%.`);
  } else {
    console.log(`For ${hour.toFixed(2)} hours 
        the pool overflows with ${(sumPipe - v).toFixed(2)} liters."`);
  }
}
solve(["1000", "100", "120", "3"]);
solve(["100", "100", "100", "2.50"]);
