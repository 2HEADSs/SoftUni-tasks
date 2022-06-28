function solve([text]) {
  let pattern = /(@|#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
  let result = [];

  let match = text.match(pattern);
  if(match !== null){

    for (let el of match) {
      let splitter = el[0] + el[el.length - 1];
  
      let firstOfTwo = el.split(splitter)[0];
      let secondOfTwo = el.split(splitter)[1].split("").reverse().join("");
      firstOfTwo = firstOfTwo.substring(1);
      secondOfTwo = secondOfTwo.substring(1);
  
      if (firstOfTwo === secondOfTwo) {
        secondOfTwo = secondOfTwo.split("").reverse().join("");
        let twoElements = firstOfTwo + " " + "<=>" + " " + secondOfTwo;
        result.push(twoElements);
      }
    }
  }

  if(match !== null){
    console.log(`${match.length} word pairs found!`);
  }else {
    console.log(`No word pairs found!`);
  }
  
  if(result.length !== 0){
    console.log(`The mirror words are:`);
    console.log(result.join(", "));
  } else {
    console.log(`No mirror words!`);
  }
}
solve([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
solve([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ])
solve([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ])
//(@|#)([A-Za-z]{3,})\1
// let pattern = /(@|#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
